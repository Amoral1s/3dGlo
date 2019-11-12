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
        toggleMenu = () =>  menu.classList.toggle('active-menu');

  menu.addEventListener('click', (event) => {
    let target = event.target;
    menuItems.forEach((elem) => elem.addEventListener('click', toggleMenu));

    if(target.classList.contains('close-btn')) {
      toggleMenu();
    }
  });

  menuBtn.addEventListener('click', toggleMenu);
 
  const togglePopup = () => {
    const callPopup = document.querySelectorAll('.popup-btn'),
          popup = document.querySelector('.popup');

    callPopup.forEach((elem) => {
      elem.addEventListener('click', () => {
        popup.style.display = 'block';
      });
    });

    popup.addEventListener('click', (event) => {
      let target = event.target;

      if(target.classList.contains('popup-close')) {
        popup.style.display = 'none';
      } else {
        target = target.closest('.popup-content');

        if(!target) {
          popup.style.display = 'none';
        }
      }
    });
        
  };
  togglePopup();

  //табы

  const tabs = () => {
    const tabHeader = document.querySelector('.service-header'),
          tab = tabHeader.querySelectorAll('.service-header-tab'),
          tabContent = document.querySelectorAll('.service-tab');

    const toggleContent = (index) => {
      for (let i = 0; i < tabContent.length; i++) {
        if (index === i) {
          tab[i].classList.add('active');
          tabContent[i].classList.remove('d-none');
        } else {
          tab[i].classList.remove('active');
          tabContent[i].classList.add('d-none');
        }
      }
    };
    tabHeader.addEventListener('click', (event) => {
      let target = event.target;
          target = target.closest('.service-header-tab');
  
      if (target.classList.contains('service-header-tab')) {
        tab.forEach((item, i) => {
            if (item === target) {
              toggleContent(i);
            }
        });
      }
    });
  };

  tabs();
  

});