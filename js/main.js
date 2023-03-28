import {createPhotos} from './mockPhotos.js';
import {renderPhotos} from './rendering-picture.js';
import { setPhotos} from './popup-gallery.js';
import './form.js';
import './photo-scale.js';
import './photo-filters.js';

const photos = createPhotos();
renderPhotos(photos);
setPhotos(photos);

