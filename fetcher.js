let requestArgs = process.argv.slice(2);
const request = require('request');
const fs = require('fs');
//console.log(requestArgs);

request(requestArgs[0], (error, response, body) => {
  
  fs.writeFile(requestArgs[1], body, (error) => {
    if(error) {
      console.log("Oops. Try again.");
    }
    if(fs.exists(`./${requestArgs[1]}`)) {
      console.log("File already exists. Please choose another.")
      return
    }
    var stats = fs.statSync(requestArgs[1]);
    console.log(`Downloaded and saved ${body.length} bytes to ${requestArgs[1]}`)
  
  });  
});
console.log('hello');

//Downloaded and saved >>>> bytes to ./index.html


//if statuscode === 4** then don't do the thing.