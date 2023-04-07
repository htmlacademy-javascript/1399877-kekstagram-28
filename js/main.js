import {load,submit} from './api.js';
import {renderPhotos} from './rendering-picture.js';
import { setPhotos} from './popup-gallery.js';
import {initSubmitForm} from './form.js';
import './photo-scale.js';
import './photo-filters.js';
import './avatar.js';
import {initSubmitSort} from './sort.js';

const photos = await load();
if (photos) {
  renderPhotos(photos);
  setPhotos(photos);
  initSubmitSort(photos, renderPhotos);
}


initSubmitForm({submitData: submit});


