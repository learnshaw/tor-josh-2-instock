import React from 'react';
import {Link} from 'react-router-dom';
import './Warehousesdetails.scss'
import  backArrow from '../../assets/Icon/Icon-back-arrow.svg'

 class Warehousesdetails extends React.Component{

    state={
        warehouse:{},
        inventory:[]

       }

    componentDidMount(){
        axios.get(`http://localhost:8080/warehouses/${this.params.id}`)
        .then(response=>{
            let warehouse=response.data
            axios.get(`http://localhost:8080/inventory/${thi.params.id}`)
             .then(response=>{
             let inventory = response.data
             this.setState({warehouse:warehouse ,inventory:inventory})
             }).catch(error=>console.log('there is an error',error));
         }).catch(error=>console.log('there is an error',error));
    }
    // id
    // description
    // lastordered
    // location
    // quantity
    // status
 render(){
   const{street,suiteNum,city,province,postal}=this.state.warehouse.address
   const{name,title,phone,email}=this.state.warehouse.contact
 return(
  <>
    <section className="warehouse__header-arrow">
      <img src={backArrow}></img>
      <h1>{this.state.warehouse.name}</h1>
    </section>
    <section  className="warehouse__adress">
      <div className="warehouse__suit-street">
        <p>ADRESS</p>
        <p>{street}</p>
        <p>{suiteNum}</p>
        <p>{`${city},${province}`}</p>
        <p>{`${postal},CA`}</p>
      </div>
      <div className="warehouse__suit-street">
        <p>{name}</p>
        <p>{title}</p>
        <p>{phone}</p>
        <p>{email}</p>
      </div>
    </section>
    <section >
        <h1>product list here</h1>
        {this.state.inventory.map(inventory=>{return <Inventorydetails data={inventory}/>})}
    </section>
  </>
  )
 }
}
export default Warehousesdetails;