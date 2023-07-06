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

