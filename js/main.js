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
  
  //slider

  const slider = () => {

    
    const slide = document.querySelectorAll('.portfolio-item');
    
          for (let i = 0; i < slide.length; i++) {
            let addDot = document.createElement("li"),
                portfolioDots = document.querySelector('.portfolio-dots');
            addDot.classList.add('dot');
            portfolioDots.appendChild(addDot);
            if (i === 0) {
              addDot.classList.add('dot');
              addDot.classList.add('dot-active');
              portfolioDots.appendChild(addDot);
            }
          }

    const btn = document.querySelectorAll('.portfolio-btn'),
          dot = document.querySelectorAll('.dot'),
          slider = document.querySelector('.portfolio-content');

    let currentSlide = 0,
        interval;

    

    const prevSlide = (elem, index, strClass) => {
      elem[index].classList.remove(strClass);
    };

    const nextSlide = (elem, index, strClass) => {
      elem[index].classList.add(strClass);
    };

    const autoPlaySlide = () => {
      prevSlide(slide, currentSlide, 'portfolio-item-active');
      prevSlide(dot, currentSlide, 'dot-active');
      currentSlide++;
      if (currentSlide >= slide.length) {
        currentSlide = 0;
      }
      nextSlide(slide, currentSlide, 'portfolio-item-active');
      nextSlide(dot, currentSlide, 'dot-active');
    };

    const startSlide = (time = 3000) => {
      interval = setInterval(autoPlaySlide, time);
    };

    const stopSlide = () => {
      clearInterval(interval);
    };

    slider.addEventListener('click', (event) => {
      event.preventDefault();

      let target = event.target;

      if (!target.matches('.portfolio-btn, .dot')) {
        return;
      }

      prevSlide(slide, currentSlide, 'portfolio-item-active');
      prevSlide(dot, currentSlide, 'dot-active');

      if (target.matches('#arrow-right')) {
        currentSlide++;
      }
      else if (target.matches('#arrow-left')){
        currentSlide--;
      }
      else if (target.matches('.dot')) {
        dot.forEach((elem, index) => {
          if (elem === target) {
            currentSlide = index;
          }
        });
      }

      if (currentSlide >= slide.length) {
        currentSlide = 0;
      }

      if (currentSlide < 0) {
        currentSlide = slide.length - 1;
      }

      nextSlide(slide, currentSlide, 'portfolio-item-active');
      nextSlide(dot, currentSlide, 'dot-active');
    });

    slider.addEventListener('mouseover', (event) => {
      if (event.target.matches('.portfolio-btn') || event.target.matches('.dot')) {
          stopSlide();
      }
    });

    slider.addEventListener('mouseout', (event) => {
      if (event.target.matches('.portfolio-btn') || event.target.matches('.dot')) {
        startSlide();
      }
    });

    
    
    
  };
  slider();
  
  //comand

  const comandImg = document.querySelectorAll('.command__photo');

    
      comandImg.forEach((elem) => {
        elem.addEventListener('mouseover', () => {
        let target = event.target;
        target.src = target.dataset.img;
      });
    });

  //calc

  const input = document.querySelectorAll('input.calc-item');

  input.forEach((elem) => {
    elem.addEventListener('input', () => {
      elem.value = elem.value.replace(/\D/g, '');
    });
  });

  // калькулятор

  const calc = (price = 100) => {
    const calcBlock = document.querySelector('.calc-block'),
          calcType = document.querySelector('.calc-type'),
          calcSquare = document.querySelector('.calc-square'),
          calcDay = document.querySelector('.calc-day'),
          calcCount = document.querySelector('.calc-count'),
          totalValue = document.getElementById('total');
    const countSum = () => {
      let total = 0,
          countValue = 1,
          dayValue = 1;
      const typeValue = calcType.options[calcType.selectedIndex].value,
            squareValue = +calcSquare.value;
      
      if (calcCount.value > 1) {
        countValue += (calcCount.value - 1) / 10;
      }

      if (calcDay.value &&calcDay.value < 5) {
        dayValue *= 2;
      } else if (calcDay.value && calcDay.value < 10) {
        dayValue *= 1.5;
      }

      if (typeValue && squareValue) {
        total = price * typeValue * squareValue * countValue * dayValue;
      } else {
        total = 0;
      }

      totalValue.textContent = total;
    };

    calcBlock.addEventListener('change', (event) => {
      const target = event.target;

      
      if(target.matches('select') || target.matches('input')) {
        countSum();
      }
    });
  };

  calc(100);

  
  

  
});