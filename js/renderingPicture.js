const samplePicture = document.querySelector('#picture').content.cloneNode(true);
const picturesContainer = document.querySelector('.pictures');


const createPicture = (data) =>{
  const sampleClone = samplePicture.cloneNode(true);
  const randomPhoto = sampleClone.querySelector('.picture__img');
  randomPhoto.src = data.url;
  randomPhoto.alt = data.description;
  sampleClone.querySelector('.picture__likes').textContent = data.likes;
  sampleClone.querySelector('.picture__comments').textContent = data.comments.length;
  return sampleClone;
};


const renderPhotos = (photos) => {
  const fragment = document.createDocumentFragment();

  photos.forEach((photo) => fragment.appendChild(createPicture(photo)));

  picturesContainer.appendChild(fragment);
};

export {renderPhotos};
