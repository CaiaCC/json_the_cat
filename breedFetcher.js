const request = require('request');
const { QUERY } = require("./constants");

const fetchBreedDescription = (breed, callback) => {
  if (!breed) {
    callback(`You didn't enter any breed...`, null);
  }

  request(QUERY + breed, (err, res, body) => {
    if (err) {
      callback(err, null);
    }

    const data = JSON.parse(body)[0];

    if (data) {
      callback(null, data.description);
    } else {
      callback(`Breed '${breed}' not found.`, null);
    }
  });
};

module.exports = { fetchBreedDescription }