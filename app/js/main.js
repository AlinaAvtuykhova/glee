$(function () {
  $('.menu__btn').on('click', function () {
  $('.menu__list').toggleClass('menu__list--active')  
  });
  $('.footer-top__item-title').on('click', function () {
    $(this).next().slideToggle();
    $(this).toggleClass('footer-top__item-title--active'); 
  });

  $('.product__btn').on('click', function () {
    $('.product__filters').slideToggle();
  })

  
  
  $('.details-tabs__top-item').on('click', function (e) {
    e.preventDefault();
    
    $('.details-tabs__top-item').removeClass('details-tabs__top-item--active');
    $(this).addClass('details-tabs__top-item--active');
    
    $('.details-tabs__content-item').removeClass('details-tabs__content-item--active');
    $($(this).attr('href')).addClass('details-tabs__content-item--active');
    
  });
  
  
  
  $('.related__items').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
    ]
    });

  $('.details-slide__small').slick({
    asNavFor: '.details-slide__big',
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    focusOnSelect: true,
    draggable: false
  });

  $('.details-slide__big').slick({
    asNavfor: '.details-slide__small',
    arrows: false,
    fade: true,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          draggable: true,
        }
      },
    ]
  });

  $('.slider__inner').slick({
    arrows: false,
    dots: true,
    fade: true
  });

  $(".filter-price__input").ionRangeSlider({
    type: "double",
    prefix: "$",
    onStart: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
    onChange: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
  });

  $(".filter-recent__star").rateYo({
    starWidth: "10px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    readOnly: true,
    spacing: "5px",
  });
  $(".star").rateYo({
    starWidth: "18px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    readOnly: true,
    spacing: "12px",
  });

  $('.select-style, .details-content__num').styler();


  var mixer = mixitup('.products__items');
  var mixer = mixitup('.design__items');
});