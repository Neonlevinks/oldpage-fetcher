const request = require('request');
const fs = require('fs');
const myArgs = process.argv.slice(2);
const input1 = myArgs[0];
const input2 = myArgs[1];

const writeFile = (fileName, body) => {
  if (!input2) {
    console.log("local file is invalid");
    break
  } else if (error != 200) {
    console.log("Website is invalid");
    break
  } else {
    fs.writeFile(fileName, body, function (err) {
    if (err) throw err;
    const stats = fs.statSync(input2);
    console.log(`Downloaded and saved ${stats.size} bytes to ./${fileName}`);
    });
  }
  
}

const fetchPage = (callback) => {
  request(`${input1}`, (error, response, body) => {
    console.log('error', error); //prints applicable error
     callback(input2, body);
  });
};



fetchPage(writeFile);