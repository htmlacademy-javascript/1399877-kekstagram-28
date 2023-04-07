const showError = ()=>{
  const fragment = document.createDocumentFragment();
  fragment.appendChild(document.querySelector('#error').content.cloneNode(true));
  document.body.appendChild(fragment);

  return new Promise ((response)=>{
    document.querySelector('.error__button').addEventListener('click',()=>{
      document.body.removeChild(document.querySelector('.error'));
      response();
    });
  });
};
const showAlert = ()=>{
  const fragment = document.createDocumentFragment();
  fragment.appendChild(document.querySelector('#success').content.cloneNode(true));
  document.body.appendChild(fragment);

  return new Promise ((response)=>{
    document.querySelector('.success__button').addEventListener('click',()=>{
      document.body.removeChild(document.querySelector('.success'));
      response();
    });
  });
};

export{showAlert, showError};
