// document.querySelector('.header-moon').onClick = function() {
//   document.querySelector('body').classList.toggle('is-black')
// }
// document.querySelector('.header-mob-menu').onClick = function() {
//   document.querySelector('header-menu').classList.toggle('active')
// }
document.querySelector('.header-mob-menu').onclick = function() {
  document.querySelector('header-mob').classList.toggle('is-active');
  }

document.querySelector('.header-moon').onclick = function myFunction() {
document.querySelector('body').classList.toggle("dark-mode");
}

