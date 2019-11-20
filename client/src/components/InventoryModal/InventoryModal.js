import React from 'react';
import Modal from 'react-modal';
import Switch from "react-switch";
import axios from "axios";
import ("./InventoryModal.scss");

 
export default class InventoryModal extends React.Component {
    state = {
        modalIsOpen: false,
        inStock: true
      };
    
    openModal() {
      this.setState({modalIsOpen: true});
    }
   
    afterOpenModal() {
      // references are now sync'd and can be accessed.
      // this.subtitle.style.color = '#f00';
    }
   
    closeModal(e, clickValue) {
      e.preventDefault()
      if (clickValue){
          return this.sendingData(
            e.target.product.value, 
            e.target.lastOrdered.value, 
            e.target.city.value, 
            e.target.country.value,
            e.target.quantity.value,
            e.target.description.value
        )
      }
      this.setState({modalIsOpen: false});
    }

    switchHandle(e) {
        this.setState({inStock: !this.state.inStock});
    }

    //Post request
    sendingData(product, lastOrdered, city, country, quantity, description){
        console.log(product, lastOrdered, city, country, quantity, description, this.state.inStock)
        // url = "";
        // axios.post(url, {
        //     "": product,
        //     "": lastOrdered,
        //     "": city,
        //     "": country,
        //     "": quantity,
        //     "": description,
        //     "": this.state.inStock
        // })
        // .then((response) => {
        //     console.log(response.data)
        // })
        // .catch((error) => {
        //     console.log("Could not post the data, please try again.")
        // })
    }    
   
    render() {
      return (
        <div>
            <button onClick={(e)=> {this.openModal()}}>Open Modal</button>
            <Modal
                isOpen={this.state.modalIsOpen}
                onAfterOpen={(e)=> this.afterOpenModal()}
                onRequestClose={(e)=> {this.closeModal()}}
                contentLabel="Example Modal Tablet"
                className = "modal__parent"
                overlayClassName = "modal__overlay"
            >
                <h2 className="add__product-title">Create New</h2>
                <form className="add__product-form" onSubmit={(e) => {this.closeModal(e,"submit")}} onReset={(e) => {this.closeModal(e)}}>    
                    <div className="add__product-entry-group">
                        <label>PRODUCT</label>
                        <input className="add__product-entry-field" placeholder="Item Name" name="product" required/>
                    </div>
                    <div className="add__product-entry-group">
                        <label>LAST ORDERED</label>
                        <input className="add__product-entry-field" placeholder="yyyy-mm-dd" name="lastOrdered" required/>
                    </div>
                    <div className="add__product-entry-group">
                        <label>CITY</label>
                        <input className="add__product-entry-field" placeholder="City" name="city" required/>
                    </div>
                    <div className="add__product-entry-group">
                        <label>COUNTRY</label>
                        <select className="add__product-entry-field add__product-country" name="country" required>
                            <option value="canada">Canada</option>
                            <option value="usa">USA</option>
                            <option value="mexico">Mexico</option>
                        </select>
                    </div>
                    <div className="add__product-entry-group">
                        <label>QUANTITY</label>
                        <input className="add__product-entry-field" placeholder="0" name="quantity" required/>
                    </div>
                    <div className="add__product-entry-group">
                        <label>STATUS</label>
                        <article className="add__product-entry-field add__product-instock">
                            <label>In Stock</label>
                            <Switch onChange={(e)=> {this.switchHandle(e)}} checked={this.state.inStock}></Switch>
                        </article>
                    </div>
                    <article className="add__product-article">
                        <label>ITEM DESCRIPTION</label>
                        <textarea className="add__product-description" placeholder="(Optional)" name="description"/>
                    </article>
                    <article className="add__product-buttons">
                        <button className="add__product-button button-cancel" type="reset">CANCEL</button>
                        <button className="add__product-button button-save" type="submit">SAVE</button>
                    </article>
                </form>
            </Modal>
        </div>
      );
    }
}