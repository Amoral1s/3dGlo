document.addEventListener('DOMContentLoaded', function () { 

  'use strict';

  //timer
  
  function countTimer(deadline) { 
    let timeHours = document.querySelector('#timer-hours'),
        timeMinutes = document.querySelector('#timer-minutes'),
        timeSeconds = document.querySelector('#timer-seconds');


        function getTimeRemaining() {
          let dateStop = new Date(deadline).getTime(),
              dateNow = new Date().getTime(),
              timeRemaining = (dateStop - dateNow) / 1000,
              seconds = ('0' +Math.floor(timeRemaining % 60)).slice(-2),
              minutes = ('0' +Math.floor((timeRemaining / 60) % 60)).slice(-2),
              hours = ('0' + Math.floor((timeRemaining / 60 / 60) % 24)).slice(-2);
              return {timeRemaining,hours,minutes,seconds};

        }
        
        function updateClock() {
            let timer = getTimeRemaining();
            timeHours.textContent = timer.hours;
            timeMinutes.textContent = timer.minutes;
            timeSeconds.textContent = timer.seconds;

            if (timer.timeRemaining > 0) {
            setTimeout(updateClock, 1000);
            } else {
              timeHours.textContent = '00';
              timeMinutes.textContent = '00';
              timeSeconds.textContent = '00';
            }
        }
        updateClock();
  }
  countTimer('11 nov 2029');

  //menu

  const menuBtn = document.querySelector('.menu'),
        menu = document.querySelector('menu'),
        close = document.querySelector('.close-btn'),
        menuItems = menu.querySelectorAll('ul>li'),
        callPopup = document.querySelectorAll('.popup-btn'),
        popup = document.querySelector('.popup'),
        popupClose = document.querySelector('.popup-close'),
        toggleMenu = () => menu.classList.toggle('active-menu');

  menuBtn.addEventListener('click', toggleMenu);
  close.addEventListener('click', toggleMenu);
  menuItems.forEach((elem) => elem.addEventListener('click', toggleMenu));
  callPopup.forEach((elem) => elem.addEventListener('click', () => {
    popup.style.display = 'block';
  }));
  popupClose.addEventListener('click', () => popup.style.display = 'none');
      
  

});