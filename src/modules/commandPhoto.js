const commandPhoto = () => {
  const comandImg = document.querySelectorAll('.command__photo');

  
    comandImg.forEach((elem) => {
      elem.addEventListener('mouseover', () => {
      let target = event.target;
      target.src = target.dataset.img;
    });
      elem.addEventListener('mouseout', () => {
      let target = event.target;
      target.src = target.dataset.img.replace(/a\./,'\.');
    });
  });
};

export default commandPhoto;
