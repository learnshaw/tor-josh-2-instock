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
    
    

    const findInv = inventoryData.filter(item=>{
       
        
        return request.params.id == item.warehouseId
    })


    if(findInv){
        response.send(findInv)
    }else{ response.status(404).send("no inventory")} 

   
})

router.post ('/', ((request,  response)=>{
    
    const newID = locationData.length; 
    const newAddedLocation ={

        "id": `L${newID}`,
        "name":request.body.name,
        "address": {
            "street":request.body.address,
            "suiteNum":"101",
            "city":request.body.location,
            "province":"Ontario",
            "postal":"M5A 8S9"
            },
        "Categories":request.body.Categories,
        "contact": {
            "name":request.body.contact,
            "title":request.body.position,
            "phone":request.body.phone,
            "email":request.body.email
        }
    }

    if (request.body.name && 
        request.body.address && 
        request.body.location && request.body.inventoryCategories && 
        request.body.contact && 
        request.body.title && 
        request.body.phone && 
        request.body.email){
        locationData.push(newAddedLocation)
        response.send(newAddedLocation)
    }
    else{
        return response.status(400).send('Data is Malformed or a Field is Missing');
    }

}))





