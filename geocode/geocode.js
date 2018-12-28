const request = require('request');

const geocodeAddress = (address, callback) => {
  var encodedAddress = encodeURIComponent(address);
  request({
    url: `http://www.mapquestapi.com/geocoding/v1/address?key=<<key>>&location=${encodedAddress}`,
    json: true
  }, (error, response, body) => {
      if(error){
        callback('Unable to reach the server');
      }else if (body.info.statuscode === 400) {
        callback('Error with Input');
      }else if(body.info.statuscode === 0){
        callback(undefined, {
          address:address,
          latitude: body.results[0].locations[0].latLng.lat,
          longitude: body.results[0].locations[0].latLng.lng
        });
      }
  });
};

module.exports = {
  geocodeAddress
}
