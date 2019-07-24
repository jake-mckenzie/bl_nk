$(document).ready(function() {
  disableScroll();
  logoFadeInit();
  setTimeout(section1Panels, 3000);
});

//      contact form animations
$(function() {
  $('#contact-us').click(function() {
    $('#contact-area').fadeToggle();
  });

  $(document).mouseup(function(e) {
    var container = $('#contact-area');
 // if the target of the click isn't the container nor a descendant of the container
    if (!container.is(e.target)&&container.has(e.target).length === 0)
    {
      container.fadeOut();
    }
  });
});

$(function() {
  $('#btm-btn').click(function() {
    $('#contact-area').fadeToggle();
  });

  $(document).mouseup(function(e) {
    var container = $('#contact-area');

 // if the target of the click isn't the container nor a descendant of the container
    if (!container.is(e.target)&&container.has(e.target).length === 0)
    {
      container.fadeOut();
    }
  });
});

// Prevent Scrolling

// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
var keys = {
  37: 1,
  38: 1,
  39: 1,
  40: 1
};

function preventDefault(e) {
  e = e || window.event;
  if (e.preventDefault)
    e.preventDefault();
  e.returnValue = false;
}

function preventDefaultForScrollKeys(e) {
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
}

function disableScroll() {
  if (window.addEventListener) // older FF
    window.addEventListener('DOMMouseScroll', preventDefault, false);
  window.onwheel = preventDefault; // modern standard
  window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
  window.ontouchmove = preventDefault; // mobile
  document.onkeydown = preventDefaultForScrollKeys;
}

function enableScroll() {
  if (window.removeEventListener)
    window.removeEventListener('DOMMouseScroll', preventDefault, false);
  window.onmousewheel = document.onmousewheel = null;
  window.onwheel = null;
  window.ontouchmove = null;
  document.onkeydown = null;
}

//      ===== Scroll to Top ====
$(window).scroll(function() {
  if ($(this).scrollTop() >= 50) {
    // If page is scrolled more than 50px
    $('#return-to-top').fadeIn(200); // Fade in the arrow
  } else {
    $('#return-to-top').fadeOut(200); // Else fade out the arrow
  }
});

$('#return-to-top').click(function() {
  // When arrow is clicked
  $('body,html').animate({
      scrollTop: 0, // Scroll to top of body
    },
    800
  );
  section1Panels();
});


//      LOGO HEADER SHRINK animation
function logoFadeInit() {
  $('#logo').animate({
    opacity: '1',
  }, 1000);
  setTimeout(headerShrink, 1800);
}


function headerShrink() {
  $('#navbarHeader').animate({
    height: '7vh',
  }, 1200);
  $('#logo').animate({
    marginTop: '1vh',
    height: '5vh',
  }, 1200);
  $('#logo .st0').addClass('logoFadeAnim').css({
    'stroke': '#fff',
  });
  $('#logo .st1').addClass('logoFade2Anim').css({
    'stroke': '#fff',
  });
  $('#logo .st2').addClass('logoFade3Anim').css({
    'fill': '#fff',
  });
  $('#navbarHeader').addClass('headerFadeAnim').css({
    'backgroundColor': '#000',
  });
}


//   FIRST PANEL
function section1Panels() {
  $('#contact-us').fadeIn('slow'); // Fade in the button
  $('#section1').removeClass('hidden2');
  $('#section1 .frontLeft').fadeIn('fast').addClass('leftAnim');
  $('#section1 .mobileFrontLeft').fadeIn('fast').addClass('leftAnim');
  $('#section1 .frontRight').fadeIn('fast').addClass('rightAnim');
  $('#section1 .mobileFrontRight').fadeIn('fast').addClass('rightAnim');
  $('#section1 .backLeft').addClass('leftAnim').delay(200).fadeOut('fast');
  $('#section1 .mobileBackLeft').addClass('leftAnim').delay(200).fadeOut('fast');
  $('#section1 .backRight').addClass('rightAnim').delay(200).fadeOut('fast');
  $('#section1 .mobileBackRight').addClass('rightAnim').delay(200).fadeOut('fast');
  $('#section1 div').fadeIn('slow').removeClass('hidden');
  $('#section1 #arrow').delay(800).fadeIn('slow');
}


//   Next Button
$('#section1 #arrow').click(function() {
// Set Variable for header
var navbarHeader = $('#navbarHeader');
  $('html, body').animate({
      scrollTop: $('#section2').offset().top - (navbarHeader.height()),
    },
    1000
  );
  $('#section1 #arrow').fadeOut(500);
  setTimeout(section2Panels, 250);
});

//  Mobile Next Button
$('#section1 #arrowMobile').click(function() {
// Set Variable for header
var navbarHeader = $('#navbarHeader');
  $('html, body').animate({
      scrollTop: $('#mobileSect2').offset().top - (navbarHeader.height() - 1),
    },
    1000
  );
  setTimeout(section2Panels, 250);
});


//   SECOND PANEL
function section2Panels() {
  $('#section2 div').removeClass('hidden2 hidden');
  $('#section2 .frontLeft').fadeIn('fast').addClass('leftAnim');
  $('#section2 .frontRight').fadeIn('fast').addClass('rightAnim');
  $('#section2 .backLeft').addClass('leftAnim').delay(275).fadeOut('fast');
  $('#section2 .backRight').addClass('rightAnim').delay(275).fadeOut('fast');
  $('#section2 div').fadeIn('slow').removeClass('hidden2 hidden');
  $('#section2 #arrow').delay(800).fadeIn('slow');
}


//   Next Button
$('#section2 #arrow').click(function() {
// Set Variable for header
var navbarHeader = $('#navbarHeader');
  $('html, body').animate({
      scrollTop: $('#section3').offset().top - (navbarHeader.height()),
    },
    1000
  );
  $('#section2 #arrow').fadeOut(500);
  setTimeout(section3Panels, 250);
});

//  Mobile Next Button
$('#section2 #arrowMobile').click(function() {
// Set Variable for header
var navbarHeader = $('#navbarHeader');
  $('html, body').animate({
      scrollTop: $('#mobileSect3').offset().top - (navbarHeader.height()),
    },
    1000
  );
  setTimeout(section3Panels, 250);
});


//   THIRD PANEL
function section3Panels() {
  $('#section3 div').removeClass('hidden2 hidden');
  $('#section3 .frontLeft').fadeIn('fast').addClass('leftAnim');
  $('#section3 .frontRight').fadeIn('fast').addClass('rightAnim');
  $('#section3 .backLeft').addClass('leftAnim').delay(275).fadeOut('fast');
  $('#section3 .backRight').addClass('rightAnim').delay(275).fadeOut('fast');
  $('#section3 div').fadeIn('slow').removeClass('hidden2 hidden');
  $('#section3 #arrow').delay(800).fadeIn('slow');
}


//   Next Button
$('#section3 #arrow').click(function() {
// Set Variable for header
var navbarHeader = $('#navbarHeader');
  $('html, body').animate({
      scrollTop: $('#section4').offset().top - (navbarHeader.height()),
    },
    1000
  );
  $('#section3 #arrow').fadeOut(500);
  setTimeout(section4Panels, 250);
});

//  Mobile Next Button
$('#section3 #arrowMobile').click(function() {
// Set Variable for header
var navbarHeader = $('#navbarHeader');
  $('html, body').animate({
      scrollTop: $('#mobileSect4').offset().top - (navbarHeader.height()),
    },
    1000
  );
  setTimeout(section4Panels, 250);
});

//   FOURTH PANEL
function section4Panels() {
  $('#section4 div').removeClass('hidden2 hidden');
  $('#section4 .frontLeft').fadeIn('fast').addClass('leftAnim');
  $('#section4 .frontRight').fadeIn('fast').addClass('rightAnim');
  $('#section4 .backLeft').addClass('leftAnim').delay(200).fadeOut('fast');
  $('#section4 .backRight').addClass('rightAnim').delay(200).fadeOut('fast');
  $('#section4 div').fadeIn('slow').removeClass('hidden2 hidden');
  $('#section4 #arrow').delay(800).fadeIn('slow');
}


//   Next Button
$('#section4 #arrow').click(function() {
// Set Variable for header
var navbarHeader = $('#navbarHeader');
  $('html, body').animate({
      scrollTop: $('#section5').offset().top - (navbarHeader.height()),
    },
    1000
  );
  $('#section4 #arrow').fadeOut(500);
  setTimeout(section5Panels, 250);
});

//   Next Button
$('#section4 #arrowMobile').click(function() {
// Set Variable for header
var navbarHeader = $('#navbarHeader');
  $('html, body').animate({
      scrollTop: $('#section5').offset().top - (navbarHeader.height()),
    },
    1000
  );
  setTimeout(section5Panels, 250);
});

//   FIFTH PANEL
function section5Panels() {
  $('#section5 div').removeClass('hidden2 hidden');
  $('#section5 .frontLeft').fadeIn('fast').addClass('leftAnim');
  $('#section5 .frontRight').fadeIn('fast').addClass('rightAnim');
  $('#section5 .backLeft').addClass('leftAnim').delay(200).fadeOut('fast');
  $('#section5 .backRight').addClass('rightAnim').delay(200).fadeOut('fast');
  $('#section5 div').fadeIn('slow').removeClass('hidden2 hidden');
  $('#section5 #arrow').delay(800).fadeIn('slow');
}


//   Next Button
$('#section5 #arrow').click(function() {
// Set Variable for header
var navbarHeader = $('#navbarHeader');
  $('html, body').animate({
      scrollTop: $('#section6').offset().top - (navbarHeader.height()),
    },
    1000
  );
  $('#section5 #arrow').fadeOut(500);

  setTimeout(section6Panels, 250);
  enableScroll();
});


//   Next Button
$('#section5 #arrowMobile').click(function() {
// Set Variable for header
var navbarHeader = $('#navbarHeader');
  $('html, body').animate({
      scrollTop: $('#section6').offset().top - (navbarHeader.height()),
    },
    1000
  );
  setTimeout(section6Panels, 250);
  enableScroll();
});

//   SIXTH PANEL
function section6Panels() {
  $('#section6 div').removeClass('hidden2 hidden');
  $('#section6 .frontLeft').fadeIn('fast').addClass('leftAnim');
  $('#section6 .frontRight').fadeIn('fast').addClass('rightAnim');
  $('#section6 .backLeft').addClass('leftAnim').delay(200).fadeOut('fast');
  $('#section6 .backRight').addClass('rightAnim').delay(200).fadeOut('fast');
  $('#section6 div').fadeIn('slow').removeClass('hidden2 hidden');
  $('#section6 a').delay(800).fadeIn('slow');
}
