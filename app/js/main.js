$(function () {

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
  ratedFill:"#ffcc00",
  readOnly: true,
  spacing: "5px",
 });


  var mixer = mixitup('.products__items');
  var mixer = mixitup('.design__items');
});