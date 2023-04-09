import {getRandomPositiveInteger} from './utils.js';
const initSubmitSort = (arr, render)=>{

  const filterDiscussed = document.querySelector('#filter-discussed');
  const filterRandom = document.querySelector('#filter-random');
  const filterDefault = document.querySelector('#filter-default');
  const cloneArr = arr.slice();

  const sortByPopularity = () => {

    cloneArr.sort((a, b) => b.comments.length - a.comments.length);
    render(cloneArr);

  };

  const sortRandomElements = ()=>{
    const sortArr = [];

    while(sortArr.length !== 10){
      if(new Set(sortArr).size === sortArr.length){
        sortArr.push(cloneArr[getRandomPositiveInteger(0, cloneArr.length - 1)]);
      }else{
        sortArr.pop();
      }
    }
    render(sortArr);

  };

  const sortByDefault = () => render(arr);

  filterDiscussed.addEventListener('click', sortByPopularity);
  filterRandom.addEventListener('click',sortRandomElements);
  filterDefault.addEventListener('click', sortByDefault);
};

export {initSubmitSort};
