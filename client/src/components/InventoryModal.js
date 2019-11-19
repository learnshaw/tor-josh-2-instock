import React from 'react';
import Modal from 'react-modal';
import MediaQuery from 'react-responsive';
import ("./inventoryModal.scss");
 
export default class InventoryModal extends React.Component {
    state = {
        modalIsOpen: false
      };
   
    customStylesTablet = {
        content : {
          top                   : '50%',
          left                  : '50%',
          right                 : 'auto',
          bottom                : 'auto',
          marginRight           : '-50%',
          transform             : 'translate(-50%, -50%)'
        }
    };
    
    openModal() {
      this.setState({modalIsOpen: true});
    }
   
    afterOpenModal() {
      // references are now sync'd and can be accessed.
      // this.subtitle.style.color = '#f00';
    }
   
    closeModal(e) {
      e.preventDefault()
      console.log(e.target.name.value)
      this.setState({modalIsOpen: false});
    }
   
    render() {
      return (
        <div>
            <button onClick={(e)=> {this.openModal()}}>Open Modal</button>
            <MediaQuery minDeviceWidth={768}>
            <Modal
                isOpen={this.state.modalIsOpen}
                onAfterOpen={(e)=> this.afterOpenModal()}
                onRequestClose={(e)=> {this.closeModal()}}
                style={this.customStylesTablet}
                contentLabel="Example Modal Tablet"
            >
                <form className="add__product-form" onSubmit={(e) => {this.closeModal(e)}}>
                    <h2>Create New</h2>
                    <div className="add__product-section">
                        <div className="add__product-entry-field">
                            <label>NAME</label>
                            <input placeholder="Name" name="name"/>
                        </div>
                        <div className="add__product-entry-field">
                            <label>CITY</label>
                            <input placeholder="City" name="city"/>
                        </div>
                        <div className="add__product-entry-field">
                            <label>QUANTITY</label>
                            <input placeholder="0" name="qunatity"/>
                        </div>
                    </div>
                    <div className="add__product-section">
                        <div className="add__product-entry-field">
                            <label>LAST ORDERED</label>
                            <input placeholder="yyyy-mm-dd" name="lastOrdered"/>
                        </div>
                        <div className="add__product-entry-field"></div>
                            <label>COUNTRY</label>
                            <input placeholder="Canada" name="country"/>
                        </div>
                        <div className="add__product-entry-field"></div>
                            <label>STATUS</label>
                            <input placeholder="0" name="qunatity"/>
                        </div>
                    </div>
                    <label>ITEM DESCRIPTION</label>
                    <input placeholder="0" name="(Optional)"/>
                    <div className="add__product-form-buttons">
                        <button type="submit">CANCEL</button>
                        <button type="submit">SAVE</button>
                    </div>
                </form>
            </Modal>
            </MediaQuery>
        </div>
      );
    }
}