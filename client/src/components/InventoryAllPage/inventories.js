import React from 'react';
import {Link} from 'react-router-dom';
import './styles.scss';
import kebabButton from '../../assets/Icons/Icon-kebab-default.svg';

class AllInventoryPage extends React.Component{
  
    container = React.createRef();
    state={ isVisible:false }


    removeHandler = (event) => { 
            let id = this.props.data.id 
            console.log(id)
            this.props.deleteItem(id)
        }
    kebabHandler = (event) =>{
        let value=!this.state.isVisible
        this.setState({isVisible:value})
    }

    componentDidMount() {
        document.addEventListener("mousedown", this.handleClickOutside);
    }

    componentWillUnmount() {
      document.removeEventListener("mousedown", this.handleClickOutside);
    }

    handleClickOutside = event => {
      if (this.container.current && !this.container.current.contains(event.target)) {
        this.setState({
          isVisible: false,
        });
      }
    };

    render() {
        console.log(this.props);
        

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
            <Link className="inventory__link" to={`/inventory/${this.props.data.id}`}>
            <h5 className="inventory__mobile-title">Item</h5>
            <div className="inventory__item-info">
                <h4 className="inventory__item-name">{itemName}</h4>
                <h4 className="inventory__item-data">{itemDesc}</h4>
            </div>
            <h5 className="inventory__mobile-title">Last Ordered</h5>
            <div className="inventory__item-flex">
                <h4 className="inventory__item-data last-ordered">{itemOrder}</h4>
            </div>
            <h5 className="inventory__mobile-title">Location</h5>
            <div className="inventory__item-flex ">
                <h4 className="inventory__item-data">{itemLocation}</h4>
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
            <div ref={this.container} className='inventory__remove-div container'>
                <img src={kebabButton} alt='ellipsis navigation' onClick={this.kebabHandler}></img>
                {this.state.isVisible ? <button onClick={(event)=>this.removeHandler(event)}
                className="inventory__remove-button">Remove</button> :null}
            </div>   
        </section>
    )
  }
}
  export default AllInventoryPage;
