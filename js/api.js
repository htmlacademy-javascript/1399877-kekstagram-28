const URL = 'https://28.javascript.pages.academy/kekstagram';

const load = () =>
  fetch(`${URL}/data`)
    .then((response) => response.json())
    .catch(()=>{});

const setSubmit = (data,hide)=>{
  fetch(
    URL,
    {
      method: 'POST',
      body: data,
    }
  ).then(() => hide());
};

export {load,setSubmit};
