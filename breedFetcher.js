const {API_QUERY,} = require('./constants');
const request = require('request');
const inputQuery = process.argv.slice(2);

request(API_QUERY + inputQuery, (error, body) => {
  const data = JSON.parse(body)[0];
 
  switch (data) {
  case error:
    console.log(error);
    break;
  case undefined:
    console.log(`Breed ${inputQuery} not found!`);
    break;
  default:
    console.log(`Your search result: \n` + data.description);
  }
});
