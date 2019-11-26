const sendForm = () => {
  const errorMessage = 'Что то пошло не так',
      loadMessage = 'Loading...',
      successMessage = 'Спасибо! Ваша заявка отправлена!';

  const form = document.getElementById('form1');
  const statusMessage = document.createElement('div');

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    form.appendChild(statusMessage);
    const formData = new FormData(form);
    let body = {};

    
    statusMessage.textContent = loadMessage;

    postData(body)
    .then((response) => {
      if (response.status !== 200) {
        throw new Error('status not 200');
      }
      statusMessage.textContent = successMessage;
    })
    .catch((error) => {
      statusMessage.textContent = errorMessage;

    });
  });

  const postData = (formData) => {
    return fetch('./server.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });
  };
};

export default sendForm;
