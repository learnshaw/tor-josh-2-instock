// imports
const express = require('express');
const router = express.Router();
const inventoryData = require('../Data/inventory.json');

router.use(express.json());


// inventory GET request
router.get('/',(request,response) => {
    response.send(inventoryData);
})

// added by Lindsay 
// get inventory item

router.get('/:id', (request, response) => {
    const findID = inventoryData.find(IDData => {
        return request.params.id === IDData.id
    })
    response.send(findID); 
});

// post new inventory item

router.post('/', (request, response) => {
    const newID = inventoryData.length; 
    console.log();

    const newAddedItem = {
        "id": `I${newID}`,
        "name": "",
        "description": "",
        "quantity": "",
        "lastOrdered": "",
        "location": "",
        "isInstock": "",
        "categories": "",
        "warehouseId": ""
    }
    
    inventoryData.push(newAddedItem);

    response.send(newAddedItem);
});

module.exports = router;
