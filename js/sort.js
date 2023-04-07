import {getRandomPositiveInteger} from './utils.js';
const initSubmitSort = (arr, render)=>{

  const filterDiscussed = document.querySelector('#filter-discussed');
  const filterRandom = document.querySelector('#filter-random');
  const filterDefault = document.querySelector('#filter-default');
  const cloneArr = arr;

  const removeElement = ()=>{
    const picture = document.querySelectorAll('.picture');
    picture.forEach((element) => {
      element.remove();
    });
  };

  const sortByPopularity = () => {
    setTimeout(() => {
      cloneArr.sort((a, b) => b.comments.length - a.comments.length);
      render(cloneArr);
    }, 1000);
  };
  const addEventsDiscussed = (evt)=>{
    evt.preventDefault();
    removeElement();
    sortByPopularity();
  };

  const sortRandomElements = ()=>{
    const sortArr = [];
    setTimeout(() => {
      while(sortArr.length !== 10){
        if(new Set(sortArr).size === sortArr.length){
          sortArr.push(cloneArr[getRandomPositiveInteger(0, cloneArr.length - 1)]);
        }else{
          sortArr.pop();
        }
      }
      render(sortArr);
    }, 1000);
  };
  const addEventRandom = (evt) => {
    evt.preventDefault();
    removeElement();
    sortRandomElements();
  };

  const addEventDefault = (evt) => {
    setTimeout(() => {
      evt.preventDefault();
      removeElement();
      render(arr);
    },1000);
  };
  filterDiscussed.addEventListener('click', addEventsDiscussed);
  filterRandom.addEventListener('click',addEventRandom);
  filterDefault.addEventListener('click', addEventDefault);
};

export {initSubmitSort};
