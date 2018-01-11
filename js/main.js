
(function($) {
  "use strict";

//======= Run on Window Load ============
$(window).load(function(){ 

  //loader and Intro Animations
  $('.animated').css({'opacity': 0});
	$('#page-loader').fadeOut(400, function(){
		  $('#header-left').css({'opacity': 1}).addClass('fadeInLeft');
      $('#header-right').css({'opacity': 1}).addClass('fadeInRight');
      $('#header-center').css({'opacity': 1}).addClass('fadeInDown');
      $('#main-container').css({'opacity': 1}).addClass('fadeInUp');     
	}); 	

  //Viewport
  var windowHeight = $(window).height();

  function adjustViewport() {
    $('.viewport').css('min-height', windowHeight);
    $('.viewport2').css('min-height', windowHeight+150);
  }
  adjustViewport();

  $(window).resize(function(){
    windowHeight = $(window).height();
    adjustViewport();
  });

});


//==== Run on Document Ready ========
$(document).ready(function(){

//Plax Plugin 
$('.plax-layer1').plaxify({"xRange":15,"yRange":15,"invert":true});
$('.plax-layer2').plaxify({"xRange":7,"yRange":10,"invert":false});
$('.plax-background').plaxify({"xRange":5,"yRange":0,"invert":false});
$.plax.enable();


//Countdown (Edit this with your own date)
$("#countdown").countdown("2015/09/22", function(event) {
  var $this = $(this).html(event.strftime(''
     + '<div class="col-xs-3 countdown-col"><span class="countdown-time"> %-D </span> Days </div> '
     + '<div class="col-xs-3 countdown-col"><span class="countdown-time"> %H </span> Hours </div>'
     + '<div class="col-xs-3 countdown-col"><span class="countdown-time"> %M </span> Minutes </div>'
     + '<div class="col-xs-3 countdown-col"><span class="countdown-time"> %S </span> Seconds </div>'));
});


//Features
$('.feature').hover(function(){
  $(this).find('.feature-icon').addClass('animated').addClass('swing');
}, function(){
  $(this).find('.feature-icon').removeClass('animated').removeClass('swing');
});


// >> Waypoints Animations

//Waypoints - About Us
$('#about-us').waypoint(function() {
    $('#about-title').css({'opacity': 1}).addClass('fadeInDown');
     $('#about-block').css({'opacity': 1}).addClass('fadeInDown');
    $('#about-left').css({'opacity': 1}).addClass('fadeInLeft');
    $('#about-right').css({'opacity': 1}).addClass('fadeInRight');
  },
  {
    offset: '70%',
    triggerOnce: true
});

//Waypoints - Features
$('#features').waypoint(function() {
    $('#features-title').css({'opacity': 1}).addClass('fadeInDown');
     $('#features-block').css({'opacity': 1}).addClass('fadeInDown');
    $('#features-itens').css({'opacity': 1}).addClass('fadeInUp');
  },
  {
    offset: '70%',
    triggerOnce: true
});

//Waypoints - Subscribe
$('#subscribe').waypoint(function() {
    $('#subscribe-title').css({'opacity': 1}).addClass('fadeInDown');
    $('#subscribe-block').css({'opacity': 1}).addClass('fadeInDown');
    $('.bot-content').css({'opacity': 1}).addClass('fadeInUp');
  },
  {
    offset: '70%',
    triggerOnce: true
});

//Waypoints - Contact
$('#contact').waypoint(function() {
    $('#contact-title').css({'opacity': 1}).addClass('fadeInDown');
    $('#contact-block').css({'opacity': 1}).addClass('fadeInDown');
    $('#contact-intro').css({'opacity': 1}).addClass('fadeInDown');
    $('#contact-left').css({'opacity': 1}).addClass('fadeInLeft');
    $('#contact-right').css({'opacity': 1}).addClass('fadeInRight');
  },
  {
    offset: '80%',
    triggerOnce: true
});

//Anchor Scroll
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });

//Form Validator
$("#contactError").hide();
$("#contactSuccess").hide();
$('.form-send input').click(function(){
	$(this).attr("value", "Sending...");
});
$("#contactForm").validate({
	invalidHandler: function(event, validator) {
	    $('.form-send input').attr("value", "Send");
	  },
    submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "php/contact-form.php",
        data: {
          "name": $("#contactForm #name").val(),
          "email": $("#contactForm #email").val(),
          "subject": $("#contactForm #subject").val(),
          "message": $("#contactForm #message").val()
        },
        dataType: "json",
        success: function (data) {
          if (data.response == "success") {
          	$('#contactForm').slideUp(200, 'linear');
            $("#contactSuccess").delay(400).slideDown(300, 'linear');
            $("#contactError").hide();

            $("#contactForm #name, #contactForm #email, #contactForm #subject, #contactForm #message")
              fadeOut(400);        
            
          } else {
          	$('#contactForm').slideUp(300);
            $("#contactError").fadeIn(300);
            $("#contactSuccess").hide();
            $('.form-send input').attr("value", "Send");
          }
        }

      });
    }
  });
});
})(jQuery);

