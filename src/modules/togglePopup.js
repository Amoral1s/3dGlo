const togglePopup = () => {
  const callPopup = document.querySelectorAll('.popup-btn'),
        popup = document.querySelector('.popup');
  

  callPopup.forEach((elem) => {
    popup.style.display = 'block';
    popup.style.transform = 'translateX(-500%)';
    popup.style.transition = '1s';
    elem.addEventListener('click', () => {
      popup.style.transform = 'translateX(0%)';
    });
  });

  popup.addEventListener('click', (event) => {
    let target = event.target;

    if(target.classList.contains('popup-close')) {
      popup.style.transform = 'translateX(-500%)';

    } else {
      target = target.closest('.popup-content');

      if(!target) {
        popup.style.transform = 'translateX(-500%)';

      }
    }
  });
      
};

export default togglePopup;
