// imports
const express = require('express');
const router = express.Router();
const inventoryData = require('../Data/inventory.json');

router.use(express.json());


// inventory GET request
router.get('/',(request,response) => {
    response.send(inventoryData);
})


router.delete('/:id',(request,response)=>{
    if (request.params.id){
      const inventoryList=inventoryData.filter(item=>item.id!==request.params.id)
      response.send(inventoryList)
      }else{
       response.status(400)
      }
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

    // IF stt adjusted by Sahiba
    if (request.body.name && request.body.quantity && request.body.lastOrdered && request.body.location){ 

        inventoryData.push(newAddedItem);
        response.send(inventoryData);
    } else { 
        return response.status(400).send('Cannot Process Order With Empty Fields');
    }
    // Removed by Sahiba
    // response.send(newAddedItem);
});

module.exports = router;

