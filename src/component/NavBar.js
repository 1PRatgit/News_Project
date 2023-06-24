import React from "react";
import { Link } from "react-router-dom";
import "./Styles/Navbar.css";

import Mailer from "./Mailer";

const NavBar = () => {
  return (

    // <header role="banner">
    //   <h1 className="brand">News portal</h1>
    //   <nav id="navbar-primary" className="navbar navbar-default" role="navigation">
    //     <div className="container">
    //       <div className="navbar-header">
    //       </div>
    //       <div className="collapse navbar-collapse" id="navbar-primary-collapse">
    //         <ul className="nav navbar-navms-auto mb-2 mb-lg-0">
    //           <li className="active"><a href="#">Link</a></li>
    //           <li className="nav-item">
    //              <Link className="nav-link" to="/general">
    //                General
    //              </Link>
    //            </li>
    //           <li><a href="#">Link</a></li>
    //           <li><a href="#">Link</a></li>
    //           <li><a href="#">Link</a></li>
    //           <li><a href="#">Link</a></li>
    //         </ul>
    //         <div className="container">
    //           <button className="name">search</button>
    //         </div>
    //         <i className="fa fa-envelope" aria-hidden="true"></i>
    //       </div>

    //     </div>
    //   </nav>
    // </header>
    <div >

      <div className="navbar-brand" style={{ fontSize: '44px' }}>News <i className="fa fa-globe" aria-hidden="true"></i> Portal</div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark justify-content-center">
        <div className="container-fluid">
          {/* <div className="navbar-brand">News <i className="fa fa-globe" aria-hidden="true"></i> Portal</div> */}
          
          <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/general">
                  General
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/health">
                  Health
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/science">
                  Science
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/sports">
                  Sports
                </Link>
              </li>
              <li className="nav-item" >
                <Link className="nav-link" to="/technology">
                  Technology
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-mark" to="/Bookmarks">
                  <i className="fas fa-bookmark" />
                </Link>
              </li> */}
              
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
