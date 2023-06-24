import React from 'react';
import './Styles/Footer.css';
const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-2" >
      <div className="container">
        <div className="row">
          <div className="col-md-6">
          <div class="social">
                      <i class="fa-brands fa-facebook-square"></i>
                      <i class="fa-brands fa-instagram-square"></i>
                      <i class="fa-brands fa-twitter-square"></i>
          <i class="fa-brands fa-youtube-square"></i>
            <i class="fa-brands fa-whatsapp-square"></i>
                    </div>
            
             </div>
          <div className="col-md-6">
            <h5>Contact Us</h5>
            <address>
              Developed by Pranjali R <br></br>
              Email: rrpranjali@gmail.com
            </address>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p className="mb-0">&copy; 2023 All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
