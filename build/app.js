"use strict";function e(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var t,r=function(t,r){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,r){if(!t)return;if("string"==typeof t)return e(t,r);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return e(t,r)}(t))||r&&t&&"number"==typeof t.length){n&&(t=n);var o=0,c=function(){};return{s:c,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(e){throw e},f:c}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,u=!0,l=!1;return{s:function(){n=n.call(t)},n:function(){var e=n.next();return u=e.done,e},e:function(e){l=!0,a=e},f:function(){try{u||null==n.return||n.return()}finally{if(l)throw a}}}}(document.querySelectorAll('a[href^="#"]'));try{var n=function(){var e=t.value;e.addEventListener("click",(function(t){t.preventDefault();var r=e.getAttribute("href");document.querySelector(r).scrollIntoView({behavior:"smooth",block:"start"})}))};for(r.s();!(t=r.n()).done;)n()}catch(e){r.e(e)}finally{r.f()}function o(e){return/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(e)}window.screen.width<=992?document.querySelector(".header__search-btn").addEventListener("click",(function(){document.querySelector(".header__search-input").style.display="block",document.querySelector(".header__search-btn").style.display="none",document.querySelector(".header__search-btn-close").style.display="block",document.querySelector(".header__search-btn-close").addEventListener("click",(function(){document.querySelector(".header__search-btn-close").style.display="none",document.querySelector(".header__search-input").style.display="none",document.querySelector(".header__search-btn").style.display="block"}))})):(document.querySelector(".header__search-btn").addEventListener("click",(function(){"block"===window.getComputedStyle(document.querySelector(".header__search-input"),null).display||""!==document.querySelector(".header__search-input").value?(document.querySelector(".header__search-input").style.display="none",document.querySelector(".header__search-input").value=""):document.querySelector(".header__search-input").style.display="block"})),document.querySelector(".header__search-input").addEventListener("blur",(function(){document.querySelector(".header__search-input").style.display="none"}))),document.querySelector(".header__mobile-menu-btn").addEventListener("click",(function(){document.querySelector(".mobile-menu").classList.add("is-active"),document.querySelector(".search-btn-close").classList.add("is-active")})),document.querySelector(".search-btn-close").addEventListener("click",(function(){document.querySelector(".mobile-menu").classList.remove("is-active"),document.querySelector(".search-btn-close").classList.remove("is-active")})),document.getElementById("email").noValidate=!0,document.querySelector(".about-us__btn").addEventListener("click",(function(e){e.preventDefault(),o(document.querySelector(".about-us__email-input").value)?document.querySelector(".about-us__email-input").value="":(document.querySelector(".about-us__error-message").style.opacity="1",document.querySelector(".about-us__email-input").classList.add("about-us__email-error"))})),document.querySelector(".about-us__email-input").addEventListener("input",(function(){document.querySelector(".about-us__error-message").style.opacity="0",document.querySelector(".about-us__email-input").classList.remove("about-us__email-error")})),document.getElementById("contacts__form").noValidate=!0,document.querySelector(".contacts__btn").addEventListener("click",(function(e){e.preventDefault();var t,r={name:!1,email:!1};t=document.querySelector(".contacts__name").value,/^[A-Za-zА-Яа-яЁё\-]+$/.test(t)?r.name=!0:(document.querySelector(".error-message-first").style.opacity="1",document.querySelector(".contacts__name").classList.add("contacts__email-error")),document.querySelector(".contacts__name").addEventListener("input",(function(){document.querySelector(".error-message-first").style.opacity="0",document.querySelector(".contacts__name").classList.remove("contacts__email-error")})),o(document.querySelector(".contacts__email").value)?r.email=!0:(document.querySelector(".error-message-second").style.opacity="1",document.querySelector(".contacts__email").classList.add("contacts__email-error")),document.querySelector(".contacts__email").addEventListener("input",(function(){document.querySelector(".error-message-second").style.opacity="0",document.querySelector(".contacts__email").classList.remove("contacts__email-error")})),r.name&&r.email&&(document.querySelector(".contacts__name").value="",document.querySelector(".contacts__email").value="")})),ymaps.ready((function(){var e=new ymaps.Map("map",{center:[55.76455189529742,37.611012057561865],zoom:13,controls:[]}),t=(new ymaps.GeoObject({geometry:{type:"Point",coordinates:[55.770648672299394,37.63650377203941]}}),new ymaps.Placemark([55.774731393295156,37.64617617300325],{},{iconLayout:"default#image",iconImageHref:"./build/image/map-icon.svg",iconImageSize:[12,12],iconImageOffeset:[-1,-1]}));e.geoObjects.add(t)})),document.querySelector(".contacts__btn-close").addEventListener("click",(function(){document.querySelector(".contacts__address-info").style.display="none",document.querySelector(".contacts__btn-open").style.display="block"})),document.querySelector(".contacts__btn-open").addEventListener("click",(function(){document.querySelector(".contacts__address-info").style.display="block",document.querySelector(".contacts__btn-open").style.display="none"}));