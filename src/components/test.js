const request = require('request');


function getUsers(callback) { //add callback as an argument

request.get('https://jsonplaceholder.typicode.com/users', (err, response, body) => {

  // console.log('err:', err);
  // console.log('response:', response);
  // console.log('body:', body);
  let users = JSON.parse(body); //body needs to be parsed, if not the data will just be a string, not an object
  callback(users); //invoke the callback passing in the users variable 
  })
}

getUsers((theseareusers) => { //invoke a new function calling users
  console.log('users list:', theseareusers);
});