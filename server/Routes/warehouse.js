// setting up server
const express = require("express");
const router = express.Router();
module.exports = router;

// middleware
router.use(express.json());

// bringing in thr data from locations.json file
let locationData = require("../Data/locations.json");
let inventoryData = require("../Data/inventory.json");

// GET request
router.get("/",(request,response) => {
    response.send(locationData);

})

// GET WareHouse inventory

router.get("/:id",(request,response)=>{
    console.log(request.params.id);
    

    const findInv = inventoryData.filter(item=>{
        console.log(item.warehouseId);
        
        return request.params.id == item.warehouseId
    })


    if(findInv){
        response.send(findInv)
    }else{ response.status(404).send("no inventory")}


  

   
})





