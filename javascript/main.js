// function, toggle menu from right side to 100% width
document.getElementById('toggleMenu');

let rightSideMenu = document.querySelector('.rightSideContent');

document.querySelector('.toggleButton').addEventListener('click', () => { rightSideMenu.classList.toggle("showMenu")});