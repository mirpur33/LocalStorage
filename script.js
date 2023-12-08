let myapiKey = "92aa4fc0f53c0e96e588c41ac3e76efb";

let history = [];

let formEl = $("#search-form");

let inputEl = $("#search-input");

let todayEl = $("#today");

let forcastEl = $("#forecast");

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
  console.log("forecastEl = ", forcastEl);
  // forcastEl.classList.remove("hide");
  forcastEl[0].classList.remove("hide");

  let headingElem = document.getElementById("date1");
  let weatherIconElem = $('<img>');
  let tempElem = document.getElementById("temp1");
  let windElem = document.getElementById("wind1");
  let humidityElem = document.getElementById("humidity1");

  let date = data[0].dt_txt.split(" ")[0];
  console.log("date = ", date);

  let temp = data[0].main.temp;
  let wind = data[0].wind.speed;
  let humidity = data[0].main.humidity;

  console.log("headingElem = ", headingElem);
  headingElem.innerText=(date);
  tempElem.innerText=`Temp: ${temp}`;
  windElem.innerText=(wind);
  humidityElem.innerText=(humidity);

  headingElem = document.getElementById("date2");
  weatherIconElem = $('<img>');
  tempElem = document.getElementById("temp2");
  windElem = document.getElementById("wind2");
  humidityElem = document.getElementById("humidity2");

  date = data[0].dt_txt.split(" ")[0];
  console.log("date = ", date);

  temp = data[0].main.temp;
  wind = data[0].wind.speed;
  humidity = data[0].main.humidity;

  console.log("headingElem = ", headingElem);
  headingElem.innerText=(date);
  tempElem.innerText=`Temp: ${temp}`;
  windElem.innerText=(wind);
  humidityElem.innerText=(humidity);
 }

function displayCurrentWeather(city, data) {
  //tbc
  let date = data.dt_txt.split(" ")[0];
  console.log("date = ", date);

  let temp = data.main.temp;
  let wind = data.wind.speed;
  let humidity = data.main.humidity;

  console.log("temp = ", temp);
  console.log("wind = ", wind);
  console.log("humidity = ", humidity);

  let icon =
    "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
  let iconDescr = data.weather[0].description || data[0].main;

  console.log("icon = ", icon);
  console.log("iconDescr = ", iconDescr);

  let cardElem = $('<div>');
  let cardBodyElem = $('<div>');
  let headingElem = $('<h2>');
  let weatherIconElem = $('<img>');
  let tempElem = $('<p>');
  let windElem = $('<p>');
  let humidityElem = $('<p>');

  headingElem.text(city + ' (' + date + ')');
  weatherIconElem.attr('src', icon);
  weatherIconElem.attr('alt', iconDescr);
  headingElem.append(weatherIconElem);

  tempElem.text('Temp: ' + temp + ' °C');
  windElem.text('Wind: ' + wind + ' KPH');
  humidityElem.text('Humidity: ' + humidity + '%');
  cardBodyElem.append(headingElem, tempElem, windElem, humidityElem);
  cardElem.append(cardBodyElem);

  todayEl.html('');
  console.log("cardElem = ", cardElem);
  todayEl.append(cardElem);

}

function displayWeather(city, data) {
  //tbc
  displayCurrentWeather(city, data.list[0]);
  displayForecastWeather(data.list);
}

function getWeather(data) {
  //tbc
  let { lat } = data.coord;
  let { lon } = data.coord;
  let city = data.name;

  let weatherUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${myapiKey}&units=metric`;
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
