const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const dayjs = require("dayjs");

// defining the Express app
const app = express();

// defining an array to work as the database (temporary solution)
const ads = [
  {
    title: "Hello from ExpressDroneApp !",
    status: "OK",
    datedeployed: dayjs().format("DD/MM/YYYY hh:mm:ss"),
    message: "This app was deployed to K8S via Drone pipeline using Helm",
  },
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

app.get("/test", (req, res) => {
  res.send("Test ok : " + dayjs().format("DD/MM/YYYY hh:mm:ss"));
});

app.get("/users", (req, res) => {
  const users = [
    { id: 1, name: "Adam Smith", age: 33 },
    { id: 2, name: "Anna Doe", age: 29 },
    { id: 3, name: "Ted Catnip", age: 43 },
    { id: 4, name: "Mike Mortimer", age: 30 },
    { id: 5, name: "Alan Carrotcake", age: 38 },
  ];
  res.status(200).send(users);
});

// starting the server
app.listen(3001, () => {
  console.log("listening on port 3001");
});
