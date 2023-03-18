import {picturesContainer} from './renderingPicture.js';

const displayingWindow = document.querySelector('.big-picture');
const closeBigPhoto = displayingWindow.querySelector('.big-picture__cancel');
const bigPicture = displayingWindow.querySelector('.big-picture__img img');
const likesCounter = displayingWindow.querySelector('.likes-count');
const commentCount = displayingWindow.querySelector('.comments-count');
const commentsList = displayingWindow.querySelectorAll('.social__comments li');
const descriptionPhoto = displayingWindow.querySelector('.social__caption');

const addClass = ()=>{
  const socialCommentCount = displayingWindow.querySelector('.social__comment-count');
  const commentsLoader = displayingWindow.querySelector('.comments-loader');
  document.querySelector('body').classList.add('modal-open');
  socialCommentCount.classList.add('hidden');
  commentsLoader.classList.add('hidden');
};

const closePopup = ()=>{
  event.preventDefault();
  displayingWindow.classList.add('hidden');
  closeBigPhoto.removeEventListener('click',closePopup);
};
const closePopupKey = ()=>{
  event.preventDefault();
  if(event.key === 'Escape'){
    displayingWindow.classList.add('hidden');
    closeBigPhoto.removeEventListener('click', closePopup);
    document.addEventListener('keydown',closePopupKey);
  }
};
const showPopup = ()=>{
  event.preventDefault();
  const thumbnail = event.target.closest('[data-index-id]');
  if (!thumbnail){
    return;
  }
  displayingWindow.classList.remove('hidden');
  addClass();
  closeBigPhoto.addEventListener('click',closePopup);
  document.addEventListener('keydown',closePopupKey);
  bigPicture.src = event.target.src;
  closePopupKey();
  return thumbnail.dataset.indexId;
};
const addComments = (indexArray) =>{
  for(let i = 0; i < commentsList.length; i++){
    const img = commentsList[i].querySelector('img');
    img.src = indexArray.comments[i].avatar;
    img.alt = indexArray.comments[i].name;
    commentsList[i].querySelector('p').textContent = indexArray.comments[i].message;
  }

};
const appendData = (array,id) =>{
  array.forEach((element) => {
    if(+id === element.id){
      likesCounter.textContent = element.likes;
      commentCount.textContent = element.comments.length;
      addComments(element);
      descriptionPhoto.textContent = element.description;
    }
  });
};

const addHandler = (data) =>{
  const dataProperties = data;
  picturesContainer.addEventListener('click', ()=>{
    const indexId = showPopup();
    appendData(dataProperties,indexId);
  });

};
export { addHandler };
