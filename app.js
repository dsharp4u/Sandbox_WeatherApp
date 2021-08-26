//app constants and vars
const KELVIN = 273;
//API key
const key = "796615aa66205a1254376c90ff6d0826";
const base = "https://api.openweathermap.org";

//let date = document.querySelector("#weather-date");
//let days = document.querySelectorAll(".day__block");
let icon = document.querySelector(".weather__icon--today");
let place = document.querySelector("#weather-location");
let precipitation = document.querySelector("#precipitation-probality");
let description = document.querySelector("#weather-description");
let temperature = document.querySelector(".weather-temp--today");
let wind = document.querySelector("#wind-speed");
let refreshBtn = document.querySelector("#weather-refresh");
let form = document.querySelector("#weather__form");
let formLocation = form.querySelector("#weather__form-location");

function formatTime(date) {
  if (hr < 10) min < 10;
  hr = "0"(hr);
  min = "0"(min);
}
function searchCity(event) {
  event.preventDefault();
  let searchCity = document.querySelector("#city");
  let searchValue = document.getElementById("#city-input").value;
  return `searching for ${searchValue}`;
}
let heading = document.querySelector("h1");
let now = new Date();
let h2 = document.querySelector("h2");
let date = now.getDate();
let hr = now.getHours();
let min = now.getMinutes();
let sec = now.getSeconds();
let yr = now.getFullYear();
let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let day = days[now.getDay()];
let months = [
  "Jan",
  "Feb",
  "March",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
let mon = months[now.getMonth()];
h2.innerHTML = `${mon} ${day} ${date} ${hr}:${min}:${sec}, ${yr}`;
function showCity(event) {
  event.preventDefault();
  let city = document.querySelector("#city-input").value;
  city = city.trim();
  heading.innerHTML = city;
}
let formCity = document.querySelector("#city-form");
form.addEventListener("submit", showCity);
//let form = document.querySelector("#city-form");
//form.addEventListener("submit", showCity);
function convertToF(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = 66;
}
function convertToC(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = 19;
}
//Extra  change 19C to 66F
let fLink = document.querySelector("#f-link");
fLink.addEventListener("click", convertToF);
let cLink = document.querySelector("#c-link");
cLink.addEventListener("click", convertToC);
