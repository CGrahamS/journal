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
