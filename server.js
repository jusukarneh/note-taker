const express = require('express');
const path = require('path')

const api = require('./routes/index.js');

const PORT = process.env.PORT ||3001

const app = express();

//client -> middleware (pre-processing before give to the server app.use() ->server
// Import custom middleware, "cLog"


// Middleware for parsing JSON and urlencoded form data
//data parser in app.use to parse client data to req.body (object client data object)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// middleware to modular api routes
// http://localhost:3001/api
app.use('/api', api);


// middleware to make public the homepage url http://localhost:3001 
app.use(express.static('public'));

// GET Route for homepage

// GET Route for feedback page 
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);




