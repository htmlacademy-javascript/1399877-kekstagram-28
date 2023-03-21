import {picturesContainer} from './renderingPicture.js';

const displayingWindow = document.querySelector('.big-picture');
const closeBigPhoto = displayingWindow.querySelector('.big-picture__cancel');
const bigPicture = displayingWindow.querySelector('.big-picture__img img');
const likesCounter = displayingWindow.querySelector('.likes-count');
const commentCount = displayingWindow.querySelector('.comments-count');
const commentsList = displayingWindow.querySelector('.social__comments');
const commentTemplate = displayingWindow.querySelector('.social__comment').cloneNode(true);
const commentLoader = displayingWindow.querySelector('.social__comments-loader');
const showComments = displayingWindow.querySelector('.social__comment-count');
let photos = [];

const COUNT_ON_PAGE = 5;

const descriptionPhoto = displayingWindow.querySelector('.social__caption');


const hidePopup = (e) => {
  if (e.key && e.key !== 'Escape') {
    return;
  }
  e.preventDefault();
  displayingWindow.classList.add('hidden');
  closeBigPhoto.removeEventListener('click', hidePopup);
  document.removeEventListener('keydown', hidePopup);
  document.body.classList.remove('modal-open');
  commentLoader.classList.remove('hidden');
};

const addComments = (comments) => {
  commentsList.innerHTML = '';
  commentCount.textContent = comments.length;
  let start = 0;

  const LaodNext = ()=>{
    const end = start + COUNT_ON_PAGE;
    const partComments = comments.slice(start,end);

    showComments.textContent = `${Math.min(end, comments.length)} из ${comments.length}`;
    const commentsFragment = document.createDocumentFragment();
    partComments.forEach((comment) => {
      const commentClone = commentTemplate.cloneNode(true);
      const img = commentClone.querySelector('img');
      img.src = comment.avatar;
      img.alt = comment.name;
      commentClone.querySelector('p').textContent = comment.message;
      commentsFragment.append(commentClone);
    });

    commentsList.append(commentsFragment);

    if(end >= comments.length){
      commentLoader.classList.add('hidden');
      commentLoader.removeEventListener('click', LaodNext);
    }else {
      commentLoader.classList.remove('hidden');
      commentLoader.addEventListener('click', LaodNext);
    }
    start = end;
  };
  LaodNext();
};


const setPhotoData = (photo) => {
  bigPicture.src = photo.url;
  likesCounter.textContent = photo.likes;
  descriptionPhoto.textContent = photo.description;
  addComments(photo.comments);
};

const showPopup = (event) => {
  event.preventDefault();
  const photoId = parseInt(event.target.closest('[data-id]')?.dataset.id, 10);
  if (!photoId) {
    return;
  }

  const photoData = photos.find((photo) => photo.id === photoId);
  if (!photoData) {
    return;
  }
  console.log(photoData)
  setPhotoData(photoData);
  displayingWindow.classList.remove('hidden');
  closeBigPhoto.addEventListener('click', hidePopup);
  document.addEventListener('keydown', hidePopup);
  document.body.classList.add('modal-open');
};


const setPhotos = (data) => {
  photos = data;
};

picturesContainer.addEventListener('click', showPopup);

export { setPhotos };
