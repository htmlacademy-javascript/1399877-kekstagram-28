const URL = 'https://28.javascript.pages.academy/kekstagram';

const load = (rendor,set)=>{
  fetch(`${URL}/data`)
    .then((response) => response.json())
    .then((photos)=> {
      rendor(photos);
      set(photos);
    });
};
const submitForm = (data,form)=>{
  if (pristine.validate()) {
  const formData = new FormData(evt.target);
  hideModal(evt);
}else{
  console.log(2)
}
  fetch(
    'https://28.javascript.pages.academy/kekstagram',
    {
      method: 'POST',
      body: data,
    },
  );
};

export {load,submitForm};
