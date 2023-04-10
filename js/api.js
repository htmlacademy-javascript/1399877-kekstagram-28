import { showAlert, showError } from './alert.js';
const URL = 'https://28.javascript.pages.academy/kekstagram';

const load = async () =>
  fetch(`${URL}/data`)
    .then((response) => {
      if (response.ok) {
        document.querySelector('.img-filters').classList.remove('img-filters--inactive');
        return response.json();
      }
      throw new Error('Данные не загрузились');
    })
    .catch((reason)=> showError(reason.message));


const submit = async (data) =>
  fetch(
    URL,
    {
      method: 'POST',
      body: data,
    })
    .then((response) => {
      if (response.ok) {
        showAlert('Данные успешно отправились!');
        return Promise.resolve();
      }
      throw new Error('Данные не отправились');
    })
    .catch((reason) => {
      showError(reason.message);
      return Promise.reject(reason.message);
    });

export {load,submit};
