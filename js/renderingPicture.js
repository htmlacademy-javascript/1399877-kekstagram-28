import {createPhotos} from './mockPhotos.js';

const dataCreatePicture = createPhotos();
const SAMPLE = document.querySelector('#picture').content.cloneNode(true);
const PICTURES = document.querySelector('.pictures');
const fragment = document.createDocumentFragment();

const createPictures = (data, sample) =>{
  const sampleClone = sample.cloneNode(true);
  const randomPhoto = sampleClone.querySelector('.picture__img');
  randomPhoto.srс = data.url;
  randomPhoto.alt = data.description;
  const likes = sampleClone.querySelector('.picture__likes');
  likes.textContent = data.likes;
  const comments = sampleClone.querySelector('.picture__comments');
  comments.textContent = data.comments.length;
  fragment.appendChild(sampleClone);
  PICTURES.appendChild(fragment);
};
for(let i = 0; i < dataCreatePicture.length ; i++){
  createPictures(dataCreatePicture[i],SAMPLE);
}

export {dataCreatePicture};

// Отобразить фотографии других пользователей.

// Заведите модуль, который будет отвечать за отрисовку миниатюр.

// На основе временных данных для разработки и шаблона #picture создайте DOM-элементы, соответствующие фотографиям, и заполните их данными:

// Адрес изображения url подставьте как атрибут src изображения.
// Количество лайков likes выведите в блок .picture__likes.
// Количество комментариев comments выведите в блок .picture__comments.
// Отрисуйте сгенерированные DOM-элементы в блок .pictures. Для вставки элементов используйте DocumentFragment.

// Подключите модуль в проект.
