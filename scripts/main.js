$(document).ready(function() {

  // First wrapper gets focus by default
  $('.container').children().eq(0).addClass('active');
  $('.active').find("div.wrapper").eq(0).addClass('focus');

  // // For the horizontal adjustment of carousels
  function adjustContent() {

    total = $('.active .wrapper').length;
    current = $('.active .wrapper.focus').index() + 1;

    if ($('.carousel').hasClass('active')) {
      widthToMove = parseInt($('.active .wrapper.focus').outerWidth(true));
      carouselPositionX = parseInt($('.active .carousel-content').css('transform').split(',')[4]);
    }

  }

  //For the vertical adjustment of sections
  function adjustSection() {

    // total = target the parent of the active slice and then grab all the children. i.e. All the siblings
    slice = $('.active').index();
    containerPositionY = parseInt($('.active').parent().css('transform').split(',')[5]);

  }


  function returnFocus() {

    //Logic of returning focus to item below
    if ($('.active .wrapper').hasClass('lastFocus')) {
      $('.active .wrapper.lastFocus').addClass('focus').removeClass('lastFocus');
    } else {
      $('.active .wrapper:eq(0)').addClass('focus');
    }

  }

  function moveImage() {

    containerPositionY = parseInt($('.active').parent().css('transform').split(',')[5]);
    imagePositionY = -containerPositionY;

    //A dirty dirty hack
    $('.TLEO-image').css('transform', 'translateY(' + (imagePositionY) + 'px)');

    if ($('.active').index() > 1) {

      $('.TLEO-image').fadeTo( 300 , 0.2);

    } else {

      $('.TLEO-image').fadeTo( 300 , 1);

    }

  }

  function moveLeft() {

    if (current > 1) {

      if ($('.grid').hasClass('active')) {

        if ($('.focus').is(':nth-child(4n + 1)')) {

          //Do nothing

        } else {

          //Remove focus from current content item and add to the one of the left
          $('.wrapper.focus').removeClass('focus').prev().addClass('focus');

        }

      } else if ($('.PGV-header').hasClass('active')) {


        //Move focus to next item in DOM
        $('.wrapper.focus').removeClass('focus').prev().addClass('focus');
        $('.pagination .wrapper.lastFocus').removeClass('lastFocus').prev().addClass('lastFocus');

        focusIndex = $('.button.focus').index();
        // $('.active .carousel').css('transform', 'translateX(' + -(focusIndex * 89) + 'px)');
        // $('.pagination.bottom .carousel').css('transform', 'translateX(' + -(focusIndex * 89) + 'px)');

        if (focusIndex == 0) {
          $('.episode-count').text('1–40');
          $('.grid.medium').hide();
          $('.grid.medium').eq(0).show();
        }

        if (focusIndex == 1) {
          $('.episode-count').text('41–80');
          $('.grid.medium').hide();
          $('.grid.medium').eq(1).show();
        }

        if (focusIndex == 2) {
          $('.episode-count').text('81–120');
          $('.grid.medium').hide();
          $('.grid.medium').eq(2).show();
        }

        if (focusIndex == 3) {
          $('.episode-count').text('120–150');
          $('.grid.medium').hide();
          $('.grid.medium').eq(3).show();
        }

      } else if ($('.pagination.bottom').hasClass('active')) {

        //Move focus to next item in DOM
        $('.wrapper.focus').removeClass('focus').prev().addClass('focus');
        $('.pagination .wrapper.lastFocus').removeClass('lastFocus').prev().addClass('lastFocus');

        focusIndex = $('.button.focus').index();
        // $('.PGV-header .carousel').css('transform', 'translateX(' + -(focusIndex * 89) + 'px)');
        // $('.pagination.bottom .carousel').css('transform', 'translateX(' + -(focusIndex * 89) + 'px)');

        //reset active state
        $('.active').removeClass('active');
        $('.PGV-header').addClass('active');

        //remove focus states
        $('.focus').removeClass('focus').addClass('lastFocus');
        $('.grid-content .wrapper.lastFocus').removeClass('lastFocus');

        //reset view
        $('.container').css('transform', 'translateY(0px)');

        returnFocus();

        if (focusIndex == 0) {
          $('.episode-count').text('1–40');
          $('.grid.medium').hide();
          $('.grid.medium').eq(0).show();
        }

        if (focusIndex == 1) {
          $('.episode-count').text('41–80');
          $('.grid.medium').hide();
          $('.grid.medium').eq(1).show();
        }

        if (focusIndex == 2) {
          $('.episode-count').text('81–120');
          $('.grid.medium').hide();
          $('.grid.medium').eq(2).show();
        }

        if (focusIndex == 3) {
          $('.episode-count').text('120–150');
          $('.grid.medium').hide();
          $('.grid.medium').eq(3).show();
        }

      } else {

        //Move focus to next item in DOM
        $('.wrapper.focus').removeClass('focus').prev().addClass('focus');

      }

    }

  }

  function moveRight() {

    if (current < total) {

      if ($('.grid').hasClass('active')) {

        if ($('.focus').is(':nth-child(4n + 4)')) {

          //Do nothing

        } else {

          //Move focus to next item in DOM
          $('.wrapper.focus').removeClass('focus').next().addClass('focus');

        }

      } else if ($('.PGV-header').hasClass('active')) {


        //Move focus to next item in DOM
        $('.wrapper.focus').removeClass('focus').next().addClass('focus');
        $('.pagination .wrapper.lastFocus').removeClass('lastFocus').next().addClass('lastFocus');

        focusIndex = $('.button.focus').index();

        // $('.active .carousel').css('transform', 'translateX(' + -(focusIndex * 89) + 'px)');
        // $('.pagination.bottom .carousel').css('transform', 'translateX(' + -(focusIndex * 89) + 'px)');

        if (focusIndex == 0) {
          $('.episode-count').text("1–40");
          $('.grid.medium').hide();
          $('.grid.medium').eq(0).show();
        }

        if (focusIndex == 1) {
          $('.episode-count').text("41–80");
          $('.grid.medium').hide();
          $('.grid.medium').eq(1).show();
      }

        if (focusIndex == 2) {
          $('.episode-count').text("81–120");
          $('.grid.medium').hide();
          $('.grid.medium').eq(2).show();
        }

        if (focusIndex == 3) {
          $('.episode-count').text("120–150");
          $('.grid.medium').hide();
          $('.grid.medium').eq(3).show();
        }

      } else if ($('.pagination.bottom').hasClass('active')) {

        //Move focus to next item in DOM
        $('.wrapper.focus').removeClass('focus').next().addClass('focus');
        $('.pagination .wrapper.lastFocus').removeClass('lastFocus').next().addClass('lastFocus');

        focusIndex = $('.button.focus').index();
        // $('.PGV-header .carousel').css('transform', 'translateX(' + -(focusIndex * 89) + 'px)');
        // $('.pagination.bottom .carousel').css('transform', 'translateX(' + -(focusIndex * 89) + 'px)');

        //reset active state
        $('.active').removeClass('active');
        $('.PGV-header').addClass('active');

        //remove focus
        $('.focus').removeClass('focus').addClass('lastFocus');

        //reset view
        $('.container').css('transform', 'translateY(0px)');

        returnFocus();

        if (focusIndex == 0) {
          $('.episode-count').text('1–40');
          $('.grid.medium').hide();
          $('.grid.medium').eq(0).show();
        }

        if (focusIndex == 1) {
          $('.episode-count').text('41–80');
          $('.grid.medium').hide();
          $('.grid.medium').eq(1).show();
        }

        if (focusIndex == 2) {
          $('.episode-count').text('81–120');
          $('.grid.medium').hide();
          $('.grid.medium').eq(2).show();
        }

        if (focusIndex == 3) {
          $('.episode-count').text('120–150');
          $('.grid.medium').hide();
          $('.grid.medium').eq(3).show();
        }

      } else {

        //Move focus to next item in DOM
        $('.wrapper.focus').removeClass('focus').next().addClass('focus');

      }

    }

  }

  function moveUp() {

    if ($('.active').index() > 0) {

      if ($('.grid').hasClass('active')) {

        if (current > 4) {

          var adjust = containerPositionY + parseInt($('.focus').outerHeight(true));

          //Move focus
          $('.wrapper.focus').removeClass('focus');
          $('.active .grid-content .wrapper:eq(' + (current - 5) + ')').addClass('focus');
          $('.container').css('transform', 'translateY(' + adjust + 'px)');

        } else {

            //Remove focus
            $('.wrapper.focus').removeClass('focus').addClass('lastFocus');
            //Remove active
            $('.active').removeClass('active');
            $('.PGV-header').addClass('active');

            returnFocus();

        }

      } else if ($('.pagination.bottom').hasClass('active')) {

        console.log("Moving up from the pagination");


        //Remove focus
        $('.focus').removeClass('focus').addClass('lastFocus');

        //remove active state
        $('.active').removeClass('active');
        $('.grid:visible').addClass('active');

        returnFocus();


      } else {

        //Remove focus
        $('.wrapper.focus').removeClass('focus').addClass('lastFocus');

        //Remove active
        $('.active').removeClass('active').prev().addClass('active');

        returnFocus();

      }

    }

  }

  function moveDown() {

    if ($('.grid').hasClass('active')) {

      if (current < (total - 3)) {

        var adjust = containerPositionY - parseInt($('.focus').outerHeight(true));

        //Remove focus
        $('.wrapper.focus').removeClass('focus');
        $('.active .grid-content .wrapper:eq(' + (current + 3) + ')').addClass('focus');
        $('.container').css('transform', 'translateY(' + adjust + 'px)');

      } else {

        //Remove focus
        $('.wrapper.focus').removeClass('focus').addClass('lastFocus');
        //Remove active
        $('.active').removeClass('active');
        $('.pagination.bottom').addClass('active');

        returnFocus();

      }

    } else if ($('.pagination').hasClass('active')) {


    }  else if ($('.PGV-header').hasClass('active')) {

      focusIndex = $('.button.focus').index();

      if (focusIndex == 0) {

        //Remove focus
        $('.wrapper.focus').removeClass('focus').addClass('lastFocus');
        //Remove active
        $('.active').removeClass('active')
        $('.page1').addClass('active');
        returnFocus();

      }

      if (focusIndex == 1) {

        //Remove focus
        $('.wrapper.focus').removeClass('focus').addClass('lastFocus');
        //Remove active
        $('.active').removeClass('active')
        $('.page2').addClass('active');
        returnFocus();

      }

      if (focusIndex == 2) {

        //Remove focus
        $('.wrapper.focus').removeClass('focus').addClass('lastFocus');
        //Remove active
        $('.active').removeClass('active')
        $('.page3').addClass('active');
        returnFocus();

      }

      if (focusIndex == 3) {

        //Remove focus
        $('.wrapper.focus').removeClass('focus').addClass('lastFocus');
        //Remove active
        $('.active').removeClass('active')
        $('.page4').addClass('active');
        returnFocus();

      }

    } else {

      //Remove focus
      $('.wrapper.focus').removeClass('focus').addClass('lastFocus');
      //Remove active
      $('.active').removeClass('active').next($('active')).addClass('active');

      returnFocus();

      }

  }

  function goBack() {

    if ($('.pagination').hasClass('active')) {

      var focusIndex = $('.focus').index();

      if (focusIndex > 0) {

        //Remove focus
        $('.wrapper.focus').removeClass('focus').addClass('lastFocus');
        //Remove active
        $('.active').removeClass('active')
        $('.page1').addClass('active');
        returnFocus();

      }

    } else if ($('.PGV-header').hasClass('active')) {

      var focusIndex = $('.focus').index();

      if (focusIndex > 0) {

        //Remove focus
        $('.wrapper.focus').removeClass('focus');
        returnFocus();

        //reset view
        $('.container').css('transform', 'translateY(0px)');
        $('.episode-count').text('1–40');
        $('.grid.medium').hide();
        $('.grid.medium').eq(0).show();

      }

    } else if ($('.grid').hasClass('active')) {

      var focusIndex = $('.focus').index();

      if (focusIndex > 0) {

        $('.wrapper.focus').removeClass('focus');
        $('.grid.active .wrapper').eq(0).addClass('focus');
        $('.container').css('transform', 'translateY(0px)');

      } else {

        //Remove focus
        $('.wrapper.focus').removeClass('focus').addClass('lastFocus');
        //Remove active
        $('.active').removeClass('active');
        $('.PGV-header').addClass('active');

        returnFocus();

      }

    }

  }

  // On *any* keydown event
  $(document).keyup(function(e) {

    adjustContent();
    adjustSection();


    if (e.keyCode == 37) {
      moveLeft();
    }

    if (e.keyCode == 38) {
      moveUp();
      // moveImage();
    }

    if (e.keyCode == 39) {
      moveRight();
    }

    if (e.keyCode == 40) {
      moveDown();
      // moveImage();
    }

    if (e.keyCode == 13) {
      pressEnter();
    }

    if (e.keyCode == 179) {
      pressPlay();
    }

    if (e.keyCode == 27 || e.keyCode == 8) {
      goBack();
    }

  });

});
