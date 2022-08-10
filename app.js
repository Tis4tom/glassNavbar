const hamburger = document.getElementById('hamburger');
const menuList = document.querySelector('.menu-list');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('green-bg');
  menuList.classList.toggle('display-none');  
});