
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(function (req:any, res:any, next:any) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// Set your app credentials
const credentials = {
  apiKey: "3e76ad55d44fd317b7f761b32cc042195e27c1abc5d64d58c0a94a8cec32c206",
  username: "alexkemboi97",
};
// Initialize the SDK
const AfricasTalking = require("africastalking")(credentials);

// Get the SMS service
const sms = AfricasTalking.SMS;

export default async function sendMessage(message:any, phone:any) {
  const options = {
    to: phone,    
    message: `${message}`, 
  };  
  sms.send(options).then(
    console.log
   ).catch(console.log);
}

