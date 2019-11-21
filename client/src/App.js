import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
<<<<<<< HEAD
import Inventorydetails from './components/Inventorydetails/Inventorydetails';
=======
import Warehouses from './components/Warehouses/Warehouses'
>>>>>>> develop

class App extends React.Component {

  render(){
    return(
      <div className="App">
       <BrowserRouter>
<<<<<<< HEAD
       <Navigation/>  
       <Inventorydetails/>     
       <h1>hello world</h1>
        {/* <Switch>
=======
       <Navigation/>
        <Switch>
>>>>>>> develop
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
