const SmallerScale = document.querySelector('.scale__control--smaller');
const BiggerScale = document.querySelector('.scale__control--bigger');
const scaleValue = document.querySelector('.scale__control--value');
const uploadImg = document.querySelector('.img-upload__preview');

const addValueScalePhoto = ()=> parseInt(scaleValue.value, 10);

const decreaseValueScale = (evt)=>{
  evt.preventDefault();
  let valueScalle = addValueScalePhoto();

  if(valueScalle <= 25){
    return;
  }
  valueScalle -= 25;
  scaleValue.value = `${valueScalle}%`;
  const style = `transform: scale(${valueScalle / 100})`;
  uploadImg.style = style;
};
const increaseValueScale = (evt)=>{
  evt.preventDefault();
  let valueScalle = addValueScalePhoto();

  if(valueScalle === 100){

    return;
  }
  valueScalle += 25;
  scaleValue.value = `${valueScalle}%`;
  const style = `transform: scale(${valueScalle / 100})`;
  uploadImg.style = style;
};
const onClickHandler = ()=>{
  SmallerScale.addEventListener('click', decreaseValueScale);
  BiggerScale.addEventListener('click', increaseValueScale);
};
const offClickHandler = ()=>{
  SmallerScale.removeEventListener('click', decreaseValueScale);
  BiggerScale.removeEventListener('click', increaseValueScale);
};
export {onClickHandler, offClickHandler};

