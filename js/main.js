import {createPhotos} from './mockPhotos.js';
import {renderPhotos} from './renderingPicture.js';
import { setPhotos} from './popupGallery.js';
import './form.js';

const photos = createPhotos();
renderPhotos(photos);
setPhotos(photos);

