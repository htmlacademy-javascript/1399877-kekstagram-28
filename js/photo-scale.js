const SCALE_STEP = 25;

const smallerScale = document.querySelector('.scale__control--smaller');
const biggerScale = document.querySelector('.scale__control--bigger');
const scaleValue = document.querySelector('.scale__control--value');
const uploadImg = document.querySelector('.img-upload__preview');


const addValueScalePhoto = ()=> parseInt(scaleValue.value, 10);

const decreaseValueScale = (evt)=>{
  evt.preventDefault();
  let valueScalle = addValueScalePhoto();

  if(valueScalle <= SCALE_STEP){
    return;
  }
  valueScalle -= SCALE_STEP;
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
  valueScalle += SCALE_STEP;
  scaleValue.value = `${valueScalle}%`;
  const style = `transform: scale(${valueScalle / 100})`;
  uploadImg.style = style;
};
const onClickHandler = ()=>{
  smallerScale.addEventListener('click', decreaseValueScale);
  biggerScale.addEventListener('click', increaseValueScale);
};
const offClickHandler = ()=>{
  smallerScale.removeEventListener('click', decreaseValueScale);
  biggerScale.removeEventListener('click', increaseValueScale);
};
const resetScalleValue = ()=>{
  const VALUE_SCALLE = 100;
  scaleValue.value = `${VALUE_SCALLE}%`;
  const style = `transform: scale(${VALUE_SCALLE / 100})`;
  uploadImg.style = style;
};
export {onClickHandler, offClickHandler,resetScalleValue};

