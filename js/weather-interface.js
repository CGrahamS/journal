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
