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

<<<<<<< HEAD
var apiKey = 

$(function() {
  $('#weatherLocation').click(function() {
    var city =$('#location').val();
    $('#location').val("");
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response) {
      console.log(response);
      $('.showWeather').text("The humidity in " + city + " is " + response.main.humidity + "%!");
    }).fail(function(error) {
      $('.showWeather').text(error.responseJSON.message);
    })
    });
  });
});
=======
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
>>>>>>> 082506554820d10720503dd2bb6ac9991b535bd0
