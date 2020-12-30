import React from 'react'
import {Link} from "react-router-dom";
import '../assets/styles/Navbar.css'

import logo from '../assets/images/logo-beek.png'
import account from '../assets/images/account.svg'

class Navbar extends React.Component {
  render() {
    return (
      <div className="Navbar">
        <div className="container-fluid Navbar__grid">
          <Link className="Navbar__brand" to="/">
            <img className="Navbar__brand-logo" src={logo} alt="Logo" />
            <span className="font-weight-light">Audio</span>
            <span className="font-weight-bold">Beek</span>
          </Link>
          <div className="Navbar__admin">
            <Link to="/create">Admin</Link>
            <img className="Navbar__account" src={account} alt=""/>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
