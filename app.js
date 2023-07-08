function search(event) {
  event.preventDefault();
  let key = "9bb3c645e603b5a1074b400fa0498278";
  let city = document.querySelector("#city");
  let cityValue = document.querySelector("h1");
  let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city.value}&appid=${key}&units=metric`;
  cityValue.innerHTML = city.value;
  axios.get(apiUrl).then(showTemp);
  showTemp();
}
function showTemp(response) {
  console.log(response.data);
}

function dateTime() {
  let today = new Date();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[today.getDay()];
  let dayValue = document.querySelector("#day");
  let time = document.querySelector("#time");
  let hour = today.getHours();
  if (hour < 10) {
    hour = `0${hour}`;
  }
  let minutes = today.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  dayValue.innerHTML = day;
  time.innerHTML = ` ${hour}:${minutes} `;
}
let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

dateTime();
