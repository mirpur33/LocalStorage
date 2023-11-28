let myapiKey = "92aa4fc0f53c0e96e588c41ac3e76efb";

let history = [];

let formEl = $("#search-form");

let inputEl = $("#search-input");

let todayEl = $("#today");

let forcastEl = $("#forcast");

let historyEl = $("#history");

function initHistory() {
  let previousHistory = localStorage.getItem("history");
  if (previousHistory) {
    history = JSON.parse(previousHistory);
  }
  displayHistory();
}

function displayHistory() {
  //tbc
}

function displayForecastWeather(data) {
  //tbc
}

function displayCurrentWeather(city, data) {
  //tbc
  let date = data.dt_txt.split(" ") [0];
  console.log("date = ", date);
}

function displayWeather(city, data) {
  //tbc
  displayCurrentWeather(city, data.list[0]);
  displayForecastWeather(data.list);
}

function getWeather(data) {
  //tbc
  let {lat} = data.coord;
  let {lon} = data.coord;
  let city = data.name;

  let weatherUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${myapiKey}`;
  fetch(weatherUrl)
    .then(function (resp) {
      return resp.json();
    })
    .then(function (data) {
      console.log("data = ", data);
      displayWeather(city, data);
    })
    .catch(function (err) {
      console.error(err);
    });

}


function getLatLon(city) {
  console.log("city = ", city);

  let latLonUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${myapiKey}`;
  fetch(latLonUrl)
    .then(function (resp) {
      return resp.json();
    })
    .then(function (data) {
      console.log("data = ", data);
      console.log("data.coord = ", data.coord);
      getWeather(data);
    })
    .catch(function (err) {
      console.error(err);
    });
}

function searchWeatherhandler(evt) {
  if (!inputEl.val()) {
    return;
  }

  evt.preventDefault();

  let city = inputEl.val().trim();

  getLatLon(city);

  inputEl.val("");
}

initHistory();

formEl.on("submit", searchWeatherhandler);
