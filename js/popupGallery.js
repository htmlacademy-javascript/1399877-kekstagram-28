import {picturesContainer} from './renderingPicture.js';

const displayingWindow = document.querySelector('.big-picture');
const closeBigPhoto = displayingWindow.querySelector('.big-picture__cancel');
const bigPicture = displayingWindow.querySelector('.big-picture__img img');
const likesCounter = displayingWindow.querySelector('.likes-count');
const commentCount = displayingWindow.querySelector('.comments-count');
const commentsList = displayingWindow.querySelector('.social__comments');
const commentTemplate = displayingWindow.querySelector('.social__comment').cloneNode(true);

let photos = [];

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
};

const addComments = (comments) => {
  displayingWindow.querySelector('.social__comment-count').classList.add('hidden');
  displayingWindow.querySelector('.comments-loader').classList.add('hidden');
  commentsList.innerHTML = '';
  commentCount.textContent = comments.length;

  const commentsFragment = document.createDocumentFragment();
  comments.forEach((comment) => {
    const commentClone = commentTemplate.cloneNode(true);
    const img = commentClone.querySelector('img');
    img.src = comment.avatar;
    img.alt = comment.name;
    commentClone.querySelector('p').textContent = comment.message;
    commentsFragment.append(commentClone);
  });
  commentsList.append(commentsFragment);
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
