// let myapiKey = "92aa4fc0f53c0e96e588c41ac3e76efb";

// Get references to HTML elements using their IDs
var searchInputEl = document.getElementById("search-input");
var searchButtonEl = document.getElementById("search-button");
var cityNameEl = document.getElementById("cityname");
var cityHistoryEl = document.getElementById("city-history")

// TUTOR SESSION: Tutor, suggested and use the new idea to handle the weather dashboard... 

var indexs = [0,7,15,23,31,39];
// Set up arrays of references to HTML elements
var cityDayEl = [
  document.getElementById("cityday"),
  document.getElementById("cityday1"),
  document.getElementById("cityday2"),
  document.getElementById("cityday3"),
  document.getElementById("cityday4"),
  document.getElementById("cityday5"),
];

var tempEls = [
  document.getElementById("temp"), 
  document.getElementById("temp1"),
  document.getElementById("temp2"),
  document.getElementById("temp3"),
  document.getElementById("temp4"),
  document.getElementById("temp5"),
];

var humidEls = [
  document.getElementById("humid"), 
  document.getElementById("humid1"),
  document.getElementById("humid2"),
  document.getElementById("humid3"),
  document.getElementById("humid4"),
  document.getElementById("humid5")
];

var windEls = [
  document.getElementById("wind"), 
  document.getElementById("wind1"),
  document.getElementById("wind2"),
  document.getElementById("wind3"),
  document.getElementById("wind4"),
  document.getElementById("wind5")
];

var weatherIconEls = [
  document.getElementById("weather-icon"),
  document.getElementById("weather-icon1"),
  document.getElementById("weather-icon2"),
  document.getElementById("weather-icon3"),
  document.getElementById("weather-icon4"),
  document.getElementById("weather-icon5")
];
