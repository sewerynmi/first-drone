const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const dayjs = require('dayjs')

// defining the Express app
const app = express();

// defining an array to work as the database (temporary solution)
const ads = [
  { 
    title: "Hello from ExpressDroneApp !", 
    status: "OK", 
    datedeployed: dayjs().format('DD/MM/YYYY hh:mm:ss'),
    message: "This app was deployed to K8S via Drone pipeline using Helm"
  }
  ];

// adding Helmet to enhance your API's security
app.use(helmet());

// using bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json());

// enabling CORS for all requests
app.use(cors());

// adding morgan to log HTTP requests
app.use(morgan("combined"));

// defining an endpoint to return all ads
app.get("/", (req, res) => {
  res.send(ads);
});

// defining an endpoint to return all ads
app.get("/test", (req, res) => {
  res.send("Test ok : " + dayjs().format('DD/MM/YYYY hh:mm:ss') );
});

// starting the server
app.listen(3001, () => {
  console.log("listening on port 3001");
});
