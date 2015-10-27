/*
  *** Sticky menu ***
*/ 
(function () {
  var searcher = document.getElementById("searcher");
  var searcherInput = document.getElementById("searcherInput");
  

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


  function searchExtended(){
    searcherInput.style.display = "none";
    searcher.onclick = function(){
      if(searcherInput.style.display == 'none'){
        searcherInput.style.display = 'inline-block';
      }
      else {
        searcherInput.style.display = 'none';
      }
    }  
  }searchExtended();

}());


/*
  *** Typing Text Header ***
*/ 
$(function(){

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

    });

    function newTyped(){ /* A new typed object */ }

    function foo(){ console.log("Callback"); }


