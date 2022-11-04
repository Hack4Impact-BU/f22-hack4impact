//this represent the app & from where we are importing
// import express
const express = require('express');
const app = express();
const PORT = 8080;

// this is how you fire up your server, it is to listen to the specific port
app.listen(PORT, () => console.log(`'It's alive on http://localhost:${PORT}`));

// this is a middleware
app.use(express.json());

// add endpoint to api
// get http://localhost:8080/tshirt
// then pass in callback function as second argument
// it will run the function when the route is requested
// pass in request, and response data (incoming and outgoing data)
app.get('/tshirt', (req, res) => {
  res.status(200).send({
    tshirt: '👕',
    size: 'large',
  });
});

//second end point - capture dynamic values in the URL
// when creating post request, it means creating new data
app.post('tshirt/:id', (req, res) => {
  const {id} = req.params;
  const {logo} = req.body;

  // check that we have the logo
  if (!logo) {
    res.status(404).send({message: 'We need a logo!'});
  }

  // if we do have a valid logo
  res.send({
    tshirt: `👕 with your ${logo} and ID of ${id}`,
  });
});
