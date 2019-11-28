const sendFormPopup = () => {
  const errorMessage = 'Что то пошло не так',
        loadMessage = 'Loading...',
        successmessage = 'Спасибо! Ваша заявка отправлена!';

  const form = document.getElementById('form3');

  const statusMessage = document.createElement('div');
  class Validator {
    constructor({selector, pattern = {}, method}) {
      this.form = document.querySelector(selector);
      this.pattern = pattern;
      this.method = method;
      this.elementsForm = [...this.form.elements].filter(item => {
        return item.tagName.toLowerCase() !== 'button' && item.type !== 'button';
      });
      this.error = new Set();
    }
  
    init() {
      this.applyStyle();
      this.setPattern();
      this.elementsForm.forEach(elem => elem.addEventListener('change', this.checkIt.bind(this)));
      this.form.addEventListener('submit', (event) => {
        event.preventDefault();
    statusMessage.style.color = '#ffffff';
    form.appendChild(statusMessage);

    const request = new XMLHttpRequest();
    request.addEventListener('readystatechange', () => {
      statusMessage.textContent = loadMessage;
      event.preventDefault();
        
      if (request.readyState !== 4) {
        return;
      }
      if (request.status === 200) {
        this.elementsForm.forEach(elem => this.checkIt({target: elem}));
        if (this.error.size) {
          event.preventDefault();
          statusMessage.textContent = 'Заполните поля правильно!';
          return;
        }
        statusMessage.textContent = successmessage;
        form.reset();
      } else {
        this.elementsForm.forEach(elem => this.checkIt({target: elem}));
        if (this.error.size) {
          event.preventDefault();
          statusMessage.textContent = 'Заполните поля правильно!';
          return;
        }
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
    }
    isValid(elem) {
      const validatorMethod = {
        notEmpty(elem){
          if(elem.value.trim() === '') {
            return false;
          }
          return true;
        },
        pattern(elem, pattern) {
          return pattern.test(elem.value);
        }
      };
      if (this.method) {
        const method = this.method[elem.id];
  
        if(method) {
          return method.every(item => validatorMethod[item[0]](elem, this.pattern[item[1]]));
        }
      } else {
        console.warn('Передать id полей ввода и методы проверки этих полей');
      }
      
      return true;
    }
  
    checkIt(event){
  
  
      const target = event.target;  
  
      if (this.isValid(target)) {
        this.showSuccess(target);
        this.error.delete(target);
      } else {
        this.showError(target);
        this.error.add(target);
      }
    }
    
    showError(elem) {
      elem.classList.remove('success');
      elem.classList.add('error');
      if (elem.nextElementSibling && elem.nextElementSibling.classList.contains('validator-error')) {
        return;
      }
      const errorDiv = document.createElement('div');
      errorDiv.textContent = 'Заполните поле правильно!';
      errorDiv.classList.add('validator-error');
      elem.insertAdjacentElement('afterend', errorDiv);
    }
  
    showSuccess(elem){
      elem.classList.remove('error');
      elem.classList.add('success');
      if (elem.nextElementSibling && elem.nextElementSibling.classList.contains('validator-error')) {
        elem.nextElementSibling.remove();
      }
    }
    applyStyle() {
      const style = document.createElement('style');
      style.textContent = `
        input.success {
          border: 2px solid green
        }
        input.error {
          border: 2px solid red
        }
        .validator-error {
          font-size: 12px;
          color: red;
        }
      `;
      document.head.appendChild(style);
    }
    setPattern() {
      if (!this.pattern.phone) {
        this.pattern.phone = /^\+?[78]([-()]*\d){10}$/;
      }
      if (!this.pattern.email) {
        this.pattern.email = /^\w+@\w+\.\w{2,}$/;
      }
    }
    
  }
  const valid = new Validator ({
    selector: '#form1',
    pattern: {
      phone: /^\+?[78]([-()]*\d){10}$/,
      email: /^\w+@\w+\.\w{2,}$/
    },
    method: {
      'phone': [
        ['notEmpty'],
        ['pattern', 'phone']
      ],
      'email': [
        ['notEmpty'],
        ['pattern', 'email']
      ]
    }
  });
  valid.init();
  const valid2 = new Validator ({
    selector: '#form2',
    pattern: {
      phone: /^\+?[78]([-()]*\d){10}$/,
      email: /^\w+@\w+\.\w{2,}$/
    },
    method: {
      'phone': [
        ['notEmpty'],
        ['pattern', 'phone']
      ],
      'email': [
        ['notEmpty'],
        ['pattern', 'email']
      ]
    }
  });
  valid2.init();
  const valid3 = new Validator ({
    selector: '#form3',
    pattern: {
      phone: /^\+?[78]([-()]*\d){10}$/,
      email: /^\w+@\w+\.\w{2,}$/
    },
    method: {
      'phone': [
        ['notEmpty'],
        ['pattern', 'phone']
      ],
      'email': [
        ['notEmpty'],
        ['pattern', 'email']
      ]
    }
  });
  valid3.init();
  /* form.addEventListener('submit', (event) => {
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

    
  }); */
};
export default sendFormPopup;
