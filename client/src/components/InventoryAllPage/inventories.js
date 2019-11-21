import React from 'react';
import {Link} from 'react-router-dom';
import './styles.scss';
import kebabButton from '../../assets/Icons/Icon-kebab-default.svg'


class AllInventoryPage extends React.Component{
  
    render() {

    const itemName = this.props.data.name
    const itemDesc = this.props.data.description
    const itemOrder = this.props.data.lastOrdered
    const itemLocation = this.props.data.location
    const itemQuantity = this.props.data.quantity 
    const itemStatus = this.props.data.isInstock
    let itemStatusTitle = "Out Of Stock"
    if (itemStatus === true) {
        itemStatusTitle = "In Stock"
    }

    return (
    
        <section className="inventory__main-section">
            <Link className="inventory__link" to="/inventory/"> {/* will need to fix this link */}
            <h5 className="inventory__mobile-title">Item</h5>
            <div className="inventory__item-info">
                <h4 className="inventory__item-name">{itemName}</h4>
                <h4 className="inventory__item-data">{itemDesc}</h4>
            </div>
            <h5 className="inventory__mobile-title">Last Ordered</h5>
            <div className="inventory__item-flex ">
                <h4 className="inventory__item-data last-ordered">{itemOrder}</h4>
            </div>
            <h5 className="inventory__mobile-title">Location</h5>
            <div className="inventory__item-flex ">
                <h4 className="inventory__item-data location">{itemLocation}</h4>
            </div> 
            <h5 className="inventory__mobile-title">Quantity</h5>
            <div className="inventory__item-flex ">
                <h4 className="inventory__item-data quantity">{itemQuantity}</h4>
            </div>
            <h5 className="inventory__mobile-title">Status</h5>
            <div className="inventory__item-flex ">
                <h4 className="inventory__item-data status">{itemStatusTitle}</h4>
            </div>
            </Link>
                <div className="inventory__icon-div">
                    <img className="inventory__kebab-icon" src={kebabButton} alt='ellipsis navigation'></img>
                </div>
        </section>
    )
  }
}
  export default AllInventoryPage;
