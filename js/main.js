import {load, submit} from './api.js';
import {renderPhotos} from './rendering-picture.js';
import {initSubmitForm} from './form.js';
import {initSubmitSort} from './sort.js';
import {debounce} from './utils.js';
import './photo-scale.js';
import './photo-filters.js';
import './avatar.js';

const photos = await load();
if (photos) {
  renderPhotos(photos);
  initSubmitSort(photos, debounce(renderPhotos));
}

initSubmitForm({submitData: submit});
