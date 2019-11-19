import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../../assets/Logo/Logo-instock.svg'
import './Navigation.scss'


 class Navigation extends React.Component{

  render(){

return(
  <header className="header">
    <nav className="nav">
      <Link to="/"><img className="nav__logo" src={Logo} alt="logo"/></Link>
      <ul className="nav__list">
       <Link to="/inventory"className="nav__item nav__item--change"><li >Inventory</li></Link>
        <Link to="/warehouses" className="nav__item "><li >Locations</li></Link> 
      </ul>
    </nav>
  </header>
  )
 }
}
export default Navigation;