import React from 'react';


import './footer.css'
import logo from './assets/logo-white.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faXTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faAngleRight, faLocationDot, faPhone,faEnvelope, faClock } from '@fortawesome/free-solid-svg-icons';
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
const Footer = () => {
  return (
    <footer>
      <div
        
        className="footer-wrapper" >
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-3 py-4">
              <div className="two"></div>
              <h3>Our Office</h3>
              <div>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li style={{paddingTop:'8px'}}>
                   
                    <FontAwesomeIcon icon={faLocationDot}    style={{ marginRight: '10px'}} />
                   Omlaur,<br/>Salem, 636 455.
                  </li>
                  <li style={{paddingTop:'8px'}}>
                 
                                        <FontAwesomeIcon icon={faPhone}  style={{ marginRight: '10px',}}   />

                    <a href="tel:+919042333092"  style={{ textDecoration: 'none', color: 'white', }} >
                      +91 90423 33092
                    </a>
                  </li>
                  <li style={{paddingTop:'8px'}}>
               
                                        <FontAwesomeIcon icon={faEnvelope}  style={{ marginRight: '10px'}}  />

                    <a href="mailto:info@example.com" style={{ textDecoration: 'none', color: 'white' }}>
                      info@havionsolutions.com
                    </a>
                  </li>
                </ul>
              </div>

              <div className="social-icons">
                <a
                  href="#"
                  target="_blank"
                  className="social-icon"
                  style={{ backgroundColor: '#3b5998' }}
                >
 
                         <FontAwesomeIcon icon={faFacebookF}  />

                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  href="#"
                  target="_blank"
                  className="social-icon"
                  style={{ backgroundColor: '#1da1f2' }}
                >

<FontAwesomeIcon icon={faXTwitter}  />


                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href="https://www.linkedin.com/company/havion-solutions-inc/"
                  target="_blank"
                  className="social-icon"
                  style={{ backgroundColor: '#0077B5' }}
                >
                    <FontAwesomeIcon icon={faLinkedinIn}/>
                </a>
              </div>
            </div>

            <div className="col-sm-12 col-md-6 col-lg-2 py-4">
              <div className="two"></div>
              <h3>Quick Links</h3>
              <div>
                <ul id="footer-nav-links" style={{ listStyle: 'none', padding: 0 }}>
                  <li>

                    
<FontAwesomeIcon  style={{ marginRight: '8px' }} icon={faAngleRight}  />


                
                    <a className="link-suppress" href="#company">
                      Company
                    </a>
                  </li>
                  <li>
                  <FontAwesomeIcon  style={{ marginRight: '8px' }} icon={faAngleRight}  />

                    <a className="link-suppress" href="#about">
                      About
                    </a>
                  </li>
                  <li>
                  <FontAwesomeIcon  style={{ marginRight: '8px' }} icon={faAngleRight}  />

                    <a className="link-suppress" href="#contact">
                      Contact
                    </a>
                  </li>
                  <li>
                  <FontAwesomeIcon  style={{ marginRight: '8px' }} icon={faAngleRight}  />

                    <a className="link-suppress" href="/career">
                      Career
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-sm-12 col-md-6 col-lg-2 py-4">
              <div className="two"></div>
              <h3>Office Hrs</h3>
              <p className="mb-1 text-white">
                <b>Monday - Friday</b>
              </p>
              <div>

              <FontAwesomeIcon icon={faClock}   style={{ marginRight: '8px'}}  
 />


            
                9:00 AM - 6:00 PM
              </div>
            </div>

            <div className="col-sm-12 col-md-6 col-lg-5 py-4">
              <div className="two">
                <h3>Company</h3>
              </div>

              <div>
          
              <img
                   
      src={logo.src}
      alt="Logo"
      style={{
        height: '100%',
        maxHeight: '120px',
      }}
    />

                <p>
                Havion Solutions specializes in providing a comprehensive range of IT solutions designed to enhance business operations and digital presence. Our services are tailored to meet the unique needs of each client, utilizing the latest tools and techniques to deliver effective and efficient IT solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ borderTop: '1px solid gray', backgroundColor: 'black', color: 'white' }}>
        <div className="text-center p-3">
          © Copyright{' '}
          <a href="/" className="link-suppress">
            Havion Solutions Pvt Ltd
          </a>{' '}
          {new Date().getFullYear()} | All rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
