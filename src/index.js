'use strict';

import "@babel/polyfill";
import 'nodelist-foreach-polyfill';
import 'formdata-polyfill';
import 'es6-promise';
import 'fetch-polyfill';
import elementClosest from 'element-closest';
elementClosest(window);

import countTimer from './modules/countTimer';
import toggleMenu from './modules/toggleMenu';
import togglePopup from './modules/togglePopup';
import commandPhoto from './modules/commandPhoto';
import tabs from './modules/tabs';
import slider from './modules/slider';
import calcValid from './modules/validCalc';
import calc from './modules/calc';
import sendForm from './modules/sendForm';

//timer
countTimer();
//menu
toggleMenu();
//popup
togglePopup();
//табы
tabs();
//slider
slider();
//comand
commandPhoto();
//calc valid
calcValid();
// калькулятор
calc(100);
//отправка формы
sendForm();