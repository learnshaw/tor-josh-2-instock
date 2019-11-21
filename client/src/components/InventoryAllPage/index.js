import React from 'react';
import axios from 'axios';
import AllInventoryPage from '../InventoryAllPage/inventories';
import TitleSearchBarHeader from '../TitleSearchBarHeader/index';
import '../InventoryAllPage/styles.scss';


class InventoryList extends React.Component{
    
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
    render() {
      return (
        <>
        <TitleSearchBarHeader />
         <div className="inventory__tablet-parent-div">
           <h5 className="inventory__tablet-item-title">Item</h5>
           
           <h5 className="inventory__tablet-title last-ordered-header">Last Ordered</h5>
           <h5 className="inventory__tablet-title  location-header">Location</h5>
           <h5 className="inventory__tablet-title quantity-header">Quantity</h5>
           <h5 className="inventory__tablet-title status-header">Status</h5>
           
         </div>
         
      {this.state.InventoryList.map(inventory=><AllInventoryPage data={inventory}></AllInventoryPage>)}  
       </>
      )
    }
}
export default InventoryList;
