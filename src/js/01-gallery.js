// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const ulGallery = document.querySelector('.gallery');

const galleryMarkup = galleryItems
  .map(({ preview, original, description }) => {
    return `<li class="gallery__item">
                <a class="gallery__link" href="${original}">
                    <img class="gallery__image" src="${preview}" alt="${description}"
                    />
                </a>
            </li>`;
  })
  .join('');

ulGallery.insertAdjacentHTML('afterbegin', galleryMarkup);

const lightbox = new SimpleLightbox('.gallery a', {
  navText: ['<', '>'],
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});

ulGallery.addEventListener('click', lightbox);
