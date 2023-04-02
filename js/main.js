import {load,setSubmit} from './api.js';
import {renderPhotos} from './rendering-picture.js';
import { setPhotos} from './popup-gallery.js';
import {hideModal, setUserFormSubmit} from './form.js';
import { showAlert } from './alert.js';
import './photo-scale.js';
import './photo-filters.js';


const photos = await load();

renderPhotos(photos);
setPhotos(photos);
setUserFormSubmit(setSubmit,showAlert);


