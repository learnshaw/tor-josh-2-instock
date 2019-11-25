import React from 'react';
import axios from 'axios';
import AllInventoryPage from '../InventoryAllPage/inventories';
import TitleSearchBarHeader from '../TitleSearchBarHeader/index';
import '../InventoryAllPage/styles.scss';

class InventoryList extends React.Component {
    
    state={
        InventoryList:[]
    }

   componentDidMount(){
    axios.get(`http://localhost:8080/inventory`)
    .then(response=>{
       const InventoryList = response.data;
       this.setState({InventoryList:InventoryList})
    })
    .catch(error=>console.log('there is an error', error))
   }

   deleteItem = (id) => {
    
    axios.delete(`http://localhost:8080/inventory/${id}`)
    .then(response => {
      let newInventoryList=response.data
      this.setState({
        InventoryList: newInventoryList
      })
    })
   } 
    
    render() {
      return (
        <>
        <TitleSearchBarHeader />
         <div className="inventory__tablet-parent-div">
           <h5 className="inventory__tablet-item-title">Item</h5>
           <h5 className="inventory__tablet-title">Last Ordered</h5>
           <h5 className="inventory__tablet-title">Location</h5>
           <h5 className="inventory__tablet-title">Quantity</h5>
           <h5 className="inventory__tablet-title status-header">Status</h5>
         </div>
         
      {this.state.InventoryList.map(inventory=><AllInventoryPage key={inventory.id} data={inventory} deleteItem={this.deleteItem}></AllInventoryPage>)} 
      </> 
      )
    }
  }
  
export default InventoryList;
