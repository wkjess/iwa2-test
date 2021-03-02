const http = require('http');
const axios = require('axios');
const logger = require('morgan');
const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');

var app = express();
var port = 8000;

app.use(bodyParser.json())

app.get('/hello/:foo/:bar', (req, res) => {
    res.json({message: "Hello!!", data: [
        req.params.foo,
        res.params.bar
    ]});
});

//http.createServer((req, res)=>{
//  res.write(users.join(", ")); //display the list of users on the page
//  res.write("\n\n"+emails.join(", ")); //display the list of users on the page
//  res.end(); //end the response
//}).listen(8000); // listen for requests on port 8000

let users = []; // names of users will be stored here
let email = [];
(async function getNames(){
  try{
    const {data} = await axios.get("https://jsonplaceholder.typicode.com/users");
    users = data.map(user=>user.name);
    emails = data.map(email=>email.email);
    console.log(users);
    console.log(emails);
  } catch(error){
    console.log(error)
  }
})();

app.listen(port, function(err){
    console.log('Listening on port: ' + port);
});
