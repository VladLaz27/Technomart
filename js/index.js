    var slides = new Swiper(".swiper-container", {
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });



    (function($) {
$(function() {

  $('ul.tabs__caption').each(function() {
    $(this).find('li').each(function(i) {
      $(this).click(function(){
        $(this).addClass('active').siblings().removeClass('active')
          .closest('div.tabs').find('div.tabs__content').removeClass('active').eq(i).addClass('active');
      });
    });
  });

})
})(jQuery)