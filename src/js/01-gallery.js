import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const galleryRef = document.querySelector('.gallery');

//Gallery Items Markup
const galleryItemsMarkup = createGalleryItemsMarkUp(galleryItems);

galleryRef.innerHTML = galleryItemsMarkup;

function createGalleryItemsMarkUp(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <a class="gallery__item" href="${original}">
    <img class="gallery__image" 
    src="${preview}" 
    data-source="${original}"
    alt="${description}" />
    </a>`;
    })
    .join('');
}
// image processing by Lightbox library
let lightbox = new SimpleLightbox('.gallery a', {
  /* options */
  captions: true,
  captionType: 'attr',
  captionPosition: 'bottom',
  captionDelay: 250,
  captionsData: 'alt',
});