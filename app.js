function search(event) {
  event.preventDefault();
  let cityValue = document.querySelector("h1");
  cityValue.innerHTML = city.value;
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
let city = document.querySelector("#city");
city.innerHTML = addEventListener("submit", search);
let key = "4t6f8979960243ab78649cce393e06oc";
let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=4t6f8979960243ab78649cce393e06oc&units=metric`;
dateTime();
