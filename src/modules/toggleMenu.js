const toggleMenu = () => {
  const menuBtn = document.querySelector('.menu'),
      menu = document.querySelector('menu'),
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
};

export default toggleMenu;
