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
module.exports = router;