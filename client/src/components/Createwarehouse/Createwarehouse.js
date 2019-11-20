import React from 'react';
import {Link} from 'react-router-dom';
import './Createwarehouse.scss';
import arrowRight from '../../assets/Icons/Icon-arrow-right.svg'


class Createwarehouse extends React.Component{

  render(){
    const {street,suiteNum,city,province,postal}=this.props.data.address
    // const address=`${suiteNum} ,${street},${city},${province},${postal}`;
    const address=`${street},${city},${province}`;
    const {name,title,phone,email}=this.props.data.contact

    return(
    <Link className="location" to={`/warehouses/${this.props.data.id}`}>
        <div className="location__mobile-tablet">
          <div className="location__name-address">
            <p className="location__name">{this.props.data.name}</p>
            <p>{address}</p>
          </div>
          <div className="location__arrow-right-mobile-tablet">
          <img src={arrowRight}></img>
          </div>
         </div>
         <div className="location__tablet-flex">
           <div className="location__contact-one">
             <p >{name}</p>
             <p className="location__contact-title">{title}</p>
           </div>
           <div className="location__contact-two">
             <p>{phone}</p>
             <p className="location__contact-email">{email}</p>
           </div>
           <div className="location__category">
             <p>{this.props.data.inventoryCategories}</p>
           </div>
         </div>
         <div className="location__arrow-right-desktop">
          <img src={arrowRight}></img>
         </div>
      </Link>
    )
  }
}
  export default Createwarehouse;






