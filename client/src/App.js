import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import InventoryList from './components/InventoryAllPage';

class App extends React.Component {

  render(){
    return(
      <div className="App">
       <BrowserRouter>
       <Navigation/>
       <h1>hello world</h1>
        <Switch>
         {/* <Route path="/" exact component={Warehouses}></Route>
         <Route path="/warehouses" component={Warehouses}></Route> */}
         <Route path="/inventory" component={InventoryList}></Route>
         {/* <Route path="/warehouses/:id" exact component={Warehousesdetails}></Route> */}
        {/* <Route path="/inventory/:id" exact component={Inventorydetails}></Route>  */}
        </Switch>
       </BrowserRouter>
      </div>
    )
  }
}
export default App;
