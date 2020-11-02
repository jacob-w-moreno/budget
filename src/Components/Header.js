import React from 'react';
import {Link} from 'react-router-dom';

const Header = (props) => {
  return(
    <div id='header'>

      <div className='header-icon'
      onClick={props.leftClick}/>

      <Link to='/'>
        <span>{props.title}</span>
      </Link>

      <div className='header-icon'
      onClick={props.rightClick}/>

    </div>
  )
}


export default Header;
