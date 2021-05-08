const express = require("express");
const app = express();
const port = 5000;

const data = require('./workouts40.min.json');

app.get("/data", (request, response) => {
  const sampleDate = data;
  response.json(sampleDate);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
