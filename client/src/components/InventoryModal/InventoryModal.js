import React from 'react';
import Modal from 'react-modal';
import Switch from "react-switch";
import ("./InventoryModal.scss");

 
export default class InventoryModal extends React.Component { 
   
    render() {
      return (
        <>
            <Modal
                isOpen={this.props.modelIsOpen}
                onAfterOpen={(e)=> this.props.afterOpenModal}
                onRequestClose={(e)=> this.props.closeModal()}
                contentLabel="Example Modal"
                className = "modal__parent"
                overlayClassName = "modal__overlay"
                appElement={document.querySelector('#root')}
            >
                <h2 className="add__title">Create New</h2>
                <form className="add__form" onSubmit={(e) => {this.props.formSubmit(e,"submit")}} onReset={(e) => this.props.closeModal()}>    
                    <div className="add__entry-group">
                        <label>PRODUCT</label>
                        <input className="add__entry-field" placeholder="Item Name" name="product"/>
                    </div>
                    <div className="add__entry-group">
                        <label>LAST ORDERED</label>
                        <input className="add__entry-field" placeholder="yyyy-mm-dd" name="lastOrdered"/>
                    </div>
                    <div className="add__entry-group">
                        <label>CITY</label>
                        <input className="add__entry-field" placeholder="City" name="city"/>
                    </div>
                    <div className="add__entry-group">
                        <label>COUNTRY</label>
                        <select className="add__entry-field add__country" name="country">
                            <option value="canada">Canada</option>
                            <option value="usa">USA</option>
                            <option value="mexico">Mexico</option>
                        </select>
                    </div>
                    <div className="add__entry-group">
                        <label>QUANTITY</label>
                        <input className="add__entry-field" placeholder="0" name="quantity"/>
                    </div>
                    <div className="add__entry-group">
                        <label>STATUS</label>
                        <article className="add__entry-field add__instock">
                            <label>In Stock</label>
                            <Switch onChange={(e)=> {this.props.switchHandle(e)}} checked={this.props.inStock}></Switch>
                        </article>
                    </div>
                    <article className="add__article">
                        <label>ITEM DESCRIPTION</label>
                        <textarea className="add__description" placeholder="(Optional)" name="description"/>
                    </article>
                    <article className="add__buttons">
                        <button className="add__button button-cancel" type="reset">CANCEL</button>
                        <button className="add__button button-save" type="submit">SAVE</button>
                    </article>
                </form>
            </Modal>
        </>
      );
    }
}

// @TODO 
// add scrolling button in country