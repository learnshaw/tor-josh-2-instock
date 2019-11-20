import React from 'react';
import {Link} from 'react-router-dom';
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
         <div className="inventory__parent-div">
           <h3 className="inventory__child-div">Item</h3>
           <h3 className="inventory__child-div">Last Ordered</h3>
           <h3 className="inventory__child-div">Location</h3>
           <h3 className="inventory__child-div">Quantity</h3>
           <h3 className="inventory__child-div">Status</h3>
         </div>
         
       {this.state.InventoryList.map(inventory=><AllInventoryPage data={inventory}></AllInventoryPage>)}  
       </>
      )
    }
}
export default InventoryList;
