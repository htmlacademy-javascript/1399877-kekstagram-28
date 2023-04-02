const URL = 'https://28.javascript.pages.academy/kekstagram';

const load = async () =>
  fetch(`${URL}/data`)
    .then((response) => response.json())
    .catch((reject)=> reject());

const setSubmit = async (data) => {

  fetch(
    URL,
    {
      method: 'POST',
      body: data,
    })
    .then()
    .catch();
};

export {load,setSubmit};
