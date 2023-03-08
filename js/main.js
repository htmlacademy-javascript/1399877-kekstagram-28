const NAMES = [
  'Андрей','Мария',
  'Станислав',
  'Олег'
];
const COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё. Когда вы делаете фотографию, хорошо бы убирать палец из кадра.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.'
];
const DESCRIPTIONS = [
  'Это мяч',
  'Коты наше все',
  'Анапа 2008',
  '#Я в коридоре на Балли'
];
const COMMENTS_COUNT = 3;
const getRandomPositiveInteger = (a, b) =>{
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};
const createIdGenerator = () => {
  let lastGeneratedId = 0;
  return function (){
    lastGeneratedId += 1;
    return lastGeneratedId;
  };
};


const getRandomArrayElement = (array) => array[getRandomPositiveInteger(0, array.length - 1)];
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
    photos[i].url = `photo/${getRandomUrlNumber()}.jpg`;
    photos[i].likes = getRandomPositiveInteger(15,200);
  }
  return photos;
};
createPhotos();
