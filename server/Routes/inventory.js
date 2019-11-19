// imports
const express = require('express');
const router = express.Router();
const inventoryData = require('../Data/inventory.json');

router.use(express.json());


// inventory GET request
router.get('/',(request,response) => {
    response.send(inventoryData);
})

module.exports = router;