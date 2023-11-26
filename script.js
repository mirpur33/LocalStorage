let myapiKey = "29c1a7e7a33d36b071d80aa75f16b7bb0";

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

function getWeather(data) {
     //tbc
}

function getLatLon(city) {
    console.log ("city = ", city);

    let latLonUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${myapiKey}`;
    fetch(latLonUrl) 

    .then (function (resp) {
        return resp.json();
    })
    .then(function (data) {
        if (!data[0]) {
            alert("city not found");
        } else {
            console.log("data = ", data);
            getWeather(data[0]);
        }
    })
    .catch(function (err) {
        console.error(err)
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

