// Requirements
const express = require('express');
const path = require('path');
const log = require('winston');
const bodyParser = require('body-parser');

// Start the app
const app = express();

// Express configuration
app.disable('x-powered-by');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Serve static
app.use(express.static(__dirname));

app.listen(process.env.PORT || 3000);
