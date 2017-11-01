$(document).ready(function () {

  //initialization
  var breakTime = 180, focusTime = 60;
  var curTime = focusTime, testTime = curTime;
  var clock = true;
  var status = "break";
  var notification = new Audio("notification.wav");
  $("#clock").text(timeStr(focusTime));

  //functions
  function minSec(min) {
    return min * 60;
  }

  function timeStr(sec) {
    var hour = 0, minute = 0;
    hour = Math.floor(sec / 3600);
    sec = sec - (3600 * hour);
    minute = Math.floor(sec / 60);
    sec = sec - (60 * minute);

    return(hour > 0) ? n(hour) + ":" + n(minute) + ":" + n(sec) : n(minute) + ":" + n(sec);

    function n(n) {
      return n > 9 ? "" + n : "0" + n;
    }
  }

  function startTimer() {
    $("#settinggui").hide(1000);
    if (clock === true) {
      testTime = curTime;
      clock = setInterval(countDown,100);
    }
    function countDown() {
      if (testTime === 0) {
        notification.play();
        switch(status) {
          case "break":
          testTime = breakTime;
          status = "focus";
          break;
          case "focus":
          testTime = focusTime;
          status = "break";
          break;
        }
        $("#clock").text(timeStr(testTime));
      } else {
        testTime--;
        $("#clock").text(timeStr(testTime));
      }
    }
  }

  function pauseTimer() {
    $("#settinggui").show(1000);
    clearInterval(clock);
    clock = true;
    curTime = testTime;
  }

  function stopTimer() {
    $("#settinggui").show(1000);
    clearInterval(clock);
    clock = true;
    testTime = curTime = focusTime;
    $("#clock").text(timeStr(focusTime));
  }

  function resetTimer() {
    $("#settinggui").show(1000);
    clearInterval(clock);
    clock = true;
    testTime = curTime = focusTime = minSec(25);
    breakTime = minSec(5);
    $("#testTime").text(25);
    $("#testBreak").text(5);
    $("#clock").text(timeStr(testTime));
  }

  //click handlers
  $("#ftup").click(function() {
    if (testTime === focusTime) {
      var ft = $("#testTime").text();
      ft++;
      $("#testTime").text(ft);
      testTime = curTime = focusTime = eval(minSec($("#testTime").text()));
      $("#clock").text(timeStr(focusTime));
    }
  })
  $("#ftdown").click(function() {
    if (testTime === focusTime && $("#testTime").text() > 1) {
      var ft = $("#testTime").text();
      ft--;
      $("#testTime").text(ft);
      testTime = curTime = focusTime = eval(minSec($("#testTime").text()));
      $("#clock").text(timeStr(focusTime));
    }
  })
  $("#btup").click(function() {
    if (testTime === focusTime) {
      var bt = $("#testBreak").text();
      bt++;
      $("#testBreak").text(bt);
      breakTime = eval(minSec($("#testBreak").text()));
    }
  })
  $("#btdown").click(function() {
    if (testTime === focusTime && $("#testBreak").text() > 1) {
      var bt = $("#testBreak").text();
      bt--;
      $("#testBreak").text(bt);
      breakTime = eval(minSec($("#testBreak").text()));
    }
  })

  // click calls
  $("#start").click(startTimer);
  $("#pause").click(pauseTimer);
  $("#stop").click(stopTimer);
  $("#reset").click(resetTimer);

})
