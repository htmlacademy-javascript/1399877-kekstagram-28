const showError = (message) => new Promise((response) => {
  const popup = document.querySelector('#error').content.cloneNode(true).querySelector('.error');
  const close = (e) => {
    if (e?.key && e.key !== 'Escape') {
      return;
    } else {
      e?.stopPropagation();
    }
    document.body.removeChild(document.querySelector('.error'));
    document.removeEventListener('keydown', close, {capture: true});
    response();
  };
  popup.querySelector('.error__button').addEventListener('click', close);

  if(message){
    popup.querySelector('.error__title').textContent = message;
  }

  popup.addEventListener('click', (e) => {
    if (e.target === popup) {
      close();
    }
  });
  document.addEventListener('keydown', close, {capture: true});
  document.body.appendChild(popup);
});
const showAlert = () => new Promise((response) => {
  const popup = document.querySelector('#success').content.cloneNode(true).querySelector('.success');
  const close = (e) => {
    if (e?.key && e.key !== 'Escape') {
      return;
    } else {
      e?.stopPropagation();
    }
    document.body.removeChild(document.querySelector('.success'));
    document.removeEventListener('keydown', close, {capture: true});
    response();
  };
  popup.querySelector('.success__button').addEventListener('click', close);
  popup.addEventListener('click', (e) => {
    if (e.target === popup) {
      close();
    }
  });
  document.addEventListener('keydown', close, {capture: true});
  document.body.appendChild(popup);
});

export{showAlert, showError};
