const express = require('express');
const app = express();

/**
 * app - express app to register this route handler with
 * get - watch for incoming requests with this method
 * '/' - watch for requests trying to access '/'
 * req - object representing the incoming request
 * res - object representing the outgoing response
 * res.send({hi: 'there'})
 *   - immediately send some JSON back to who ever
 *     made this request
**/
app.get('/', (req, res) => {
  res.send({hi: 'there'});
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, 
  () => console.log('Server running: "localhost:5000"'));
