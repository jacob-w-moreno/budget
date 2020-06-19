import React from 'react';

const Header = (props) => {
  return(
    <div id='header'>

      <div className='header-icon'/>

      <span>{props.title}</span>

      <div className='header-icon'/>
      
    </div>
  )
}

export default Header;