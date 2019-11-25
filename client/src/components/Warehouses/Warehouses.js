import React from 'react';
import axios from 'axios';
import Createwarehouse from '../Createwarehouse/Createwarehouse';
import add from '../../assets/Icons/Icon-add.svg'
import search from '../../assets/Icons/Icon-search.svg'
import './Warehouses.scss';
import WarehouseModal from "../WarehouseModal/WarehouseModal.js";

class Warehouses extends React.Component{
    
    state={
        warehousesList:[],
        modalIsOpen: false
    }

   componentDidMount(){
    axios.get(`http://localhost:8080/warehouses`)
    .then(response=>{
       const warehousesList = response.data;
       this.setState({warehousesList:warehousesList})
    }).catch(error=>console.log('there is and error',error))
   }

  //  Modal functionality 
  openModal=()=> { 
    this.setState({modalIsOpen: true});
  }
  afterOpenModal=()=>{
    // references are now sync'd and can be accessed.
    // this.subtitle.style.color = '#f00';
  }
  closeModal=()=>{
    this.setState({modalIsOpen: false});
  }
  //Post request
  sendingData(name, address, location, contact, position, phone, email, Categories){
    let url = "http://localhost:8080/warehouses";
    axios.post(url, {
        "name": `${name}`,
        "address": `${address}`,
        "location": `${location}`,
        "contact": `${contact}`,
        "position": `${position}`,
        "phone": `${phone}`,
        "email": `${email}`,
        "Categories": `${Categories}`
    })
    .then((response) => {
      this.setState({
        warehousesList: response.data
      })
    })
    .catch((error) => {
        console.error("Could not post the data, please try again.")
    })
    this.closeModal();
  }    

  formSubmit = (e, clickValue) => {
    if (clickValue){
        e.preventDefault();
        if (e.target.name.value.trim().length === 0 || 
          e.target.address.value.trim().length === 0 ||
          e.target.location.value.trim().length === 0 ||
          e.target.contact.value.trim().length === 0 ||
          e.target.position.value.trim().length === 0 ||
          e.target.phone.value.trim().length === 0 ||
          e.target.email.value.trim().length === 0 ||
          e.target.Categories.value.trim().length === 0){
              alert("please ensure all madatory field are filled.")
        } else {
           this.sendingData(
              e.target.name.value, 
              e.target.address.value,
              e.target.location.value,
              e.target.contact.value,
              e.target.position.value,
              e.target.phone.value,
              e.target.email.value,
              e.target.Categories.value
          )
      }
    }
  }
  // Modal functionality ended

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
       <button onClick={(e)=> {this.openModal()}}
        className="location-headers__add-button"><img src={add} alt="addicon"/></button>
        <WarehouseModal modelIsOpen={this.state.modalIsOpen}
          afterOpenModal={this.afterOpenModal}
          closeModal={this.closeModal}
          formSubmit = {this.formSubmit}>
        </WarehouseModal>
       {/* {this.state.warehousesList.map(warehouse=><Createwarehouse key={warehouse.id} data={warehouse}></Createwarehouse>)}  
       <button className="location-headers__add-button"><img src={add} alt="addicon"/></button> */}
       </>
      )
    }
}
export default Warehouses;