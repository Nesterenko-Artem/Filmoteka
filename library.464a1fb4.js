!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},o=t.parcelRequired76b;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var o={id:e,exports:{}};return r[e]=o,t.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){n[e]=t},t.parcelRequired76b=o),o.register("kMC0W",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return n.default(e)};var r,n=(r=o("8NIkP"))&&r.__esModule?r:{default:r}})),o.register("8NIkP",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}})),o.register("7AJDX",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}})),o.register("8CtQK",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),o.register("auk6i",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!e)return;if("string"==typeof e)return n.default(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n.default(e,t)};var r,n=(r=o("8NIkP"))&&r.__esModule?r:{default:r}}));var a=o("1cIlU"),l={};Object.defineProperty(l,"__esModule",{value:!0}),l.default=function(e){return i.default(e)||c.default(e)||d.default(e)||u.default()};var i=s(o("kMC0W")),c=s(o("7AJDX")),u=s(o("8CtQK")),d=s(o("auk6i"));function s(e){return e&&e.__esModule?e:{default:e}}var m=o("h0uk9");function p(e){e.title;var t=e.original_title,r=e.release_date,n=e.id,o=e.poster_path,a=e.genre_ids,l=(0,m.getGenres)(a,!0),i=new Date(r).getFullYear(),c=o?'<div class="gallery-item__image-wrap">\n              <picture>\n                <source srcset="https://www.themoviedb.org/t/p/w780'.concat(o," 1x, https://www.themoviedb.org/t/p/w780").concat(o,' 2x" media="(min-width: 768px)" type="image/jpeg">\n                <source srcset="https://www.themoviedb.org/t/p/w300').concat(o," 1x, https://www.themoviedb.org/t/p/w780").concat(o,' 2x" media="(min-width: 320px)" type="image/jpeg">                           \n                <img class="gallery-item__image" src="https://www.themoviedb.org/t/p/w300').concat(o,'" loading="lazy" alt="').concat(t,'" data-id="').concat(n,'"/>/>\n              </picture>\n            </div>'):'<div class="gallery-item__placeholder" data-id="'.concat(n,'">\n                <svg class="gallery-item__placeholder-image" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">\n                    <title>image</title>\n                    <g id="icomoon-ignore">\n                    </g>\n                    <path d="M479.942 64c0.020 0.017 0.041 0.038 0.058 0.058v383.885c-0.017 0.020-0.038 0.041-0.058 0.058h-447.885c-0.020-0.017-0.041-0.038-0.057-0.058v-383.886c0.017-0.020 0.038-0.041 0.057-0.057h447.885zM480 32h-448c-17.6 0-32 14.4-32 32v384c0 17.6 14.4 32 32 32h448c17.6 0 32-14.4 32-32v-384c0-17.6-14.4-32-32-32v0z"></path>\n                    <path d="M416 144c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48z"></path>\n                    <path d="M448 416h-384v-64l112-192 128 160h32l112-96z"></path>\n                </svg>     \n           </div>'),u=(0,m.createElementFromHTML)("\n        <li class='gallery-item js-item'>\n            ".concat(c,'\n            <p class="gallery-item__title">').concat("".concat(t.toUpperCase()),'</p>\n            <p class="gallery-item__info">').concat("".concat(l," | ").concat(i),"</p>\n        </li>\n      "));return u.dataset.movie=JSON.stringify(e),u}var f=o("iU1Pc"),v=o("kLRHh"),y=o("ZflLs"),g=(f=o("iU1Pc"),v=o("kLRHh"),y=o("ZflLs"),{watchedBtn:document.querySelector(".js-watched-list"),queueBtn:document.querySelector(".js-queue-list"),gallery:document.querySelector(".gallery")}),h=null,w=null,S=null,q=null;function L(){var t;q+=1;var r=w.filter((function(e,t){return t>=20*q-20&&t<=20*q-1})).map(p);(0,y.default)(),(t=g.gallery).append.apply(t,e(l)(r)),q>=S&&(0,v.removeLoadMoreBtn)(L)}g.queueBtn.addEventListener("click",(function(t){var r;(g.watchedBtn.classList.remove("active"),g.queueBtn.classList.add("active"),g.gallery.innerHTML="",w=JSON.parse(localStorage.getItem("queue-movies"))||[],S=w.length/20,q=1,0===w.length&&f.Notify.info("There are no movies in your queue yet"),h=w.map(p),(0,v.removeLoadMoreBtn)(T),S>1)&&((0,v.addLoadMoreBtn)(),document.querySelector(".load-more-button").addEventListener("click",L),h=w.filter((function(e,t){return t<20})).map(p));(r=g.gallery).append.apply(r,e(l)(h))}));var b={watchedBtn:document.querySelector(".js-watched-list"),queueBtn:document.querySelector(".js-queue-list"),gallery:document.querySelector(".gallery")},_=null,M=null,k=null,x=null,O=function(t){var r;(b.queueBtn.classList.remove("active"),b.watchedBtn.classList.add("active"),b.gallery.innerHTML="",M=JSON.parse(localStorage.getItem("watched-movies"))||[],k=M.length/20,x=1,0===M.length&&f.Notify.info("There are no movies in your watched yet"),_=M.map(p),(0,v.removeLoadMoreBtn)(L),k>1)&&((0,v.addLoadMoreBtn)(),document.querySelector(".load-more-button").addEventListener("click",T),_=M.filter((function(e,t){return t<20})).map(p));(r=b.gallery).append.apply(r,e(l)(_))};function T(){var t;x+=1;var r=M.filter((function(e,t){return t>=20*x-20&&t<=20*x-1})).map(p);(0,y.default)(),(t=b.gallery).append.apply(t,e(l)(r)),x>=k&&(0,v.removeLoadMoreBtn)(T)}b.watchedBtn.addEventListener("click",O);var J,E=o("dyT35"),F=(m=o("h0uk9"),{gallery:document.querySelector(".gallery"),template:document.querySelector("template")});F.gallery.addEventListener("click",(function(e){var t=e.target.closest(".js-item");if(!t)return;J=JSON.parse(t.dataset.movie);var r=E.create(F.template,{onShow:function(){document.body.style.overflow="hidden",I.lock()},onClose:function(){document.body.style.overflow="visible",I.unlock()}});(function(e,t){if(e.querySelector(".movie-title").innerHTML=t.title,e.querySelector(".about-text").innerHTML=t.overview,e.querySelector(".vote").innerHTML=t.vote_average.toFixed(1),e.querySelector(".votes").innerHTML=t.vote_count,e.querySelector(".popularity").innerHTML=t.popularity.toFixed(1),e.querySelector(".original-title").innerHTML=t.title,e.querySelector(".movie-genres").innerHTML=(0,m.getGenres)(t.genre_ids),e.querySelector(".btn.watched").innerHTML="remove from watched",t.poster_path){e.querySelector(".modalfoto-img").src="https://www.themoviedb.org/t/p/w780".concat(t.poster_path)}else{e.querySelector(".modalfoto-img").style.display="none",e.querySelector(".gallery-item__placeholder").style.display="flex"}})(r.element(),J),r.show(),window.addEventListener("keydown",(function e(t){"Escape"===t.code&&(r.close(),window.removeEventListener("keydown",e))}));var n=document.querySelector(".modalfilm-button-close");n.addEventListener("click",(function e(){r.close(),n.removeEventListener("click",e)}))}));var N="watched-movies";document.addEventListener("click",(function(e){if("btn watched"===e.target.className){if("remove from watched"===e.target.innerHTML)return t=JSON.parse(localStorage.getItem(N)),localStorage.setItem(N,JSON.stringify(t.filter((function(e){return e.id!==J.id})))),void(document.querySelector(".btn.watched").innerHTML="add to watched");document.querySelector(".btn.watched").innerHTML="remove from watched",watchedFilms=localStorage.getItem(N),parsedWatchedFilms=JSON.parse(watchedFilms),parsedWatchedFilms?(parsedWatchedFilms.find((function(e){return e.id===J.id})),parsedWatchedFilms.push(J),dataJson=JSON.stringify(parsedWatchedFilms),localStorage.setItem(N,dataJson)):(parsedWatchedFilms=[J],dataJson=JSON.stringify(parsedWatchedFilms),localStorage.setItem(N,dataJson))}var t}));var H="queue-movies";document.addEventListener("click",(function(e){if("btn queue"===e.target.className){if("remove from queue"===e.target.innerHTML)return t=JSON.parse(localStorage.getItem(H)),localStorage.setItem(H,JSON.stringify(t.filter((function(e){return e.id!==J.id})))),void(document.querySelector(".btn.queue").innerHTML="add to queue");document.querySelector(".btn.queue").innerHTML="remove from queue",queueFilms=localStorage.getItem(H),parsedQueueFilms=JSON.parse(queueFilms),parsedQueueFilms?(parsedQueueFilms.find((function(e){return e.id===J.id})),parsedQueueFilms.push(J),dataJson=JSON.stringify(parsedQueueFilms),localStorage.setItem(H,dataJson)):(parsedQueueFilms=[J],dataJson=JSON.stringify(parsedQueueFilms),localStorage.setItem(H,dataJson))}var t})),o("57udl");E=o("dyT35");document.querySelector(".footer-students").addEventListener("click",(function(e){e.preventDefault();var t=document.querySelector("template[data-students]");console.log(t);var r=E.create(t,{onShow:function(){document.body.style.overflow="hidden",I.lock()},onClose:function(){document.body.style.overflow="visible",I.unlock()}});r.show(),window.addEventListener("keydown",(function e(t){"Escape"===t.code&&(r.close(),window.removeEventListener("keydown",e))}));var n=document.querySelector(".button-close");n.addEventListener("click",(function e(){r.close(),n.removeEventListener("click",e)}))}));y=o("ZflLs");var I=new(e(a))(document.scrollingElement,{damping:.8});O(),(0,y.default)()}();
//# sourceMappingURL=library.464a1fb4.js.map
