let carousel = (function() {
  let current = 0;
  let leftButton = document.getElementsByClassName('left')[0];
  let rightButton = document.getElementsByClassName('right')[0];
  let parentNode = document.getElementsByClassName('container-wrapper')[0];
  let childrenList = document.getElementsByClassName('container-wrapper')[0].childNodes;
  let childrenImg = document.getElementsByTagName('img')[0];
  let imgWidth = +window
    .getComputedStyle(childrenImg, null)
    .getPropertyValue('width')
    .match(/\d*/)[0];
  
  let elementList = [];

  let timer = setInterval(autoPlay, 2000)

  function autoPlay (){
     parentNode.style.transform = `translateX(${calc('left')}px)`;
      
  }
  for (let i = 0; i < childrenList.length; i++) {
    if (childrenList[i].nodeType === 1) {
      elementList.push(childrenList[i]);
    }
  }

  function calc(type) {
    if (current === 0 && type === 'left') {
      current = elementList.length - 1;
      return -current * imgWidth;
    } else if (type === 'left') {
      current = current - 1;
      return -current * imgWidth;
    } else if (type === 'right' && current === elementList.length - 1) {
      current = 0;
      return 0;
    } else if (type == 'right') {
      current = current + 1;
      return -current * imgWidth;
    }
  }
  leftButton.addEventListener('click', () => {
    parentNode.style.transform = `translateX(${calc('left')}px)`;
  });

  rightButton.addEventListener('click', () => {
    parentNode.style.transform = `translateX(${calc('right')}px)`;
  });
})();

export default carousel;
