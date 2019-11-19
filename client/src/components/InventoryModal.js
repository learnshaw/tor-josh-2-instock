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
            {/* <MediaQuery minDeviceWidth={768}> */}
            <Modal
                isOpen={this.state.modalIsOpen}
                onAfterOpen={(e)=> this.afterOpenModal()}
                onRequestClose={(e)=> {this.closeModal()}}
                style={this.customStylesTablet}
                contentLabel="Example Modal Tablet"
            >
                <h2>Create New</h2>
                <form className="add__product-form" onSubmit={(e) => {this.closeModal(e)}}>    
                    <section className="add__product-section">
                        <article className="add__product-article">
                            <div className="add__product-entry-group">
                                <label>NAME</label>
                                <input className="add__product-entry-field" placeholder="Name" name="name"/>
                            </div>
                            <div className="add__product-entry-group">
                                <label>CITY</label>
                                <input className="add__product-entry-field" placeholder="City" name="city"/>
                            </div>
                            <div className="add__product-entry-group">
                                <label>QUANTITY</label>
                                <input className="add__product-entry-field" placeholder="0" name="quantity"/>
                            </div>
                        </article>
                        <article className="add__product-article">
                            <div className="add__product-entry-group">
                                <label>LAST ORDERED</label>
                                <input className="add__product-entry-field" placeholder="yyyy-mm-dd" name="lastOrdered"/>
                            </div>
                            <div className="add__product-entry-group">
                                <label>COUNTRY</label>
                                <input className="add__product-entry-field" placeholder="Canada" name="country"/>
                            </div>
                            <div className="add__product-entry-group">
                                <label>STATUS</label>
                                <input placeholder="0" name="quantity"/>
                            </div>
                        </article>
                    </section>
                    <article className="add__product-article">
                        <label>ITEM DESCRIPTION</label>
                        <input placeholder="(Optional)" name="description"/>
                    </article>
                    <article className="add__product-buttons">
                        <button type="submit">CANCEL</button>
                        <button type="submit">SAVE</button>
                    </article>
                </form>
            </Modal>
            {/* </MediaQuery> */}
        </div>
      );
    }
}