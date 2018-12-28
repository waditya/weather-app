
const yargs = require('yargs');
const axios = require('axios');

const argv = yargs
  .options({
    a: {
      demand: true,
      alias: 'address',
      describe: 'Address to fetch weather for',
      string: true
    }
  })
  .help()
  .alias('help', 'h')
  .argv;

  var encodedAddress = encodeURIComponent(argv.address);
  var geocodeUrl = `http://www.mapquestapi.com/geocoding/v1/address?key=n2etGj7JzROntcjCLmh6k6SvrzKrsnIr&location=${encodedAddress}`;

  axios.get(geocodeUrl).then((response) => {
        console.log(response.data);
        var latitude = response.data.results[0].locations[0].latLng.lat;
        var longitude = response.data.results[0].locations[0].latLng.lng;
        var weatherurl = `'https://api.darksky.net/forecast/330538c91033eb18e50204497823ab94/${latitude}, ${latitude}`;

        console.log(response.data.results[0].formatted);
        return(axios.get(weatherurl));
  }).then((response) => {
      var temperature = response.body.currently.temperature;
      var apparentTemperature = response.body.currently.apparentTemperature;
      console.log(`It's currently ${temperature}. It feels like ${apparentTemperature}.`);
  }).catch((e)=> {
    if(e.errno === "ENOTFOUND"){
      console.log('Unable to connect to the API server');
    }else{
      console.log(e.message);
    }
  });
