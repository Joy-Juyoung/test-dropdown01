import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import './Navbar.css';
import Dropdown from './Dropdown';

function Navbar() {
  const [dropdown, setDropdown] = useState(false);

  const onMouseEnter = () => {
    setDropdown(true);
  };

  const onMouseLeave = () => {
    setDropdown(false);
  };

  return (
    <nav className='navbar'>
      <Link to='/' className='nav-links'>
        Home
      </Link>
      <div
        className='nav-item'
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <Link to='/services' className='nav-links'>
          Services
        </Link>
        {dropdown && <Dropdown />}
      </div>
    </nav>
  );
}

export default Navbar;
