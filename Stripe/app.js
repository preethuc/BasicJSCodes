const express = require("express");
const stripe = require("stripe")(
  "sk_test_51M6q92KBnabCo49phVpzbFnrlCBqrtvjLVZCvDshfccJzwzudhTg9PqVq98kWKps3Ui0k7GUtWa9Z564St9x2XXX00SYuvsTTX"
);
const app = express();

//CREATE CUSTOMER
let createCustomer = () => {
  let param = {};
  param.email = "abi@gmail.com";
  param.name = "Abi";
  param.description = "stripe acc from node";

  stripe.customers.create(param, (err, customer) => {
    if (err) {
      console.log("error : " + err);
    }
    if (customer) {
      console.log(customer);
    } else {
      console.log("something went wrong");
    }
  });
};
// createCustomer();

//GET THE CUSTOMER BY ID
let retrieveCustomer = () => {
  stripe.customers.retrieve("cus_MqY9NMwffByTOU", (err, customer) => {
    if (err) {
      console.log("error : " + err);
    }
    if (customer) {
      console.log(customer);
    } else {
      console.log("something went wrong");
    }
  });
};
// retrieveCustomer();

//CREATE TOKEN - CARD DETAILS
let createToken = () => {
  let param = {};
  param.card = {
    number: "4242424242424242",
    exp_month: 5,
    exp_year: 2026,
    cvc: "212",
  };
  stripe.tokens.create(param, (err, token) => {
    if (err) {
      console.log(err);
    }
    if (token) {
      console.log(token);
    } else {
      console.log("something went wrong");
    }
  });
};
// createToken()

//ADD TOKEN(CARD DETAILS) TO CUSTOMER
let customersCard = () => {
  stripe.customers.createSource(
    "cus_MqY9NMwffByTOU",
    { source: "tok_1M6t0uKBnabCo49pfF5cBcAI" },
    (err, card) => {
      if (err) {
        console.log(err);
      }
      if (card) {
        console.log(card);
      } else {
        console.log("something went wrong");
      }
    }
  );
};
// customersCard()

//PAYMENT BY ID
let paymentIntentById = () => {
  let param = {
    amount: 100,
    currency: "usd",
    description: "first payment",
    customer: "cus_MqY9NMwffByTOU",
  };
  stripe.paymentIntents.create(param, (err, payment) => {
    if (err) {
      console.log(err);
    }
    if (payment) {
      console.log(payment);
    } else {
      console.log("something went wrong");
    }
  });
};
// paymentIntentById()

//PAYMENT BY TOKEN
let paymentIntentByToken = () => {
  let param = {
    amount: 100,
    currency: "usd",
    description: "token payment",
    // customer: "cus_MqY9NMwffByTOU",

    token: "tok_1M7BlFKBnabCo49pYSVjWa11",
  };
  stripe.paymentIntents.create(param, (err, payment) => {
    if (err) {
      console.log(err);
    }
    if (payment) {
      console.log(payment);
    } else {
      console.log("something went wrong");
    }
  });
};
// paymentIntentByToken()

app.listen(3000, () => {
  console.log("server running on 3000");
});
