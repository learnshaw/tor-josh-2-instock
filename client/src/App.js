import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import InventoryList from './components/InventoryAllPage';
import Warehouses from './components/Warehouses/Warehouses'


class App extends React.Component {

  render(){
    return(
      <div className="App">
       <BrowserRouter>
       <Navigation/>
        <Switch>
         <Route path="/" exact component={Warehouses}></Route>
         <Route path="/warehouses" exact component={Warehouses}></Route>
         <Route path="/warehouses/:id" component={Warehousesdetails}></Route>
         <Route path="/inventory" component={InventoryList}></Route>
         <Route path="/inventory/:id" exact component={Inventorydetails}></Route>
        </Switch>
       </BrowserRouter>
      </div>
    )
  }
}
export default App;
