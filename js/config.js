$('.uslug-list').slick({
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear'
});
$('.otziv-slider').slick({
   responsive: [
      {
        breakpoint: 375,
        settings: {
          arrows:false,
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 3000,
          arrows: true,
        }
      },
      {
        breakpoint: 1100,
        settings: {
          arrows:false,
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          // autoplay: true,
          // autoplaySpeed: 3000,
          arrows: true,
        }
      },
      {
        breakpoint: 1400,
        settings: {
          
          infinite: true,
          arrows: true,
          centerMode: true,
          centerPadding: "240px",
        }
      }
    ]
  
});
          
