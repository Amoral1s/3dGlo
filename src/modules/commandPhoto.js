const commandPhoto = () => {
  const comandImg = document.querySelectorAll('.command__photo');

  
    comandImg.forEach((elem) => {
      elem.addEventListener('mouseover', () => {
      let target = event.target;
      target.src = target.dataset.img;
    });
  });
};

export default commandPhoto;
