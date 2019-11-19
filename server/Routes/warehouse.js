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
            "street":request.body.address.street,
            "suiteNum":request.body.address.suiteNum,
            "city":request.body.address.city,
            "province":request.body.address.province,
            "postal":request.body.address.postal
            },
        "inventoryCategories":request.body.inventoryCategories,
        "contact": {
            "name":request.body.contact.name,
            "title":request.body.contact.title,
            "phone":request.body.contact.phone,
            "email":request.body.contact.email
        }
    }

    if (request.body.name && request.body.address.street && request.body.address.suiteNum && request.body.address.city && request.body.address.province && request.body.inventoryCategories && request.body.address.postal && request.body.contact.name && request.body.contact.title && request.body.contact.phone && request.body.contact.email){
        locationData.push(newAddedLocation)
        response.send(newAddedLocation)
    }
    else{
        return response.status(400).send('Data is Malformed or a Field is Missing');
    }

}))





