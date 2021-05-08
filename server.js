const express = require('express');
const app = express();
const port = 5000;

app.get('/', (request, response) => {
  const sampleDate = [{ id: 'abc'}];

  response.json(sampleDate); 

});



app.listen(port, () => console.log(`Listening on port ${port}`));