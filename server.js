const express = require("express");
const app = express();
const port = 5000;

app.get("/data", (request, response) => {
  const sampleDate = [{ id: "abc", name: "xyz" }];
  response.json(sampleDate);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
