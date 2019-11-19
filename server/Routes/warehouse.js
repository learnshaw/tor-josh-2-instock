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
    const newID = locationData.length; 
    const newAddedLocation ={

        "id": `L${id}`,
        "name":request.body.name,
        "street":request.body.street,
        "suiteNum":request.body.suiteNum,
        "city":request.body.city,
        "province":request.body.province,
        "postal":request.body.postal,
        "inventoryCategories":request.body.inventoryCategories,
        "name":request.body.name,
        "title":request.body.title,
        "phone":request.body.phone,
        "email":request.body.email,
    }

    if (request.body.name && request.body.street && request.body.suiteNum && request.body.city && request.body.province && request.body.inventoryCategories && request.body.postal && request.body.name && request.body.title && request.body.phone && request.body.email){
        locationData.push(newAddedLocation)
        response.send(locationData)
    }
    else{
        return response.status(400).send('Data is Malformed or a Field is Missing');
    }

}))





