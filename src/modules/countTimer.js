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

export default countTimer;