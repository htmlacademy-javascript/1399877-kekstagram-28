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

const createComments = () =>({
  id: getRandomPositiveInteger(15,200),
  avatar: `img/avatar-${getRandomPositiveInteger(0, 6)}.svg`,
  message: getRandomArrayElement(COMMENTS),
  name: getRandomArrayElement(NAMES),
});
const createObj = () =>{
  const randomIdNumber = createIdGenerator();
  const randomUrlNumber = createIdGenerator();
  const OBJ = [];
  for(let i = 0; i < 25; i++){
    OBJ[i] = {};
    OBJ[i].description = getRandomArrayElement(DESCRIPTIONS);
    OBJ[i].comments = createComments();
    OBJ[i].id = randomIdNumber();
    OBJ[i].url = `photo/${randomUrlNumber()}.jpg`;
    OBJ[i].likes = getRandomPositiveInteger(15,200);
    OBJ[i].name = getRandomArrayElement(NAMES);
  }
  return OBJ;
};
createObj();
