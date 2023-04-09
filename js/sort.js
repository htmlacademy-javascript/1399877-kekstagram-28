import {getRandomPositiveInteger} from './utils.js';
const initSubmitSort = (arr, render)=>{

  const filterDiscussed = document.querySelector('#filter-discussed');
  const filterRandom = document.querySelector('#filter-random');
  const filterDefault = document.querySelector('#filter-default');
  const cloneArr = arr.slice();
  let buttonActive = document.querySelector('#filter-default');

  const addClassActive = (evt) =>{
    buttonActive = evt.target;
    buttonActive.classList.add('img-filters__button--active');
  };
  const removeClassAtive = () =>{
    buttonActive.classList.remove('img-filters__button--active');
  };
  const sortByPopularity = (evt) => {
    removeClassAtive();
    addClassActive(evt);
    cloneArr.sort((a, b) => b.comments.length - a.comments.length);
    render(cloneArr);

  };

  const sortRandomElements = (evt)=>{
    const sortArr = [];
    removeClassAtive();
    addClassActive(evt);
    while(sortArr.length !== 10){
      if(new Set(sortArr).size === sortArr.length){
        sortArr.push(cloneArr[getRandomPositiveInteger(0, cloneArr.length - 1)]);
      }else{
        sortArr.pop();
      }
    }
    render(sortArr);

  };

  const sortByDefault = (evt) => {
    removeClassAtive();
    addClassActive(evt);
    render(arr);
  };

  filterDiscussed.addEventListener('click', sortByPopularity);
  filterRandom.addEventListener('click',sortRandomElements);
  filterDefault.addEventListener('click', sortByDefault);
};

export {initSubmitSort};
