$(window).on('load', () => {
  $('#acc__tab-1').addClass('acc__tab-is-active');

  $.each($('.accordian__page-wrapper'), (index, page) => {
    index === 0 ? $(page).show() : $(page).hide();
  });
});

$('.accordian__tab').on('click', function(event) {
  $('.accordian__tabs-wrapper')
    .find('.acc__tab-is-active')
    .removeClass('acc__tab-is-active');

  $(this).addClass('acc__tab-is-active');

  $.each($('.accordian__page-wrapper'), (index, page) => {
    page.id == event.target.value ? $(page).show() : $(page).hide();
  });
});

