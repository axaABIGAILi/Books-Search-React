/* NAVBAR/HEADER COMPONENT*/

import React from 'react';

const Header = props => {
    return (<nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand" href="#">Book Search</a>
    <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
            <a className="nav-link" href="/">Search</a>
          </li>
        <li className="nav-item">
          <a className="nav-link" href="/saved">Saved</a>
        </li>
    </ul>
  </nav>)
}

export default Header;