$('.BrandSlider').slick({
  dots: false,
  arrows:false,
  autoplay: true,
  autoplaySpeed: 2000,  
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        dots: false,
        arrows:false,        
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
$('.TestimonialSlider').slick({
  dots: false,
  arrows:false,
  autoplay: true,
  autoplaySpeed: 2000,  
  infinite: false,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        dots: false,
        arrows:false,        
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});


$('.PortfolioMob').slick({
  dots: false,
  arrows:false,
  autoplay: true,
  autoplaySpeed: 2000,  
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});


new WOW().init();

// $(window).on('load',function(){
//     $('#exampleModal').modal('show');
// });

  $(window).scroll(function(){
      if ($(this).scrollTop() > 120) {
          $('.header').addClass('fixed');
      } else {
          $('.header').removeClass('fixed');
      }
});



var myModal = new bootstrap.Modal(document.getElementById('exampleModal', ), {})
timeFunction();
function timeFunction() {
            setTimeout(function(){ myModal.show(); }, 15000);
        }
// setInterval(function() {myModal.show();}, 10000);



