// setting up server
const express = require("express");
const router = express.Router();
module.exports = router;

// middleware
router.use(express.json());

// bringing in thr data from locations.json file
let locationData = require("../Data/locations.json");

// GET request
router.get("/",(request,response) => {
    response.send(locationData);
})