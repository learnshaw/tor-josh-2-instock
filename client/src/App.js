import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import InventoryModal from './components/InventoryModal/InventoryModal.js';
import Navigation from './components/Navigation/Navigation';
import Warehouses from './components/Warehouses/Warehouses';

class App extends React.Component {

  render(){
    return(
      <div className="App">
       <BrowserRouter>
       <Navigation/>
        <Switch>
         <Route path="/" exact component={Warehouses}></Route>
         <Route path="/warehouses" component={Warehouses}></Route>
         {/* <Route path="/warehouses/:id" exact component={Warehousesdetails}></Route> */}
         {/* <Route path="/inventory" component={Inventory}></Route>
         <Route path="/inventory/:id" exact component={Inventorydetails}></Route> */}
        </Switch>
       </BrowserRouter>
      </div>
    )
  }
}
export default App;
