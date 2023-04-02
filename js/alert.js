const showAlert = (message)=>{
  const el = document.createElement('div');
  el.textContent = message;
  el.style.background = 'red';
  el.style.position = 'fixed';
  el.style.top = 0;
  document.body.appendChild(el);

  return new Promise ((response)=>{
    el.addEventListener('click',()=>{
      document.body.removeChild(el);
      response();
    });
  }).then(()=>{
    console.log(1);
  });
};
export{showAlert};
