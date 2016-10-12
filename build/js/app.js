(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "1e606e9a8ff6190e7e85bf2ff1aa63e2"

},{}],2:[function(require,module,exports){
function Entry(title, body) {
  this.title = title;
  this.body = body;
}

Entry.prototype.words = function() {
  var wordArray = this.body.split(" ");
  return wordArray.length;
};

Entry.prototype.vowels = function() {
  var vowels = this.body.match(/[aeiouAEIOU]/g);
  return vowels.length;
};

Entry.prototype.consonants = function() {
  var consonants = this.body.match(/[^aeiouAEIOU\s\d\W\_]/g);
  return consonants.length;
};

exports.entryModule = Entry;

},{}],3:[function(require,module,exports){
var apiKey = require('./../.env').apiKey;

Weather = function(){
}

Weather.prototype.getWeather = function(city) {
  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response){
    $('.showWeather').text("The humidity in " + city + " is " + response.main.humidity + "%");
  }).fail(function(error){
    $('.showWeather').text(error.responseJSON.message);
  });
}

exports.weatherModule = Weather;

//CALLBACK FUNCTION
// var apiKey = require('./../.env').apiKey;
//
// Weather = function(){
// }
//
// Weather.prototype.getWeather = function(city, displayFunction) {
//   $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response){
//     displayFunction(city, response.main.humidity);
//   }).fail(function(error){
//     $('.showWeather').text(error.responseJSON.message);
//   });
// }
//
// exports.weatherModule = Weather;

},{"./../.env":1}],4:[function(require,module,exports){
var Entry = require('./../js/entry.js').entryModule;

$(document).ready(function() {
  var newEntry;
  $("#entry").submit(function(event) {
    event.preventDefault();
    var title = $("#title").val();
    var body = $("#body").val();
    newEntry = new Entry(title, body);
    $("#display").show();
    $("#time").text(moment());
    $("#display-title").text(title);
    $("#display-body").text(body);
  });
  $("#words").click(function() {
    var words = newEntry.words();
    $("#count").text("There are " + words + " words in this entry.");
  });
  $("#vowels").click(function() {
    var vowels = newEntry.vowels();
    $("#count").text("There are " + vowels + " vowels in this entry.");
  });
  $("#consonants").click(function() {
    event.preventDefault();
    var consonants = newEntry.consonants();
    $("#count").text("There are " + consonants + " consonants in this entry.");
  });
});

var Weather = require('./../js/weather.js').weatherModule;

$(document).ready(function(){
  var currentWeatherObject = new Weather();
  $('#weatherLocation').click(function(){
    var city = $('#location').val();
    $('#location').val("");
    currentWeatherObject.getWeather(city);
  });
});

//CALLBACK FUNCTION
// var Weather = require('./../js/weather.js').weatherModule;
//
// var displayHumidity = function(city, humdityData) {
//   $('.showWeather').text("The humidity in " + city + " is " + humidityData + "%");
// }
//
// $(document).ready(function(){
//   var currentWeatherObject = new Weather();
//   $('#weatherLocation').click(function(){
//     var city = $('#location').val();
//     $('#location').val("");
//     currentWeatherObject.getWeather(city, displayHumidity);
//   });
// });

},{"./../js/entry.js":2,"./../js/weather.js":3}]},{},[4]);
