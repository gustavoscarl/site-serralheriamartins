// Slick.js config

$(document).ready(function(){
  $('.autoplay').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    centerMode: true,
    variableWidth: true,
    respondTo: 'slider',
    centerMode: true,
    arrows: true,
    dots: true,
    prevArrow: '<button type="button" class="slick-prev">⇽</button>',
    nextArrow: '<button type="button" class="slick-next">⇾</button>',
  });
});

// Burger Menu

const buttonBurger = document.querySelector('#burger');
      menu = document.querySelector('nav');

buttonBurger.addEventListener('click', () => {
  menu.classList.toggle('active')
})

// Scroll Link Interno

const linksInternos = document.querySelectorAll('a[href^="#"]');

function scrollToSection(event) {
  event.preventDefault();
  const href = event.currentTarget.getAttribute('href')
  const section = document.querySelector(href)
  const topo = section.offsetTop

  window.scrollTo({
    top: topo,
    behavior: 'smooth',
  });
}

linksInternos.forEach((link) => {
  link.addEventListener('click', scrollToSection)
});