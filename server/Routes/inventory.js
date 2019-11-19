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
        if(findID) {
            return (response.send(findID)); 
        } else { 
            return response.status(404).send('ID Not Found');
        }
});

// post new inventory item

router.post('/', (request, response) => {
    const newID = inventoryData.length; 
    console.log();

    const newAddedItem = {
        "id": `I${newID}`,
        "name": request.body.name,
        "description": request.body.description,
        "quantity": request.body.quantity,
        "lastOrdered": request.body.lastOrdered,
        "location": request.body.location,
        "isInstock": request.body.isInstock,
        // will have to change isInstock once we have the switch installed
        "categories": request.body.categories,
        "warehouseId": request.body.warehouseId
    }
    
    if (request.body.name && request.body.description && request.body.quantity && request.body.lastOrdered && request.body.location && request.body.isInstock && request.body.categories && request.body.warehouseId){ 

        inventoryData.push(newAddedItem);
        response.send(inventoryData);
    } else { 
        return response.status(400).send('Cannot Process Order With Empty Fields');
    }
    
    response.send(newAddedItem);
});

module.exports = router;
