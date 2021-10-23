import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export default class Navbar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link to = '/' style = {{textDecoration : 'none'}}>
            <h1 className="navbar-text">Movies App</h1>
          </Link>
          <button className="navbar-toggler" type="button"
                  data-bs-toggle="collapse" data-bs-target="#navbarText"
                  aria-controls="navbarText" aria-expanded="true"
                  aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#"></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#"></a>
              </li>
            </ul>
            <Link to = '/favrouite' style = {{textDecoration : 'none', marginLeft : '55rem'}}>
               <h2 className="navbar-text">
                Favrouite
              </h2>
           </Link>
          </div>
        </div>
      </nav>
    )
  }
}
