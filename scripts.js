$(window).on('load', () => {
  let isMobile
  $('.mobile-button').css('display') === 'inline-block'
    ? isMobile = true : isMobile = false

  if (isMobile === false) {
    $('#acc__tab-1').addClass('acc__tab-is-active')
    $.each($('section.accordian__page-wrapper'), (index, page) => {
      index === 0 ? $(page).show() : $(page).hide()
    })
  } else {
    $('#acc__tab-1').after($('section#1').detach())
    $('#acc__tab-2').after($('section#2').detach())
    $('#acc__tab-3').after($('section#3').detach())
    $('#acc__tab-4').after($('section#4').detach())
    $.each($('.accordian__page-wrapper'), (index, page) => $(page).hide())
  }
})

let isMobile;
  $('.mobile-button').css('display') === 'inline-block'
    ? isMobile = true : isMobile = false

if (isMobile === false) {
  $('.accordian__tab').on('click', function(event) {
    $('.accordian__tabs-wrapper').find('.acc__tab-is-active').removeClass('acc__tab-is-active')
    $(this).addClass('acc__tab-is-active')
    $.each($('.accordian__page-wrapper'), (index, page) => {
      page.id == event.target.value ? $(page).show() : $(page).hide()
    })
  })
} else {
  $('.mobile-button').on('click', function(event) {
    $(this).parent().toggleClass('.acc__tab-is-active')

    if ($(this).parent().hasClass('.acc__tab-is-active')) {
      $(this).parent().css('background', '#fff').next().show()
      $(this).text('-')
      $('.accordian__tabs-wrapper').find('.acc__tab-is-active').toggleClass('acc__tab-is-active').next().hide()
    } else {
      $(this).parent().css('background', '#f2f2f2').next().hide()
      $(this).text('+')
    }
  })
}
