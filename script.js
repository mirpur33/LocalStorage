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

function getLatLon(city) {
    console.log ("city = ", city);

}

function searchWeatherhandler(evt) {
    if (inputEl.val()) {
        return;
    }

    evt.preventDefault();

    let city = inputEl.val().trim();

    getLatLon(city);

    inputEl.val("");
}

initHistory();

formEl.on("submit", searchWeatherhandler);

