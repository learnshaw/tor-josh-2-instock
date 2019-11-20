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

    return(

      <section className="inventory__main-section">
         <div className="inventory__product-info">
             <p className="inventory__product-name">{itemName}</p>
             <p className="inventory__product-desc">{itemDesc}</p>
         </div>
         <div classname="inventory__last-ordered">
             <p>{itemOrder}</p>
         </div>
         <div classname="inventory__item-location">
             <p>{itemLocation}</p>
         </div>
         <div classname="inventory__item-quantity">
             <p>{itemQuantity}</p>
         </div>
         <div classname="inventory__item-status">
             <p>{itemStatus}</p>
         </div>
         {/* <div className="location__category">
             <p>{this.props.data.inventoryCategories}</p>
         </div> */}
         <div className="location__arrow-right">
          <img src={kebabButton} alt='ellipsis navigation'></img>
         </div>
     </section>
    )
  }
}
  export default AllInventoryPage;
