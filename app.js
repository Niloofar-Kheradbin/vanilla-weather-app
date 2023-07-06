function search(event) {
  event.preventDefault();
  let cityValue = document.querySelector("h1");
  cityValue.innerHTML = city.value;
}
let city = document.querySelector("#city");
city.innerHTML = addEventListener("submit", search);
let key = "4t6f8979960243ab78649cce393e06oc";
let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=4t6f8979960243ab78649cce393e06oc&units=metric`;
