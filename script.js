$(document).ready(function () {

    var breaktime = parseInt($('#breaktime').val());
    var focustime = parseInt($('#focustime').val());
    //var timer = parseInt($('#focustime').val());
    var timermm = 13, timerss = 37;
    var sessionComplete = false;
    console.log(timer);
    $('.clock').val(timermm + ":" + timerss);

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

    function startTimer() {
      var timer = setInterval(function beginTime() {
        timerss = timerss - 1;
        $('.clock').val(timermm + ":" + timerss);
        console.log(sessionComplete);

        if (timermm == 0 && timerss == 0){
          if (sessionComplete == true) {
            clearInterval(timer);
          }
          timermm = breaktime;
          sessionComplete = true;
        }
        if (timerss == 0 & timermm >= 0){
          timerss = 59;
          timermm = timermm - 1;
        }
      },25)
    }

    $('#start').click(function() {
      if (sessionComplete == true) {
        sessionComplete = false;
      }
      timermm = focustime - 1;
      timerss = 59;
      $('.clock').val(timermm + ":" + timerss);
      startTimer();
      //$('.settinggui').slideToggle(false);
    })

    $('#stop').click(function() {
      clearInterval(timer);
      //$('.settinggui').slideToggle(true);
    })


});
