///api key 600eefdf85ded322830140a2b33c8e5f

const API_KEY = "600eefdf85ded322830140a2b33c8e5f";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const name = document.querySelector("#weather span:last-child");
      name.innerText = data.name;
      weather.innerText = `${data.weather[0].main}/${data.main.temp}`;
    });
}

function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
