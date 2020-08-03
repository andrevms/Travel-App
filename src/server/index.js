
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
    console.log("Entrando aqui")
    try {
        const data = await fetch(`http://api.geonames.org/postalCodeSearch?placename=${req.query.city}
                    &username=${process.env.GEONAMES_USER}`)
    }catch (e){
        console.log(e);
    }
    console.log("Passou aqui")
    return data;
})
