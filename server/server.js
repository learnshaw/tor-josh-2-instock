// setting up server
const express = require("express");
const app = express();
const cors = require("cors");

// middleware
app.use(cors());
app.use(express.json());

// setting server to start
app.listen(8080, () => {
    console.log("server is ready");
})

// GET request for warehouses' data
const warehousesRoute = require("./Routes/warehouse.js");
app.use("/warehouses", warehousesRoute);

// inventory route for receiving all inventory data

const inventoryRoute = require('./Routes/inventory.js')
app.use("/inventory", inventoryRoute);
