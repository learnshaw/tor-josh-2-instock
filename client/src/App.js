import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
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
         <Route path="/warehouses" component={Warehouses}></Route>
         {/* <Route path="/warehouses/:id" exact component={Warehousesdetails}></Route> */}
         {/* <Route path="/inventory" component={Inventory}></Route> */}
         <Route path="/inventory/:id" exact component={Inventorydetails}></Route>
        </Switch>
       </BrowserRouter>
      </div>
    )
  }
}
export default App;
