// sticky menu

(function () {
  var targetElement = document.querySelector('.top-header'),
      scrollTop,
      targetOffsetTop = targetElement.offsetTop;

  window.addEventListener('scroll', function() {
    scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

    if (scrollTop >= targetOffsetTop) {
      targetElement.classList.add('fixed');
    } else {
      targetElement.classList.remove('fixed');
    }
  }, false);
}());
