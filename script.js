

$(document).ready(function () {

    var breaktime = parseInt($('#breaktime').val());
    var focustime = parseInt($('#focustime').val());
    var timer = parseInt($('#focustime').val());
    var timermm, timerss;
    console.log(timer);

    $('#ftup').click(function() {
      focustime += 1;
      $('#focustime').val(focustime);
    })
    $('#ftdown').click(function() {
      focustime -= 1;
      $('#focustime').val(focustime);
    })

    $('#btup').click(function() {
      breaktime += 1;
      $('#breaktime').val(breaktime);
    })
    $('#btdown').click(function() {
      breaktime -= 1;
      $('#breaktime').val(breaktime);
    })

    $('#start').click(function() {
      timer = focustime;
      $('.clock').val(timer);
    })

});
