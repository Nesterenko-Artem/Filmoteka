import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import { getGenres } from './helpers';
import { scroll } from '../index';

document.querySelector('.gallery').addEventListener('click', onModalClick);

export let data;

function onModalClick(e) {
  e.preventDefault();

  const item = e.target.closest('.gallery-item');
  if (!item) return;

  data = JSON.parse(item.dataset.movie);

  const template = document.querySelector('template[data-movie]');
  const lightbox = basicLightbox.create(template, {
    onShow: () => {
      document.body.style.overflow = 'hidden';
      scroll.lock();
    },
    onClose: () => {
      document.body.style.overflow = 'visible';
      scroll.unlock();
    },
  });
  fillMovieDetails(lightbox.element(), JSON.parse(item.dataset.movie));
  lightbox.show();

  window.addEventListener('keydown', closeModalByEsc);
  function closeModalByEsc(e) {
    if (e.code === 'Escape') {
      lightbox.close();
      window.removeEventListener('keydown', closeModalByEsc);
    }
  }

  const btnClose = document.querySelector('.modalfilm-button-close');
  btnClose.addEventListener('click', closeModal);
  function closeModal() {
    lightbox.close();
    btnClose.removeEventListener('click', closeModal);
  }
}

function fillMovieDetails(template, movie) {
  template.querySelector('.movie-title').innerHTML = movie.title;
  template.querySelector('.about-text').innerHTML = movie.overview;
  template.querySelector('.vote').innerHTML = movie.vote_average.toFixed(1);
  template.querySelector('.votes').innerHTML = movie.vote_count;
  template.querySelector('.popularity').innerHTML = movie.popularity.toFixed(1);
  template.querySelector('.original-title').innerHTML = movie.title;
  template.querySelector('.movie-genres').innerHTML = getGenres(
    movie.genre_ids
  );

  if (movie.poster_path) {
    const modal = template.querySelector('.modalfoto-img');
    modal.src = `https://www.themoviedb.org/t/p/w780${movie.poster_path}`;
  } else {
    const modal = template.querySelector('.modalfoto-img');
    modal.style.display = 'none';

    const placeholder = template.querySelector('.gallery-item__placeholder');
    placeholder.style.display = 'flex';
  }

  const watchedFilms = localStorage.getItem('watched-movies');
  const parsedWatchedFilms = JSON.parse(watchedFilms);

  if (parsedWatchedFilms) {
    const hasWatched = parsedWatchedFilms.find(
      parsedWatchedFilm => parsedWatchedFilm.id === data.id
    );
    if (hasWatched) {
      template.querySelector('.btn.watched').innerHTML = 'remove from watched';
    }
  }

  const queueFilms = localStorage.getItem('queue-movies');
  const parsedQueueFilms = JSON.parse(queueFilms);

  if (parsedQueueFilms) {
    const hasQueued = parsedQueueFilms.find(
      parsedQueueFilm => parsedQueueFilm.id === data.id
    );
    if (hasQueued) {
      template.querySelector('.btn.queue').innerHTML = 'remove from queue';
    }
  }
}
