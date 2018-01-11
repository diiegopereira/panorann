
(function($) {
  "use strict";

//==== On Document Ready ========
$(document).ready(function(){
  $('.bg-slideshow').cycle({
    fx: 'fade', // choose your transition type, ex: fade, scrollUp, shuffle, etc...
    timeout:  8000,
    speed:  1000  
  });
});
})(jQuery);

