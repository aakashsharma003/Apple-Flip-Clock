const hr = document.getElementsByClassName("hours");
const sec = document.getElementsByClassName("seconds");
const mins = document.getElementsByClassName("minutes");
const zon = document.getElementsByClassName("time-zone");
const clock = setInterval(getTime, 1000);
function getTime() {
  const date = new Date();
  const zone = date.toLocaleTimeString().slice(8);
  const hours = date.toLocaleTimeString().slice(0, 1);
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  zon[0].innerHTML = `${zone}`;
  if (hours < 10) {
    hr[0].innerHTML = `0${hours}`;
    hr[1].innerHTML = `0${hours}`;
  } else {
    hr[0].innerHTML = hours;
    hr[1].innerHTML = hours;
  }

  if (minutes < 10) {
    mins[0].innerHTML = `0${minutes}`;
    mins[1].innerHTML = `0${minutes}`;
  } else {
    mins[0].innerHTML = minutes;
    mins[1].innerHTML = minutes;
  }

  if (seconds < 10) {
    sec[0].innerHTML = `0${seconds}`;
    sec[1].innerHTML = `0${seconds}`;
  } else {
    sec[0].innerHTML = seconds;
    sec[1].innerHTML = seconds;
  }
}
