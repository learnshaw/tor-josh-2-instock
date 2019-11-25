import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Warehousesdetails from './components/Warehousesdetails/Warehousesdetails';
import InventoryList from './components/InventoryAllPage/index';
import Warehouses from './components/Warehouses/Warehouses'
import Inventorydetails from './components/Inventorydetails/Inventorydetails'


class App extends React.Component {

  render(){
    return(      <div className="App">
       <BrowserRouter>
       <Navigation/>
       {/* <Inventorydetails/> */}
        <Switch>
         <Route path="/" exact component={Warehouses}></Route>
         <Route path="/inventory/:id" exact component={Inventorydetails}></Route>
         <Route path="/warehouses" exact component={Warehouses}></Route>
         <Route path="/warehouses/:id" component={Warehousesdetails}></Route> 
         <Route path="/inventory" component={InventoryList}></Route>
        </Switch>
       </BrowserRouter>
      </div>
    )
  }
}
export default App;
