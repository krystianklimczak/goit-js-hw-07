import { galleryItems } from './gallery-items.js';

// Change code below this line

const gallery = document.querySelector('.gallery');
const galleryArray = [];

galleryItems.forEach(img => {
  const galleryElement = document.createElement('li');
  galleryElement.classList.add('gallery__item');
  const imageContent = `
  <a class="gallery__link" href="${img.original}">
    <img
      class="gallery__image"
      src="${img.preview}"
      data-source="${img.original}"
      alt="${img.description}"
    />
  </a>
`;
  galleryElement.insertAdjacentHTML('afterbegin', imageContent);
  galleryArray.push(galleryElement);
});

gallery.append(...galleryArray);

const galleryItem = document.querySelectorAll('.gallery__item');

// galleryItem.forEach(el => {
//   el.addEventListener('click', event => {
//     event.preventDefault();
//     const instance = basicLightbox
//       .create(
//         `
//     <img src="${event.target.dataset.source}" />`,
//         {
//           onShow: instance => {
//             const handler = ev => {
//               if (ev.key === 'Escape') {
//                 instance.close();
//                 document.removeEventListener('keydown', handler);
//               }
//             };
//             document.addEventListener('keydown', handler);
//           },
//         }
//       )
//       .show();
//   });
// });

gallery.addEventListener('click', e => {
  e.preventDefault();
  // console.log(e.target.dataset.source);
  if (!e.target.dataset.source) {
    return;
  }
  // console.log('git');
  const instance = basicLightbox
    .create(
      `
      <img src="${e.target.dataset.source}" />`,
      {
        onShow: instance => {
          const handler = ev => {
            if (ev.key === 'Escape') {
              instance.close();
              document.removeEventListener('keydown', handler);
            }
          };
          document.addEventListener('keydown', handler);
        },
      }
    )
    .show();
});
