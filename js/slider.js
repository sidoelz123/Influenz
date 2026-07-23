(function ($) {
  "use strict";
  function initSlider() {
    var $section = $(".what-we-do-section");
    if (!$section.length) return;
    var $slides = $section.find(".what-slide");
    var $dots = $section.find(".slider-dot");
    var $prevBtn = $section.find(".slider-btn-prev");
    var $nextBtn = $section.find(".slider-btn-next");

    if (!$slides.length) return;
    var currentIndex = 0;
    var isAnimating = false;

    function goToSlide(index, direction) {
      if (isAnimating || index === currentIndex) return;
      isAnimating = true;

      var $current = $slides.eq(currentIndex);
      var $next = $slides.eq(index);

      if (!direction) {
        direction = index > currentIndex ? 1 : -1;
        if (index === 0 && currentIndex === $slides.length - 1) direction = 1;
        if (index === $slides.length - 1 && currentIndex === 0) direction = -1;
      }

      var enterX = direction === 1 ? "100%" : "-100%";
      var exitX = direction === 1 ? "-100%" : "100%";

      $next.addClass("no-transition").css({
        transform: "translateX(" + enterX + ")",
        opacity: 1,
      });

      $next[0].offsetHeight;
      $next.removeClass("no-transition");

      $current.css({ zIndex: 1 });
      $next.css({ zIndex: 2 });

      $current.css({
        transform: "translateX(" + exitX + ")",
        opacity: 0,
      });

      $next.css({
        transform: "translateX(0)",
        opacity: 1,
      });

      $dots.removeClass("is-active").eq(index).addClass("is-active");

      setTimeout(function () {
        $current.removeClass("is-active").css({ transform: "", opacity: "", zIndex: "" });
        $next.addClass("is-active").css({ transform: "", opacity: "", zIndex: "" });
        currentIndex = index;
        isAnimating = false;
      }, 400);
    }

    $prevBtn.on("click", function () {
      var prev = currentIndex - 1;
      if (prev < 0) prev = $slides.length - 1;
      goToSlide(prev, -1);
    });

    $nextBtn.on("click", function () {
      var next = currentIndex + 1;
      if (next >= $slides.length) next = 0;
      goToSlide(next, 1);
    });

    $dots.on("click", function () {
      var index = parseInt($(this).data("slide"), 10);
      if (!isNaN(index) && index >= 0 && index < $slides.length) {
        goToSlide(index);
      }
    });
  }

  $(document).ready(initSlider);
})(jQuery);
