const express = require("express");
const app = express();
const port = 5000;

const data = require('./workouts40.json');

app.get("/data/:index", (request, response) => {
  console.log(request.params.index)
  const sampleDate = data;
  response.json(sampleDate);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
