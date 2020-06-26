import React from 'react';
import {Link} from 'react-router-dom';

const Header = (props) => {
  return(
    <div id='header'>

      <Link to='/history'>
        <div className='header-icon'/>
      </Link>

      <Link to='/'>
        <span>{props.title}</span>
      </Link>

      <Link to='transaction'>
        <div className='header-icon'/>
      </Link>

    </div>
  )
}


export default Header;
