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
setGreeting(h);
var t = amPm(h);
var finalH = checkHr(h);
var finalM = checkMin(m);

document.getElementById('time').innerHTML = finalH + ":" + finalM + " " + t;
var t = setTimeout(startTime, 500);
}

function setGreeting(h){
  if(h => 12 && h < 17){
    document.getElementById('greeting').innerHTML = "Good Evening"
  } else if( h >= 17 && h <=24){
    document.getElementById('greeting').innerHTML = "Good Evening"
  } else {
    document.getElementById('greeting').innerHTML = "Good Morning"
  }
}



function checkMin(i) {
  if (i < 10) {
    i = "0" + i
  }
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
