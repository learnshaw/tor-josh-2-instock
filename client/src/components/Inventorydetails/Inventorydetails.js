import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import BackArrow from '../../assets/Icons/Icon-back-arrow.svg'
import './Inventorydetails.scss'
import axios from 'axios';

export class Inventorydetails extends Component {
  state = {
    inventoryData:{}
  }

  componentDidMount(){
    if (this.props.match !== undefined) {
      console.log('here!');
    axios.get(`http://localhost:8080/inventory/${this.props.match.params.id}`)
    .then(response=>{
      this.setState({inventoryData:response.data})
    }).catch(error=>console.log('there is and error',error))
    }
  }

  render() {
    const {name,description,quantity,lastOrdered,location,categories}= this.state.inventoryData;
    let showButton;
    if (this.state.inventoryData.isInstock===true){
     showButton = <div className='inventoryDetail__btnPrimary'>In Stock</div>;
    }else{
      showButton= <div className='inventoryDetail__btnSecondary'>Out of Stock</div>
    }
    


    return (
      <section className='inventoryDetail'>
        <div className='inventoryDetail__header'>
            <div className='inventoryDetail__link'>
              <Link to="/inventory"><img className="inventoryDetail__backArrow" src={BackArrow} alt="BackArrow"/></Link>
              <h1 className='inventoryDetail__title'>Product Name</h1>
            </div>
            {showButton}
            
        </div>

        <section className='inventoryDetail__content'>
          <div>
            <p className='inventoryDetail__itemDescription'>ITEM DESCRIPTION</p>
            <p className='inventoryDetail__descriptionContent'>{description}</p>
          </div>
         <div>
            <div className='inventoryDetail__flexOne'>
              <div>
                <p className='inventoryDetail__primary'>ORDERED BY</p>
                <p className='inventoryDetail__secondary'>{name}</p>
              </div>
              <div>
                <p className='inventoryDetail__primary'>REFERENCE NUMBER</p>
                <p className='inventoryDetail__secondary'>JK2020FD7811201</p>
              </div>
            </div>
            <div className='inventoryDetail__flexTwo'>
              <div>
                <p className='inventoryDetail__primary'>LAST ORDERED</p>
                <p className='inventoryDetail__secondary'>{lastOrdered}</p>
              </div>
              <div>
                <p className='inventoryDetail__primary'>LOCATION</p>
                <p className='inventoryDetail__secondary'>{location}</p>
              </div>           
              </div>
              <div>
                <p className='inventoryDetail__primary'>QUANTITY</p>
                <p className='inventoryDetail__secondary'>{quantity}</p>
                </div>
              <div>
                  <p className='inventoryDetail__primary'>CATEGORIES</p>
                  <p className='inventoryDetail__secondary'>{categories}</p>
              </div> 

              </div>
              </section>
        

          <button className= 'inventoryDetail__btnSecondary'> <a href='#'>EDIT</a> </button>          

   



        
      </section>
    )
  }
}

export default Inventorydetails
