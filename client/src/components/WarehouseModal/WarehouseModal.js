import React from 'react';
import Modal from 'react-modal';
import Switch from "react-switch";
import axios from "axios";
import ("../InventoryModal/InventoryModal.scss");
import ("./WarehouseModal.scss");

 
export default class WarehouseModal extends React.Component {
    state = {
        modalIsOpen: false,
      };
    
    openModal() {
      this.setState({modalIsOpen: true});
    }
   
    afterOpenModal() {
      // references are now sync'd and can be accessed.
      // this.subtitle.style.color = '#f00';
    }

    closeModal(){
        this.setState({modalIsOpen: false});
    }
   
    formSubmit(e, clickValue) {
      if (clickValue){
          e.preventDefault();
          if (e.target.name.value.trim().length === 0 || 
            e.target.address.value.trim().length === 0 ||
            e.target.location.value.trim().length === 0 ||
            e.target.contact.value.trim().length === 0 ||
            e.target.position.value.trim().length === 0 ||
            e.target.phone.value.trim().length === 0 ||
            e.target.email.value.trim().length === 0 ||
            // check with Josh should I build an if stt to capture data gaps
            e.target.Categories.value.trim().length === 0){
                alert("please ensure all madatory field are filled.")
          } else {
            return this.sendingData(
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

    //Post request
    sendingData(name, address, location, contact, position, phone, email, Categories){
        let url = "http://localhost:8080/";
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
            console.log(response.data)
        })
        .catch((error) => {
            console.error("Could not post the data, please try again.")
        })
        // this.closeModal();
    }    
   
    render() {
      return (
        <div>
            <button onClick={(e)=> {this.openModal()}}>Open Modal</button>
            <Modal
                isOpen={this.state.modalIsOpen}
                onAfterOpen={(e)=> this.afterOpenModal()}
                onRequestClose={(e)=> {this.closeModal()}}
                contentLabel="Example Modal"
                className = "modal__parent"
                overlayClassName = "modal__overlay"
            >
                <h2 className="add__title">Add New</h2>
                <form className="add__form" onSubmit={(e) => {this.formSubmit(e,"submit")}} onReset={(e) => {this.closeModal()}}>    
                    <div className="add__entry-group warehouse__name">
                        <label>WAREHOUSE</label>
                        <input className="add__entry-field" placeholder="Name & ID" name="name"/>
                    </div>
                    <div className="add__entry-group">
                        <label>ADDRESS</label>
                        <input className="add__entry-field" placeholder="Enter Address" name="address"/>
                    </div>
                    <div className="add__entry-group">
                        <label>LOCATION</label>
                        <select className="add__entry-field add__country" name="location">
                            <option value="toronto">Toronto</option>
                            <option value="mississauga">Mississauga</option>
                            <option value="sudbury">Sudbury</option>
                        </select>
                    </div>
                    <div className="add__entry-group">
                        <label>CONTACT NAME</label>
                        <input className="add__entry-field" placeholder="Enter Name" name="contact"/>
                    </div>
                    <div className="add__entry-group">
                        <label>POSITION</label>
                        <input className="add__entry-field" placeholder="Enter Position" name="position"/>
                    </div>
                    <div className="add__entry-group">
                        <label>PHONE NUMBER</label>
                        <input className="add__entry-field" placeholder="(000)000-000" name="phone"/>
                    </div>
                    <div className="add__entry-group">
                        <label>EMAIL</label>
                        <input className="add__entry-field" placeholder="email@instock.com" name="email"/>
                    </div>
                    <article className="add__article">
                        <label>CATEGORIES</label>
                        <textarea className="add__description" placeholder="Use commas to seprate each category" name="Categories"/>
                    </article>
                    <article className="add__buttons">
                        <button className="add__button button-cancel" type="reset">CANCEL</button>
                        <button className="add__button button-save" type="submit">SAVE</button>
                    </article>
                </form>
            </Modal>
        </div>
      );
    }
}

// @TODO 
// add scrolling button in location