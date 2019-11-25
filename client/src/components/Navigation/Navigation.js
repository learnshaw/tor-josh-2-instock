import React from 'react';
import {NavLink} from 'react-router-dom';
import Logo from '../../assets/Logo/Logo-instock.svg'
import './Navigation.scss'


 class Navigation extends React.Component{
 

  clickHandler=()=>{

  }
  render(){

return(
  <header className="header">
    <nav className="nav">
      <NavLink to="/"><img className="nav__logo" src={Logo} alt="logo"/></NavLink>
      <ul className="nav__list">
       <NavLink to="/inventory" activeClassName="nav__item--change" className="nav__item"><li >Inventory</li></NavLink>
        <NavLink to="/warehouses" activeClassName="nav__item--change" className="nav__item"><li >Locations</li></NavLink> 
      </ul>
    </nav>
  </header>
  )
 }
}
export default Navigation;