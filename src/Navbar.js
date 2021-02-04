import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    const dogLinks = this.props.dogs.map((dog) => (
      <li className='nav-item' key={dog.name}>
        <NavLink exact to={`/dogs/${dog.name}`} className='nav-link'>
          {dog.name}
        </NavLink>
      </li>
    ));
    return (
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
        <Link className='navbar-brand' to='/dogs'>
          Dog App
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarNav'
          area-controls='navbarNav'
          area-expanded='false'
          area-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon' />
        </button>
        <div className='collapse  navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav'>{dogLinks}</ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
