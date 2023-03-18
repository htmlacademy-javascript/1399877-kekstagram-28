import {createPhotos} from './mockPhotos.js';
import {renderPhotos} from './renderingPicture.js';
import { addHandler } from './popupGallery.js';

const photos = createPhotos();
renderPhotos(photos);
addHandler(photos);

