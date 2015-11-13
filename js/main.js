/*
  *** Sticky menu ***
*/ 
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


 
$(function(window){
  /*
    *** Typing Text Header ***
  */
  $("#typed").typed({
  // strings: ["Typed.js is a <strong>jQuery</strong> plugin.", "It <em>types</em> out sentences.", "And then deletes them.", "Try it out!"],
    stringsElement: $('#typed-strings'),
    typeSpeed: 30,
    backDelay: 500,
    loop: false,
    contentType: 'html', // or text
    // defaults to false for infinite loop
    loopCount: false,
    callback: function(){ foo(); },
    resetCallback: function() { newTyped(); }
  });

  $(".reset").click(function(){
    $("#typed").typed('reset');
  });

   /*
    *** Search Bar ***
  */
  function expand() {
     event.preventDefault();
    $('#searchSubmit').toggleClass('close');
    $('#searchBar').toggleClass('expanded');
  }

  $('#searchSubmit').on('click', expand);

}(window));


    

