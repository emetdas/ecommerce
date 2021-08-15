let nav_icon = document.querySelector('.nav-icon');
let icon_line = document.querySelector('.line');
let nav_item = document.querySelector('.nav_item');
let dropdrown_heandler = document.querySelector('.dropdrown-heandler');
let dropdrown = document.querySelector('.dropdrown');

nav_icon.addEventListener('click', () => {
  icon_line.classList.toggle('active');
  if (icon_line.closest('.active')) {
    nav_item.classList.add('active');
  } else {
    nav_item.classList.remove('active');
  }
});

dropdrown_heandler.addEventListener('mouseover', () => {
  dropdrown.classList.add('active');
});
dropdrown_heandler.addEventListener('mouseleave', () => {
  dropdrown.classList.remove('active');
});
