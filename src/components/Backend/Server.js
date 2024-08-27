const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require('body-parser');
const { async } = require("q");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "VisitorManagementDB",
});

connection.connect((error) => {
  if (error) {
    console.error("Error connecting to database", error);
  } else {
    console.log("Connected to database");
  }
});

app.use(function (req, res, next) {
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

function sendMessage(message, phone) {
  const options = {
    to: ['+254105466110'] ,// phone,
    message: `${message}`,    
    //from: "MPESA",
  };
 sms.send(options).then((re)=>{
  console.log(re.SMSMessageData.Recipients);
 }
).catch(console.log);
}


sendMessage("Hi",["+254726837210"])

app.post("/SendSms", (req, res) => {
   sendMessage(req.body.message, req.body.phone);
});


app.post('/ussd', async (req, res) => {
  const { text, phoneNumber } = req.body; 
  console.log( { text, phoneNumber } );
  let response = '';
  if (text == '') {
    sendMessage(`Thank you for using INSURE SWIFT service`, phoneNumber);
    registerUser(phoneNumber)
    response = `CON Hello, it's INSURE SWIFT. Please select an option:    
    1. REGISTRATION STATUS
    2. APPLY FOR COVER
    3. WALLET
    4. MAKE CLAIM
    5. MAKE PAYMENT
    6. Press 0 to exit`;
  } else if (text == '1') {     
    response = `END ${await getDetails(phoneNumber)}`;  
     }
  else if (text == '2') {     
    response = `CON To apply for cover choose a type
    1. HEALTH
    2. MOTOR VEHICLE
    3. LIFE ASSURANCE
    4. Press 0 to exit`;       
  }
  else if (text == '2*2') { 
    sendMessage(`Thank you for applying for the MOTOR VEHICLE`, phoneNumber);
    response = `END Thank you for applying for the MOTOR VEHICLE`;  
     }
     else if (text == '2*3') { 
      sendMessage(`Thank you for applying for the LIFE ASSURANCE`, phoneNumber);
      response = `END Thank you for applying for the LIFE ASSURANCE`;  
       }
       else if (text == '2*1') { 
        sendMessage(`Thank you for applying for the HEALTH INSUARANCE`, phoneNumber);
        response = `END Thank you for applying for the HEALTH INSUARANCE`;  
         }
  else if (text == '3') {
    sendMessage(`${await getBalance(phoneNumber)}`, phoneNumber);
    response = `END ${await getBalance(phoneNumber)}`;  
  }
    
  else if (text == '4') {     
    response = `END Do you want to proceed and make a claim?`;       
  }
   else if (text == '0') {      
    response = `END Goodbye. Thank you for using INSURE SWIFT service.`;
  }  
  res.set('Content-Type', 'text/plain');
  res.send(response);
});
function registerUser(phoneNumber){
  let query=''
  return new Promise((resolve, reject) => {
    query = `insert into users (UserName,PhoneNumber,UserProfile,PledgeAmount,AmountPaid,visible) 
    values 
    ('UG HACKATHON','${phoneNumber}',1,0,0,1)`;
    connection.query(query, (err, results) => {
        if (err) {
          console.error('Error executing the SQL query:', err);
          console.log('Failed to fetch results');
          reject({ error: 'Failed to fetch results' });
          return; 
        }                     
      });}
  );
}
function getBalance(phoneNumber){
  let query=''
  return new Promise((resolve, reject) => {
    query = `SELECT Balance from balances WHERE AccountNumber = ${phoneNumber}`;
    connection.query(query, (err, results) => {
      if (err) {
        console.error('Error executing the SQL query:', err);
        console.log('Failed to fetch results');
        reject({ error: 'Failed to fetch results' });
        return; 
      }         
      const balance = results && results.length > 0 ? results[0].Balance : '';
      if(balance==''){
        const responseResults="Your balance is UGX 0.00 Thank you for using INSURE SWIFT";
        resolve(responseResults);
      }else{
        const responseResults = `You balance is UGX ${balance}.Thank you for using INSURE SWIFT`;
        sendMessage(`You balance is UGX ${balance}.Thank you for using INSURE SWIFT`, phoneNumber);
        resolve(responseResults);
      }
    }
    );
  }); 
}
function getDetails(phoneNumber) {
    let query=''
  return new Promise((resolve, reject) => {
    query = `SELECT UserName from users WHERE PhoneNumber = ${phoneNumber}`;
    connection.query(query, (err, results) => {
      if (err) {
        console.error('Error executing the SQL query:', err);
        console.log('Failed to fetch results');
        reject({ error: 'Failed to fetch results' });
        return; 
      }         
      const firstName = results && results.length > 0 ? results[0].UserName : '';
      if(firstName=="UG HACKATHON"){
        const responseResults="Sorry,you are not registered.Please Register to INSURE SWIFT";
        resolve(responseResults);
      }else {
        const responseResults = `Thank you ${firstName} ,you are a member of INSURE SWIFT`;
        resolve(responseResults);
      }
    }
    );
  });
}
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});