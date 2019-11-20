import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import AllInventoryPage from '../Createwarehouse/Createwarehouse';
import '../InventoryAllPage/styles.scss';


class InventoryList extends React.Component{
    
    state={
        InventoryList:[]
    }
   componentDidMount(){
    axios.get(`http://localhost:8080/`)
    .then(response=>{
       const InventoryList = response.data;
       this.setState({InventoryList:InventoryList})
    }).catch(error=>console.log('there is an error',error))
   }
    render(){
      return(
        <>
        <h1>Locations</h1>
         <div className="location__headers">
           <p className="location__headers-cell">WAREHOUSE</p>
           <p className="location__headers-cell">CONTACT</p>
           <p className="location__headers-cell">CONTACT INFORMATION</p>
           <p className="location__headers-cell">CATEGORIES</p>
         </div>
       {this.state.warehousesList.map(warehouse=><Createwarehouse data={warehouse}></Createwarehouse>)}  
       </>
      )
    }
}
export default InventoryList;
