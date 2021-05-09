const express = require("express");
const app = express();
const port = 5000;

const workouts = require("./workouts40.json");

app.get("/data/:index", (request, response) => {
  console.log(request.params.index);

  const index = Number(request.params.index);
  const entriesPerPage = 20;
  const sumOfAllFrontendPages = workouts.length / entriesPerPage;

  var indexOfFirstWorkoutToSend;
  if (index === 1) {
    indexOfFirstWorkoutToSend = 0;
  } else {
    indexOfFirstWorkoutToSend = index - 1 + index * 20;
  }

  var indexOfLastWorkoutToSend;
  if (Number(index) === 1) {
    indexOfLastWorkoutToSend = 20;
  } else {
    indexOfLastWorkoutToSend = index - 2 + index * 20;
  }

  console.log("Index first", indexOfFirstWorkoutToSend);
  console.log("Index last", indexOfLastWorkoutToSend);
  
  const workoutsToSend = workouts.slice(indexOfFirstWorkoutToSend, indexOfLastWorkoutToSend);

  response.json({
    workouts: workoutsToSend,
    sumOfPages: sumOfAllFrontendPages
  });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
