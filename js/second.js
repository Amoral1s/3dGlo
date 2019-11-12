document.addEventListener('DOMContentLoaded', function () { 

  'use strict';

    let greet = document.querySelector('.text'),
        dateGreet = new Date();

    let newYear = new Date('1 jan 2020'),
        date = new Date(),
        timeRemain = (newYear - date) / 1000,
        days = (Math.floor(timeRemain / 60 / 60 / 24)),
        newYearText = document.querySelector('#new'),
        textToday = document.querySelector('#day');

        newYearText.textContent = days;

    if (dateGreet.getHours() >=5 && dateGreet.getHours() < 12) {greet.textContent = 'Доброе утро!';}
    else if (dateGreet.getHours() >= 12 && dateGreet.getHours() < 18) {greet.textContent = 'Добрый день!';}
    else if (dateGreet.getHours() >= 18 && dateGreet.getHours() < 24) {greet.textContent = "Добрый вечер!";} 
    else if (dateGreet.getHours() >=0 && dateGreet.getHours() <5) {greet.textContent = "Доброй ночи!";}

  
    function getWeekDay(date) {
      let days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    
      return days[date.getDay()];
    }
    
    textToday.textContent = getWeekDay(date); 
  
    setInterval (function () {
        let tim = new Date(),
            time = document.getElementById('time');
        time.textContent = 'Текущее время: ' + [tim.getHours(), tim.getMinutes(), tim.getSeconds()].join (':');
        if (tim.getHours() < 10) {
          time.textContent = 'Текущее время: ' + ['0' + tim.getHours(), tim.getMinutes(), tim.getSeconds()].join (':');
        }
        else if  (tim.getMinutes() < 10) {
          time.textContent = 'Текущее время: ' + [tim.getHours(), '0' + tim.getMinutes(), tim.getSeconds()].join (':');
        }
        else if (tim.getSeconds() < 10) {
          time.textContent = 'Текущее время: ' + [tim.getHours(), tim.getMinutes(), '0' + tim.getSeconds()].join (':');
        }
    }, 1000);

    
        
    
        
      
      


/*   */

});