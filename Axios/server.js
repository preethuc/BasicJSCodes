const express = require("express");
const axios = require("axios");
const app = express();

app.listen(3000, () => {
  console.log("server running on the port 3000");
});

app.get("/", (req, res) => {
  res.send("datas fetched successfully");
});

axios
  .get("https://reqres.in/api/users/3")
  .then((result) => {
    console.log(result.data);
  })
  .catch((error) => {
    console.log(error);
  });
