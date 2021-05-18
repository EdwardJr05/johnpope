var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 4000); // Change image every 2 seconds
}

$(function () {
  // script for full screen navbar
  if ($(window).width() > 749) {
    $(".navbar").find(".wrapperLink").show();
    $(".navbar")
      .find(".dropidown-button")
      .mouseenter(function () {
        if ($(".wrapperDropidown").hasClass("opened")) {
          $(this).find(".dropidown-menu").css("display", "block");
          $(this)
            .siblings(".dropidown-button")
            .find(".dropidown-menu")
            .css("display", "none");
        } else {
          $(".wrapperDropidown").addClass("opened");
          $(this).find(".dropidown-menu").slideDown("ease-out");
        }
      });

    $(".navbar")
      .find(".dropidown-button")
      .hover(function () {
        $(this).find(".navbar__item").toggleClass("borderBottom");
      });

    $(".wrapperDropidown").mouseleave(function () {
      $(".dropidown-menu").stop(true, false).slideUp("ease-out");
      $(".wrapperDropidown").removeClass("opened");
    });
  }

  // script for small screen navbar
  if ($(window).width() < 750) {
    $(".navbar").find(".wrapperLink").hide();
    $(".navbar")
      .find(".wrapperBurger")
      .click(function () {
        $(this).next(".wrapperLink").slideToggle("ease-out");
        $(this).toggleClass("animCross");
      });
  }
});
