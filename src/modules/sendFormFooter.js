const sendFormFooter = () => {
  const errorMessage = 'Что то пошло не так',
        loadMessage = 'Loading...',
        successmessage = 'Спасибо! Ваша заявка отправлена!';

  const form = document.getElementById('form2');

  const statusMessage = document.createElement('div');
  
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    form.appendChild(statusMessage);

    const request = new XMLHttpRequest();
    request.addEventListener('readystatechange', () => {
      statusMessage.textContent = loadMessage;

      if (request.readyState !== 4) {
        return;
      }
      if (request.status === 200) {
        statusMessage.textContent = successmessage;
        form.reset();

      } else {
        statusMessage.textContent = errorMessage;
      }
    });
    request.open('POST', './server.php');
    request.setRequestHeader('Content-Type', 'application/json');

    const formData = new FormData(form);

    let body = {};

    formData.forEach((val, key) => {
      body[key] = val;
    });
    request.send(JSON.stringify(body));

    
  });
};
export default sendFormFooter;
