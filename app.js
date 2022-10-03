const hamburger = document.getElementById('hamburger');
const menuList = document.querySelector('.menu-list');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('green-bg');
  menuList.classList.toggle('display-none');  
});


const activePage = window.location.pathname;
const menuItems = document.querySelectorAll('.menu-list li a');

for (let menuItem of menuItems) {
  if (menuItem.href.includes(`${activePage}`)) {
    menuItem.classList.add('active');
  }
}

