const photos = [
  { file: 'Casal/Balao.jpg', alt: 'Foto do casal em balão' },
  { file: 'Casal/Bravos.jpg', alt: 'Foto do casal celebrando' },
  { file: 'Casal/Estilosa.jpg', alt: 'Foto do casal elegante' },
  { file: 'Casal/MM1.jpg', alt: 'Foto do casal juntos' },
  { file: 'Casal/MM2.jpg', alt: 'Foto do casal sorrindo' },
  { file: 'Casal/MM3.jpg', alt: 'Foto do casal ao ar livre' },
  { file: 'Casal/MM4.png', alt: 'Foto do casal especial' },
  { file: 'Casal/Sorrso.jpg', alt: 'Foto do casal com sorriso' }
];

const gallery = document.getElementById('gallery');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxClose = document.getElementById('lightboxClose');

function createGallery() {
  photos.forEach((photo) => {
    const card = document.createElement('button');
    card.className = 'photo-card';
    card.type = 'button';
    card.innerHTML = `
      <img src="${photo.file}" alt="${photo.alt}" />
    `;

    card.addEventListener('click', () => {
      openLightbox(photo);
    });

    gallery.appendChild(card);
  });
}

function openLightbox(photo) {
  lightboxImage.src = photo.file;
  lightboxImage.alt = photo.alt;
  lightbox.classList.add('open');
  lightbox.setAttribute('aria-hidden', 'false');
}

function closeLightbox() {
  lightbox.classList.remove('open');
  lightbox.setAttribute('aria-hidden', 'true');
  lightboxImage.src = '';
}

lightboxClose.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', (event) => {
  if (event.target === lightbox) {
    closeLightbox();
  }
});

window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && lightbox.classList.contains('open')) {
    closeLightbox();
  }
});

createGallery();
