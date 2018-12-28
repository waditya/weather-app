const request = require('request');

var geocodeAddress = (address) => {
  return new Promise((resolve, reject)=> {
    var encodedAddress = encodeURIComponent(address);
    request({
      url: `http://www.mapquestapi.com/geocoding/v1/address?key=n2etGj7JzROntcjCLmh6k6SvrzKrsnIr&location=${encodedAddress}`,
      json: true
    }, (error, response, body) => {

        if(error){
          reject('Unable to reach the server');
        }else if (body.info.statuscode === 400) {
          reject('Error with Input');
        }else if(body.info.statuscode === 0){
          resolve({
            address:address,
            latitude: body.results[0].locations[0].latLng.lat,
            longitude: body.results[0].locations[0].latLng.lng
          });
        }
    });
  })
};

geocodeAddress('411044').then((location) => {
  console.log(JSON.stringify(location, undefined, 2));
}, (errorMessage)=> {
  console.log(errorMessage);
});
