import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import InventoryModal from './components/InventoryModal/InventoryModal.js';
import Navigation from './components/Navigation/Navigation';

class App extends React.Component {

  render(){
    return(
      <div className="App">
       <BrowserRouter>
       <Navigation/>
       <h1>hello world</h1>
       <h1>hello world</h1>
       <h1>hello world</h1>
       <h1>hello world</h1>
       <h1>hello world</h1>
       <h1>hello world</h1>
       <h1>hello world</h1>
       <h1>hello world</h1>
       <h1>hello world</h1>
       <h1>hello world</h1>
       <h1>hello world</h1>
       <h1>hello world</h1>
       <h1>hello world</h1>
       <h1>hello world</h1>
       <h1>hello world</h1>
       <h1>hello world</h1>
       <h1>hello world</h1>
       <h1>hello world</h1>
       <h1>hello world</h1>
       <h1>hello world</h1>
       <h1>hello world</h1>
       <h1>hello world</h1>
       <h1>hello world</h1>
       <h1>hello world</h1>
       <h1>hello world</h1>
       <h1>hello world</h1>
       <h1>hello world</h1>
       <h1>hello world</h1>
       <h1>hello world</h1>
       <h1>hello world</h1>
       <h1>hello world</h1>
       <h1>hello world</h1>
       <h1>hello world</h1>
       <h1>hello world</h1>
       <h1>hello world</h1>
       <h1>hello world</h1>
       <h1>hello world</h1>
       <h1>hello world</h1>
       <h1>hello world</h1>
       <h1>hello world</h1>
       <h1>hello world</h1>
       <h1>hello world</h1>
       <InventoryModal></InventoryModal>
        {/* <Switch>
         <Route path="/" exact component={Warehouses}></Route>
         <Route path="/warehouses" component={Warehouses}></Route>
         <Route path="/inventory" component={Inventory}></Route>
         <Route path="/warehouses/:id" exact component={Warehousesdetails}></Route>
         <Route path="/inventory/:id" exact component={Inventorydetails}></Route>
        </Switch> */}
       </BrowserRouter>
      </div>
    )
  }
}
export default App;
