import {NAMES,COMMENTS,DESCRIPTIONS,COMMENTS_COUNT} from './data.js';
import {getRandomPositiveInteger, createIdGenerator,getRandomArrayElement} from './utils.js';
const getCommentId = createIdGenerator();
const createComments = () => Array.from({length: COMMENTS_COUNT},() => ({
  id: getCommentId(),
  avatar: `img/avatar-${getRandomPositiveInteger(0, 6)}.svg`,
  message: getRandomArrayElement(COMMENTS),
  name: getRandomArrayElement(NAMES),
}));

const createPhotos = () =>{
  const getRandomIdNumber = createIdGenerator();
  const getRandomUrlNumber = createIdGenerator();
  const photos = [];
  for(let i = 0; i < 25; i++){
    photos[i] = {};
    photos[i].description = getRandomArrayElement(DESCRIPTIONS);
    photos[i].comments = createComments();
    photos[i].id = getRandomIdNumber();
    photos[i].url = `photos/${getRandomUrlNumber()}.jpg`;
    photos[i].likes = getRandomPositiveInteger(15,200);
  }
  return photos;
};
export {createPhotos};
