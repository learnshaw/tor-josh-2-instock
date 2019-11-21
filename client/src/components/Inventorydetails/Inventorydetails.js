import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import BackArrow from '../../assets/Icons/Icon-back-arrow.svg'
import './Inventorydetails.scss'

export class Inventorydetails extends Component {
  render() {
    return (
      <section className='inventoryDetail'>
        <div className='inventoryDetail__header'>
            <Link to="/inventory"><img className="inventoryDetail__backArrow" src={BackArrow} alt="BackArrow"/></Link>
            <h1 className='inventoryDetail__title'>Product Name</h1>
            <button className='inventoryDetail__btnPrimary'>In Stock</button>
        </div>

        <section className='inventoryDetail__content'>
          <h4 className='inventoryDetail__itemDescription'>ITEM DESCRIPTION</h4>
          <h4 className='inventoryDetail__descriptionContent'>Here is a more detailed summary of the product name, it’s uses, industries and possible attributes
          that could be used to describe the product.</h4>
          <div className='inventoryDetail__flexOne'>
            <div>
              <h4 className='inventoryDetail__primary'>ORDERED BY</h4>
              <h4 className='inventoryDetail__secondary'>Mark Sanders</h4>
            </div>
            <div>
              <h4 className='inventoryDetail__primary'>REFERENCE NUMBER</h4>
              <h4 className='inventoryDetail__secondary'>JK2020FD7811201</h4>
            </div>
          </div>


          <div className='inventoryDetail__flexTwo'>
            <div>
              <h4 className='inventoryDetail__primary'>LAST ORDERED</h4>
              <h4 className='inventoryDetail__secondary'>2018-05-24</h4>
            </div>

            <div>
              <h4 className='inventoryDetail__primary'>LOCATION</h4>
              <h4 className='inventoryDetail__secondary'>Toronto</h4>
            </div>           
          </div>


          <div>
              <h4 className='inventoryDetail__primary'>QUANTITY</h4>
              <h4 className='inventoryDetail__secondary'>12000</h4>
            </div>

            <div>
              <h4 className='inventoryDetail__primary'>CATEGORIES</h4>
              <h4 className='inventoryDetail__secondary'>Industrial, Automotive, Heavy, Mechanical, Engineering, Transportation, Sales</h4>
            </div> 

          <button className= 'inventoryDetail__btnSecondary'>EDIT</button>          

        </section>



        
      </section>
    )
  }
}

export default Inventorydetails
