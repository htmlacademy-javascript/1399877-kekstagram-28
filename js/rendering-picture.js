import {setPhotos} from './popup-gallery.js';

const samplePicture = document.querySelector('#picture').content.cloneNode(true);
const picturesContainer = document.querySelector('.pictures');

const removeElement = ()=>{
  const picture = document.querySelectorAll('.picture');
  picture.forEach((element) => {
    element.remove();
  });
};

const createPicture = (data) =>{
  const sampleClone = samplePicture.cloneNode(true);
  const randomPhoto = sampleClone.querySelector('.picture__img');
  randomPhoto.src = data.url;
  randomPhoto.alt = data.description;
  sampleClone.querySelector('.picture__likes').textContent = data.likes;
  sampleClone.querySelector('.picture__comments').textContent = data.comments.length;
  randomPhoto.dataset.id = data.id;
  return sampleClone;
};


const renderPhotos = (photos) => {
  removeElement();
  const fragment = document.createDocumentFragment();

  photos.forEach((photo) => fragment.appendChild(createPicture(photo)));

  picturesContainer.appendChild(fragment);
  setPhotos(photos);
};

export {renderPhotos, picturesContainer};
