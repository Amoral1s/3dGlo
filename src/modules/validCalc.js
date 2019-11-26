const calcValid = () => {
  const input = document.querySelectorAll('input.calc-item');

input.forEach((elem) => {
  elem.addEventListener('input', () => {
    elem.value = elem.value.replace(/\D/g, '');
  });
});
};
export default calcValid;



  