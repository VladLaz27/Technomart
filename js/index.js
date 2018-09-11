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



    var link = document.querySelector(".button-write");

    var popup = document.querySelector(".modal-write");
    var close = popup.querySelector(".modal-close");

    link.addEventListener("click", function (evt) {
      popup.classList.add("modal-show");
  });

    close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
  });

    window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup.classList.contains("modal-show")) {
        popup.classList.remove("modal-show");
      }
    }
  });

      var mapLink = document.querySelector(".info-image");

      var mapPopup = document.querySelector(".big-map");
      var mapClose = mapPopup.querySelector(".map-close");


      mapLink.addEventListener("click", function (evt) {
      evt.preventDefault();
      mapPopup.classList.add("modal-show");
  });

      mapClose.addEventListener("click", function (evt) {
      evt.preventDefault();
      mapPopup.classList.remove("modal-show");
  });

