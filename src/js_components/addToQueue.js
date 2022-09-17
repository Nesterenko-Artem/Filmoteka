import Notiflix from 'notiflix';
import { data } from './close-modal';

let queueFilms = [];
let parsedQueueFilms = [];
let dataJson = [];
const LOCALSTORAGE_KEY = 'queue-movies';

function onBtnAddToQueueClick() {
  document.querySelector('.btn.queue').innerHTML = 'remove from queue'

  queueFilms = localStorage.getItem(LOCALSTORAGE_KEY);
  parsedQueueFilms = JSON.parse(queueFilms);

  if (parsedQueueFilms) {
    const hasMovie = parsedQueueFilms.find(
      parsedQueueFilm => parsedQueueFilm.id === data.id
    );
    if (hasMovie) {
      Notiflix.Notify.init({
        fontSize: '16px',
        distance: '20px',
      });

      Notiflix.Notify.info('The movie is already added to your queue');
      return;
    }

    parsedQueueFilms.push(data);
    dataJson = JSON.stringify(parsedQueueFilms);
    localStorage.setItem(LOCALSTORAGE_KEY, dataJson);
  } else {
    parsedQueueFilms = [data];
    dataJson = JSON.stringify(parsedQueueFilms);
    localStorage.setItem(LOCALSTORAGE_KEY, dataJson);
  }
}

function onBtnClick(e) {
  if (e.target.className === 'btn queue') {
    if(e.target.innerHTML === 'remove from queue') {
      removeFromQueue()
      return
    }
    onBtnAddToQueueClick();
  }
}

document.addEventListener('click', onBtnClick);

function removeFromQueue() {
  const queueItem = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY))
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(queueItem.filter(item => item.id !== data.id)))
  document.querySelector('.btn.queue').innerHTML = 'add to queue'
}
