import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';

class App extends React.Component {

  render(){
    return(
      <div className="App">
       <BrowserRouter>
       {/* <Header/> */}
        <Switch>
         <Route path="/" exact component={Warehouses}></Route>
         <Route path="/warehouses" component={Warehouses}></Route>
         <Route path="/inventory" component={Inventory}></Route>
         <Route path="/warehouses/:id" exact component={Warehousesdetails}></Route>
         <Route path="/inventory/:id" exact component={Inventorydetails}></Route>
        </Switch>
       </BrowserRouter>
      </div>
    )
  }
}
export default App;
