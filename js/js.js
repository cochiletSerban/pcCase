$(function () {
  $('a[href*=#]:not([href=#])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

$(document).ready(function () {
  $(".fancybox").fancybox();
});

$(window).scroll(function () {
  if ($(this).scrollTop() > 0) {
    $('#topnav').hide();
    $('#navbar').css('box-shadow', '1px 2px 8px black');
    $('#cellcontainer').css('border-top', 'none')
  } else {
    $('#topnav').show();
    $('#navbar').css('box-shadow', '0 0 0 black')
    $('#cellcontainer').css('border-top', '1px solid #d6eaf2')

  }
})


/*
  good mornig Miss I!
  i was dreaming you see,
  so this tape i took
  And this rose i hooked
  on Your little window.

  This paper i took
  and as i looked
  this poem appeared
  it may seem weird
  but it's better than my beard.

  A good day may u have
  And even if you don't
  you may never front,
  Cuz i'll be near
  alwayas here to cheer.

  P.S
    engleza a fost
    poate fara rost
    dar am incercat
    sa fiu remarcat

  *smiley face/wink*
*/