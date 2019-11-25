import React from 'react';
import Modal from 'react-modal';
import ("../InventoryModal/InventoryModal.scss");
import ("./WarehouseModal.scss");

 
export default class WarehouseModal extends React.Component {    
   
    render() {
      return (
        <>
            <Modal
                isOpen={this.props.modelIsOpen}
                onAfterOpen={(e)=> this.props.afterOpenModal}
                onRequestClose={(e)=> this.props.closeModal}
                contentLabel="Example Modal"
                className = "modal__parent"
                overlayClassName = "modal__overlay"
                appElement={document.querySelector('#root')}
            >
                <h2 className="add__title">Add New</h2>
                <form className="add__form" onSubmit={(e) => this.props.formSubmit(e,"submit")} onReset={(e) => this.props.closeModal()}>    
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
        </>
      );
    }
}

// @TODO 
// add scrolling button in location