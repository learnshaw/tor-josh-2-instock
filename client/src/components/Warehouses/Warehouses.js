import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Createwarehouse from '../Createwarehouse/Createwarehouse';
import add from '../../assets/Icons/Icon-add.svg'
import search from '../../assets/Icons/Icon-search.svg'
import './Warehouses.scss';


class Warehouses extends React.Component{
    
    state={
        warehousesList:[]
    }

   componentDidMount(){
    axios.get(`http://localhost:8080/`)
    .then(response=>{
       const warehousesList = response.data;
       this.setState({warehousesList:warehousesList})
    }).catch(error=>console.log('there is and error',error))
   }
    render(){

      return(
        <>
         <section className="location-top">
          <h1>Locations</h1>
            <div className="location-top__input-box">
             <input className="location-top__input" placeholder="Search"></input>
             <img className="location-top__search-icon" src={search} alt="search-icon"/>
            </div>
         </section>
         <div className="location-headers">
           <p className="location-headers__cell">WAREHOUSE</p>
           <p className="location-headers__cell location-headers__cell-padding-left">CONTACT</p>
           <p className="location-headers__cell">CONTACT INFORMATION</p>
           <p className="location-headers__cell">CATEGORIES</p>
           <p className="location-headers__cell-empty">none</p>
         </div>
       {this.state.warehousesList.map(warehouse=><Createwarehouse data={warehouse}></Createwarehouse>)}  
       <button className="location-headers__add-button"><img src={add} alt="addicon"/></button>
       </>
      )
    }
}
export default Warehouses;