const express = require("express");
const app = express();
const addDays = require("date-fns/addDays");

app.get("/", (request, response) => {
  let today = new Date();
  let newDate = addDays(
    (newDate.getFullYear(), newDate.getMonth() + 1, newDate.getDate()),
    100
  );
  response.send(
    `${newDate.getDate()}\${newDate.getMonth()+1}\${newDate.getFullYear()}`
  );
});

module.exports = app;
