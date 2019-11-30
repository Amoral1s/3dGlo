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
      total = Math.round(price * typeValue * squareValue * countValue * dayValue);
    } 

    totalValue.textContent = total;
  };
  calcBlock.addEventListener('keyup', (event) => {
    const target = event.target;
    const itemCalc = document.querySelectorAll('.calc-item');
    
    if (target.value.match(/[^0-9]|^0{1}/g)) {
      target.value = target.value.replace(/./g, '');
    }
    if(target.matches('select') || target.matches('input')) {
      if (calcType.value >= 1 && calcSquare.value > 0 && calcDay.value > 0 && calcCount.value > 0) {
        countSum();
      }
    }
    
  });
};

export default calc;
