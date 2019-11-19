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

router.post ('/', (request,  response=>{
    const newAddedLocation ={

        "warehouse":request.body.warehouse,
        "address":request.body.address,
        "contact name":request.body.contact name,
        "phone number":request.body.phone number,
        "categories":request.body.categories,
        "location":request.body.location,
        "position":request.body.position,
        "email":request.body.email,
    }

    if (request.body.warehouse && request.body.address && request.body.address && request.body.contactname && request.body.phonenumber && request.body.categories && request.body.location && request.body.position && request.body.email){
        locationData.push(newAddedLocation)
        response.send(locationData)
    }
    else{
        return response.status(400).send('Data is Malformed or a Field is Missing');
    }

}))





