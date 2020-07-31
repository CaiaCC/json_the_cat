const {API_QUERY,} = require('./constants');
const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  if (!breedName) {
    return callback('You didn\'t input any breed...', null);
  }

  request(API_QUERY + breedName, (error, response, body) => {
    let data = JSON.parse(body)[0];
    if (error) {
      return callback(error, null);
    } else if (data === undefined) {
      return callback('Breed not found!', null);
    } else if (data) {
      return callback(null, data.description);
    }
  });
};


module.exports = {fetchBreedDescription};