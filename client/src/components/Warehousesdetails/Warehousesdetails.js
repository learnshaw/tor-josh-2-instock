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
    <Link to="/"className="warehouse__header-arrow">
      <img src={backArrow} alt="backarrow"></img>
      <h1>{this.state.warehouse.name}</h1>
    </Link>
    <section  className="warehouse__adress">
      {(!this.state.warehouse.address && !this.state.warehouse.contact) ? null :
       <>
        <div className="warehouse__suit-street">
          <p>ADRESS</p>
          <p>{this.state.warehouse.address.street}</p>
          <p>{this.state.warehouse.address.suiteNum}</p>
          <p>{`${this.state.warehouse.address.city},${this.state.warehouse.address.province}`}</p>
          <p>{`${this.state.warehouse.address.postal},CA`}</p>
        </div>
        <div className="warehouse__suit-street">
          <p>CONTACT</p>
          <p>{this.state.warehouse.contact.name}</p>
          <p>{this.state.warehouse.contact.title}</p>
          <p>{this.state.warehouse.contact.phone}</p>
          <p>{this.state.warehouse.contact.email}</p>
        </div>
     </>
      }
    </section> 
    <section >
        <h1>product list here</h1>
        {/* {this.state.inventory.map(inventory=>{return <Inventorydetails key={inventory.id} data={inventory}/>})} */}
    </section>
    </>
  )
 }
}
export default Warehousesdetails;