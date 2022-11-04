// Importing packages
const cron = require("node-cron");
const express = require("express");
const nodemailer = require("nodemailer");
  
app = express();
  
// Calling sendEmail() function every 1 minute
cron.schedule("*/1 * * * *", function() {
sendMail();
});
  
// Send Mail function using Nodemailer
function sendMail() {
    let mailTransporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "chelladuraipreetha@gmail.com",
            pass: "epbz yhmh jnbs gmbr",
          },
        
    });
      
    // Setting credentials
    let mailDetails = {
        from: "chelladuraipreetha@gmail.com",
  to: "meltonmeni619@gmail.com",
  subject: "nodemailer",
  text: " lsu kiruki panni naiii"
    };
      
      
    // Sending Email
    mailTransporter.sendMail(mailDetails, 
                    function(err, data) {
        if (err) {
            console.log("Error Occurs", err);
        } else {
            console.log("Email sent successfully");
        }
    });
}
  
app.listen(3000);
