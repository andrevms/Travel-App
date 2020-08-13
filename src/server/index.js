
// Setup empty JS object to act as endpoint for all routes
let projectData = [];

// Express to run server and routes
const express = require('express')

// Start up an instance of app
const app = express();

/* Dependencies */
var path = require('path')
const bodyParser = require('body-parser');
const cors = require('cors');
const { url } = require('inspector');
const { Console } = require('console');
var async  = require('express-async-await')
var fetch = require('node-fetch')

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(cors());

// Initialize the main project folder
app.use(express.static('dist'))

// Setup Server
app.listen(process.env.APP_PORT || 3000, () => {
    console.log(`Server up => Try ${process.env.APP_PORT}`)
})
// :::::: Routes ::::::

// Init Route
app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

app.post('/form', function (req, res) {
    res.send('Got a POST request')
})


//formHandler
app.get('/geonames', async (req, res) => {
    try {
        const data = await fetch(`http://api.geonames.org/postalCodeSearchJSON?placename=${req.query.city}&country=${req.query.country}&username=${process.env.GEONAMES_USER}`);
        const err = await data.json();
        res.send(err);
    }catch (e){
        console.log(e);
        res.send(e);
    }
})

app.get('/weather', async (req, res) => {
    try{
        const data = await fetch(`https://api.weatherbit.io/v2.0/forecast/daily?&lat=${req.query.lat}&lon=${req.query.lon}&key=${process.env.WEATHERBIT_KEY}`)
        const err = await data.json();
        res.send(err);
    }catch (e){
        console.log(e);
        res.send(e);
    }
})

app.get('/pixabay', async (req, res) => {
    try {
        const data = await fetch(`https://pixabay.com/api/?key=${process.env.PIXABAY_KEY}&q=${req.query.local}`);
        const err = await data.json();
        res.send(err);
    }catch (e){
        console.log(e);
        res.send(e);
    }
})