
import {picturesContainer} from './rendering-picture.js';
import {offClickHandler, onClickHandler, resetScalleValue} from './photo-scale.js';
import {resetEffect} from './photo-filters.js';

const VALID_SYMBOLS = /^#[a-zа-яё0-9]{1,19}$/i;

const initSubmitForm = ({submitData}) => {
  const imgUploadForm = document.querySelector('.img-upload__form');
  const fileFild = picturesContainer.querySelector('.img-upload__input');
  const filtersForm = picturesContainer.querySelector('.img-upload__overlay');
  const battonHideFiltorsForm = filtersForm.querySelector('.img-upload__cancel');
  const inputTag = filtersForm.querySelector('.text__hashtags');
  const inputComment = filtersForm.querySelector('.text__description');
  const imgUploadSubmit = imgUploadForm.querySelector('.img-upload__submit');

  const pristine = new Pristine(imgUploadForm, {
    classTo: 'img-upload__field-wrapper',
    errorTextParent: 'img-upload__field-wrapper',
    errorTextClass: 'img-upload__field-wrapper',
  });
  const focusForms = (evt) => {
    if (evt.key === 'Escape') {
      evt.stopPropagation();
    }
  };
  const isValidateTag = (tag) => VALID_SYMBOLS.test(tag);
  const isUniqueValue = (tags) => {
    const tagsTolowerCase = tags.map((tag) => tag.toLowerCase());
    return tagsTolowerCase.length === new Set(tagsTolowerCase).size;
  };
  const isLengthTag = (tag) => tag.length <= 5;

  const validateTags = (value) => {
    const tags = value
      .trim()
      .split(' ')
      .filter((tag) => tag.trim().length);
    return isUniqueValue(tags) && tags.every(isValidateTag) && isLengthTag(tags);
  };

  pristine.addValidator(
    inputTag,
    validateTags,
    'Хэштэг не соответствует требованиям',
  );
  const removeEvents = (cb) => {
    filtersForm.classList.add('hidden');
    document.body.classList.remove('modal-open');
    battonHideFiltorsForm.removeEventListener('click', cb);
    battonHideFiltorsForm.removeEventListener('keydown', cb);
    inputTag.removeEventListener('keydown', focusForms);
    inputComment.removeEventListener('keydown', focusForms);
  };
  const hideModal = (evt) => {
    if (evt.key && evt.key !== 'Escape') {
      return false;
    }
    evt.preventDefault();
    removeEvents(hideModal);

    imgUploadForm.reset();
    resetEffect();
    resetScalleValue();
    offClickHandler();
  };

  const showModal = () => {
    filtersForm.classList.remove('hidden');
    document.body.classList.add('modal-open');
    battonHideFiltorsForm.addEventListener('click', hideModal);
    document.addEventListener('keydown', hideModal);
    inputTag.addEventListener('keydown', focusForms);
    inputComment.addEventListener('keydown', focusForms);
    onClickHandler();
    pristine.validate();
  };

  let isProcessing = false;
  const disableForm = function () {
    isProcessing = true;
    imgUploadSubmit.disabled = true;
    imgUploadSubmit.textContent = 'Подождите...';
  };

  const enableForm = function () {
    isProcessing = false;
    imgUploadSubmit.disabled = false;
    imgUploadSubmit.textContent = 'Отправить';
  };

  const onFormSubmit = (evt) => {
    evt.preventDefault();
    if (!isProcessing && pristine.validate()) {
      disableForm();
      submitData?.(new FormData(evt.target))
        .then(() => {
          hideModal(evt);
        })
        .finally(() => {
          enableForm();
        });
    }
  };

  fileFild.addEventListener('change', showModal);
  imgUploadForm.addEventListener('submit', onFormSubmit);
};

export {initSubmitForm};
