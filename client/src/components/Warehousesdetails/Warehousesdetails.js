import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios'
import './Warehousesdetails.scss'
import  backArrow from '../../assets/Icons/Icon-back-arrow.svg'

 class Warehousesdetails extends React.Component{
   
    state={
        warehouse:{},
        inventory:[]
       }

    componentDidMount(){
        let id=this.props.match.params.id
        axios.get(`http://localhost:8080/warehouses/${id}`)
        .then(response=>{
          console.log(response.data)
            let warehouse=response.data.warehouse
            let inventory = response.data.inventory
            this.setState({warehouse:warehouse ,inventory:inventory})
         }).catch(error=>console.log('there is an error',error));
    }
    // id
    // description
    // lastordered
    // location
    // quantity
    // status

 render(){
   
     
 return(
   <>
    <Link to="/"className="warehouse-link">
      <img className="warehouse-link__arrow"src={backArrow} alt="back-arrow"></img>
      <h1>{this.state.warehouse.name}</h1>
    </Link>
    <section  className="warehouse">
      {(!this.state.warehouse.address && !this.state.warehouse.contact) ? null :
       <>
        <div className="warehouse__address">
          <p className="warehouse__header">ADDRESS</p>
          <p>{this.state.warehouse.address.street}</p>
          <p className="warehouse__text">{this.state.warehouse.address.suiteNum}</p>
          <p>{`${this.state.warehouse.address.city},${this.state.warehouse.address.province}`}</p>
          <p>{`${this.state.warehouse.address.postal},CA`}</p>
        </div>
        <div className="warehouse__conatct">
          <p className="warehouse__header">CONTACT</p>
          <p>{this.state.warehouse.contact.name}</p>
          <p className="warehouse__text">{this.state.warehouse.contact.title}</p>
          <p>{this.state.warehouse.contact.phone}</p>
          <p>{this.state.warehouse.contact.email}</p>
        </div>
     </>
      }
    </section> 
    <section className="inventory">
      <div className="inventory__box">
        <h1>inventory list here</h1>
        {/* {this.state.inventory.map(inventory=>{return <Inventorydetails key={inventory.id} data={inventory}/>})} */}
      </div>
    </section>
    </>
  )
 }
}
export default Warehousesdetails;