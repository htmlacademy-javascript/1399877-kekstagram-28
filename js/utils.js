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
export{getRandomPositiveInteger,createIdGenerator, getRandomArrayElement};
