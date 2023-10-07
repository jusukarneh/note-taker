const express = require('express');
const path = require('path')

const api = require('./routes/index.js');

const PORT = process.env.PORT 

const app = express();

//client -> middleware (pre-processing before give to the server app.use() ->server
// Import custom middleware, 




// middleware to make public the homepage url http://localhost:3001 
app.use(express.static("public"));

//data parser in app.use to parse client data to req.body (object client data object)
app.use(express.urlencoded({extended: true }));
app.use(express.json());

// middleware to modular api routes
// http://localhost:3001/api
app.use('/api',api);

