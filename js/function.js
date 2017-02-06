$(document).ready(function(){
  $("#title").hide();
  $("#title").delay(100).slideDown(2000)

  $("#form").hide();
  $("#form").delay(2000).fadeIn(3000);
});

function startTime() {
var today = new Date();
var h = today.getHours();
var m = today.getMinutes();
var t = amPm(h);
m = checkMin(m);
h = checkHr(h);

document.getElementById('time').innerHTML =
  h + ":" + m + " " + t;
  var t = setTimeout(startTime, 500);
}

function checkMin(i) {
  if (i < 10) {
    i = "0" + i
  }  // add zero in front of numbers < 10
  return i;
}

function checkHr(i){
  if(i > 12 && i <= 24){
    i = i-12;
  }
  return i;
}

function amPm(i){
  if(i < 12){
    return "AM";
  } else {
    return "PM";
  }
}
