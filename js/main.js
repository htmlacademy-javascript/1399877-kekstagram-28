const NAMES_ARRAY = [
  'Андрей','Мария',
  'Станислав',
  'Олег'
];
const COMMENTS_ARRAY = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё. Когда вы делаете фотографию, хорошо бы убирать палец из кадра.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.'
];
const DESCRIPTION = [
  'Это мяч',
  'Коты наше все',
  'Анапа 2008',
  '#Я в коридоре на Балли'
];
const OBJ = [];
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
const randomIdNumber = createIdGenerator();
const randomUrlNumber = createIdGenerator();
const createObj = () => {
  const randomDescriptionIndex = getRandomPositiveInteger(0, DESCRIPTION.length - 1);
  const randomCounterLikes = getRandomPositiveInteger(15,200);
  const randomCommentsIndex = getRandomPositiveInteger(0,COMMENTS_ARRAY.length - 1);
  const randomNameIndex = getRandomPositiveInteger(0,NAMES_ARRAY.length - 1);
  return {
    description: DESCRIPTION[randomDescriptionIndex],
    likes: randomCounterLikes,
    comments: COMMENTS_ARRAY[randomCommentsIndex],
    name: NAMES_ARRAY[randomNameIndex],
  };
};

const saveValueIndexObj = () =>{
  for(let i = 0; i < 25; i++){
    OBJ[i] = createObj();
    OBJ[i].id = randomIdNumber();
    OBJ[i].url = `photo/${randomUrlNumber()}.jpg`;
  }
};
saveValueIndexObj();
