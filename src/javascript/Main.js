$(function() {
  $('.view-section').click(function(e) {
    e.preventDefault();

    const section = $(this).attr('section');
    const headerHeight = $('#header').outerHeight();

    $('html, body').animate({
      scrollTop: $('#' + section).offset().top - headerHeight
    });
  });


  $(window).scroll(function() {
    const scrollTop = $(document).scrollTop();
    const heroHeight = $('#hero').height();
    const headerHeight = $('#header').outerHeight();
    const $header = $('#header');

    if (scrollTop >= heroHeight - headerHeight && !$header.hasClass('pinned')) {
      $header.addClass('pinned').css('top', -1 * headerHeight + 'px');
      $header.animate({
        top: 0
      }, 250);
    }

    if (scrollTop < heroHeight - headerHeight && $header.hasClass('pinned') && $header.css('top') == '0px') {
      $header.animate({
        top: -1 * headerHeight + 'px'
      }, 250, function() {
        $(this).removeClass('pinned').css('top', 0);
      });
    }

    if (scrollTop < headerHeight + 50 && $header.is(':animated')) {
      $header.finish();
    }
  });
});
