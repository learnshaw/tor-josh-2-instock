import React from 'react';
import axios from 'axios';
import AllInventoryPage from '../InventoryAllPage/inventories';
import TitleSearchBarHeader from '../TitleSearchBarHeader/index';
import './styles.scss';
import add from '../../assets/Icons/Icon-add.svg';
import InventoryModal from "../InventoryModal/InventoryModal.js";

class InventoryList extends React.Component {
    
    state={
        InventoryList:[],
        modalIsOpen: false,
        inStock: true
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
    
  //  MODAL FUNCTIONALITY
  openModal = () => {
    this.setState({modalIsOpen: true});
  }
 
  afterOpenModal() {
    // references are now sync'd and can be accessed.
    // this.subtitle.style.color = '#f00';
  }

  closeModal = () => {
      this.setState({modalIsOpen: false});
  }

  //Post request
  sendingData(product, lastOrdered, city, country, quantity, description){
    let url = "http://localhost:8080/inventory/";
    axios.post(url, {
        "name": `${product}`,
        "lastOrdered": `${lastOrdered}`,
        "location": `${city}`,
        "quantity": `${quantity}`,
        "description": `${description}`,
        "isInstock": this.state.inStock
    })
    .then((response) => {
      this.setState({InventoryList:response.data})
    })
    .catch((error) => {
        console.error("Could not post the data, please try again.")
    })
    this.closeModal();
  } 

  switchHandle = (e) => {
    this.setState({inStock: !this.state.inStock});
  } 

  formSubmit = (e, clickValue) => {
    if (clickValue){
        e.preventDefault();
        if (e.target.product.value.trim().length === 0 || 
          e.target.lastOrdered.value.trim().length === 0 ||
          e.target.city.value.trim().length === 0 ||
          e.target.country.value.trim().length === 0 ||
          e.target.quantity.value.trim().length === 0){
              alert("please ensure all madatory field are filled.")
        } else {
          return this.sendingData(
              e.target.product.value, 
              e.target.lastOrdered.value, 
              e.target.city.value, 
              e.target.country.value,
              e.target.quantity.value,
              e.target.description.value
          )
      }
    }
  }
  // MODAL FUNCTIONALITY ENDED

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

       <button onClick={(e)=> {this.openModal()}}
        className="add-button"><img src={add} alt="addicon"/></button>
        <InventoryModal modelIsOpen={this.state.modalIsOpen}
          afterOpenModal={this.afterOpenModal}
          closeModal={this.closeModal}
          formSubmit = {this.formSubmit}
          switchHandle={this.switchHandle}
          inStock = {this.state.inStock}
          >
        </InventoryModal>
       </>
      )
    }
  }
  
export default InventoryList;
