// this component to be used for inventory and warehouse main pages 
import React from 'react';
import '../Components/TitleSearchBarHeader/styles.scss';

const TitleSearchBarHeader = () => {

    return (
        <div className='title-search-header__flex-div' >
            <h2 className='title-search-header__title'>Inventory</h2>
            <textarea type="search" id="search" name="search" cols="2" rows="4" aria-label="Search site content" className='title-search-header__input' placeholder='      Search' required /> 
        </div>

    );
}

export default TitleSearchBarHeader;
