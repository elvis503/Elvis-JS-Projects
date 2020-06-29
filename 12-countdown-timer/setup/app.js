const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector(".giveaway")


const days = document.querySelector(".days");
const hours = document.querySelector(".hours");
const minutes = document.querySelector(".mins");
const seconds = document.querySelector(".seconds")

const countDown = new Date("Jun 30, 2020 13:42:00")
const countDownDate = new Date("Jun 30, 2020 13:42:00").getTime();

const calculateTime = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  days.innerHTML = Math.floor(distance / (1000 * 60 * 60 * 24));
  hours.innerHTML = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  minutes.innerHTML = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  seconds.innerHTML = Math.floor((distance % (1000 * 60)) / 1000);

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(calculateTime);
    giveaway.innerHTML = "EXPIRED";
  }else{
    giveaway.innerHTML = `Giveaway ends on ${countDown}`
  }
}, 1000);
