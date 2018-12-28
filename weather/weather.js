const request = require('request');

var getWeather = (latitude, longitude, callback) => {
  request({ url:`https://api.darksky.net/forecast/<<UserKey>>/${latitude}, ${latitude}`,
  json: true},
  (error, response, body) => {
    if(!error && response.statusCode === 200){
      callback(undefined, {
        temperature :  response.body.currently.temperature ,
        apparentTemperature:  response.body.currently.apparentTemperature,
        humidity:  response.body.currently.humidity
      });
    } else{
      callback('Unable to fetch weather');
    }
  });
}

module.exports = {
  getWeather
}
