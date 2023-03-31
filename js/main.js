import {load,submitForm} from './api.js';
import {renderPhotos} from './rendering-picture.js';
import { setPhotos} from './popup-gallery.js';
import {imgUploadForm, hideModal} from './form.js';
import './photo-scale.js';
import './photo-filters.js';

load(renderPhotos, setPhotos);
submitForm();

