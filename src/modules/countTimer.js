const countTimer = (deadline) => { 
  const hoursTimer  = document.querySelector('#timer-hours'),
        minutesTimer = document.querySelector('#timer-minutes'),
        secondsTimer = document.querySelector('#timer-seconds');

  const getTimeRemaining = () => {
    const dateStop = new Date('29 nov 2022').getTime(),
          dateNow = new Date().getTime(),
          timeRemaining = (dateStop - dateNow) / 1000,
          seconds = Math.floor(timeRemaining % 60),
          minutes = Math.floor((timeRemaining / 60) % 60),
          hours = Math.floor(timeRemaining / 60 / 60) % 24;
    return {
      timeRemaining,
      hours,
      minutes,
      seconds
    };
  };

  const addZero = (num) => {
    if (num <= 9) {
      num = '0' + num;
    }
    return (num);
  };
  
  const updateClock = () => {
      const timer = getTimeRemaining();
      hoursTimer.textContent = addZero(timer.hours);
      minutesTimer.textContent = addZero(timer.minutes);
      secondsTimer.textContent = addZero(timer.seconds);

      if (timer.timeRemaining > 0) {
      setTimeout(updateClock, 1000);
      } 
  };

  updateClock();

};
export default countTimer;