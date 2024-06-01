const hr = document.getElementsByClassName("hours");
const sec = document.getElementsByClassName("seconds");
const mins = document.getElementsByClassName("minutes");
const zon = document.getElementsByClassName("time-zone");
const tickSound = document.getElementById("tick-sound");

const clock = setInterval(getTime, 1000);

function getTime() {
  const date = new Date();
  const zone = date.toLocaleTimeString().slice(-2); // AM or PM
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  zon[0].innerHTML = `${zone}`;

  hr[0].innerHTML = hr[1].innerHTML = hours < 10 ? `0${hours}` : hours;
  mins[0].innerHTML = mins[1].innerHTML =
    minutes < 10 ? `0${minutes}` : minutes;
  sec[0].innerHTML = sec[1].innerHTML = seconds < 10 ? `0${seconds}` : seconds;

  tickSound.currentTime = 0; // Reset the audio to the beginning
  tickSound.play(); // Play the audio
}
