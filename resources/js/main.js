// main function >> nav menu toggle, FA hover effects, smooth scroll
var main = function() {

  // hide dropdown-menu when 'click' on document
  //$(document).click( function(){
  //  $('.dropdown-menu').hide();
  //});

  // stop hide() from bubbling & open dropdown-menu when bars are clicked
  //$('.fa-bars').click(function() {
  //  event.stopPropagation();
  //  $('.dropdown-menu').slideToggle(200, 'swing');
  //});

  //Slow Yo Scroll, Homie
  // Select all links with hashes
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
        location.hostname == this.hostname
      ) {
        // Find element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000, function() {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
              return false;
            } else {
              $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            }
          });
        }
      }
    });

    //Banner auto-type effect
  var TxtRotate = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
  };

  TxtRotate.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 300 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }

    setTimeout(function() {
      that.tick();
    }, delta);
  };

  window.onload = function() {
    var elements = document.getElementsByClassName('txt-rotate');
    for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-rotate');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate), period);
      }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
    document.body.appendChild(css);
  };

  // blurb highlight hover effect
  //$('.blurb').hover(function() {
  //  $(this).addClass('highlight');
  //}, function() {
  //  $(this).removeClass('highlight');
  //});

  // gavel spin on hover effect
  //$('#gavel').hover(function() {
  //  $('#gavel i').addClass("fa-rotate-270");
  //}, function() {
  //  $('#gavel i').removeClass("fa-rotate-270");
  //});

  // hourglass spin on hover effect
  //$('#hourglass').hover(function() {
  //  $('#hourglass i').addClass("fa-rotate-270");
  //}, function() {
  //  $('#hourglass i').removeClass("fa-rotate-270");
  //});

  // globe spin on hover effect
  //$('#globe').hover(function() {
  //  $('#globe i').addClass("fa-rotate-270");
  //}, function() {
  //  $('#globe i').removeClass("fa-rotate-270");
  //});
  };

  //areas of practice hover effects
  $('.area').hover(function() {
    $(this).find('a').toggleClass('invert');
  });

  //modal click event handlers
  $('#family').click(function() {
    $('#modal-family').fadeIn();
  });

  $('#business').click(function() {
    $('#modal-business').fadeIn();
  });

  $('#property').click(function() {
    $('#modal-property').fadeIn();
  });

  $('#commercial').click(function() {
    $('#modal-commercial').fadeIn();
  });

  $('#civil').click(function() {
    $('#modal-civil').fadeIn();
  });

  $('#consumer').click(function() {
    $('#modal-consumer').fadeIn();
  });

  $('#estate').click(function() {
    $('#modal-estate').fadeIn();
  });

  $('#probate').click(function() {
    $('#modal-probate').fadeIn();
  });

  $('#employment').click(function() {
    $('#modal-employment').fadeIn();
  });

  $('#debt').click(function() {
    $('#modal-debt').fadeIn();
  });

  $('#tenant').click(function() {
    $('#modal-tenant').fadeIn();
  });

  $('#coming').click(function() {
    $('#modal-coming').fadeIn();
  });

  $('#pay').click(function() {
    $('#modal-pay').fadeIn();
  });

  $('.closer').click(function() {
    $('.modal').fadeOut();
  });

  // Social icon animations
  $('.circle').hover(function(){
  	$(this).toggleClass('minify');
  });
  //$('.social').hover(function(){
  	//$(this).prev().toggleClass('minify');
  	//$(this).toggleClass('invert');
  //});

  // ===== Scroll to Top ====
$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
});
$('#return-to-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
});

//call main function when document is ready
$(document).ready(main);
