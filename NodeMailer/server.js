const nodemailer = require("nodemailer");

const sender = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "chelladuraipreetha@gmail.com",
    pass: "epbz yhmh jnbs gmbr",
  },
});

const details = {
  from: "chelladuraipreetha@gmail.com",
  to: "sdhinesh140@gmail.com",
  subject: "nodemailer",
  text: "nodemailer file"
};

sender.sendMail(details, (err) => {
  if (err) {
    console.log("error", err);
  } else {
    console.log("email sent...!");
  }
});
