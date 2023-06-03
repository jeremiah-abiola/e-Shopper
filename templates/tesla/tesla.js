const buut = document.getElementById('button');
const meat = document.getElementById('fish');
const blut = document.querySelector('.menu');
const exit = document.querySelector('.x');
const sec = document.getElementById('sec');
const htmlget = document.documentElement

buut.addEventListener('click', events);
exit.addEventListener('click', close);
htmlget.addEventListener('click', same);

function events(e){
  sec.classList.add('blur_background');
  document.body.classList.add('no_scrolling');
  meat.classList.add('show_menu');
  console.log("show_menu,blur,no_scrolling")
  e.stopPropagation()
}

function close() {
  meat.classList.remove('show_menu');
  sec.classList.remove('blur_background');
  document.body.classList.remove('no_scrolling');
  console.log("remove all events")
}

function same() {
  if (blut.classList.contains('show_menu')) {
    meat.classList.remove('show_menu');
    sec.classList.remove('blur_background');
  }
  console.log("window")
}