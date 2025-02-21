import './contact.css'
import '../home.css'
import Footer from "../footer";
import Header from "../header"
import 'bootstrap/dist/css/bootstrap.min.css';
import EmailImage from "../assets/email.png"
import DailImage from "../assets/dial.png"
import Image from 'next/image';
import TopBar from "../topbar";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "For any queries, contact us via our contact details, +91 90423-33092, info@havionsolutions.com.",
  alternates: {
    canonical: 'https://havionsolutions/contact/',
  },
};


const ContactUsContainer = () => {
    return (

      
      <div
       
        className="wow bounceInDown px-0"
        data-wow-delay="0.1s"
        style={{
          visibility: 'visible',
          animationDuration: '1.5s',
          animationDelay: '0.1s',
          animationName: 'bounceInDown',
        }}
      >
      
    
            
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-12 col-md-6">
            
              <p>

              For any queries, contact us via our contact details.              </p>
              <div className="custom-card">
                <div>


                <Image

alt="Email"
  src={EmailImage}

  width={52}
  height={52}
  style={{ float: 'left' }}
/>                  
                  <h6
                    style={{
                      marginLeft: '80px',
                      justifyContent: 'center',
                      textAlign: 'center',
                    }}
                  >
                    +91 88382-100229
                    <br />
                    <span style={{ color: 'gray' }}>Phone Number</span>
                  </h6>
                </div>
              </div>
              <div className="custom-card">
                <div>

                <Image

alt="Dail"
  src={DailImage}

  width={52}
  style={{ float: 'left' }}
/>

                  <h6
                    style={{
                      marginLeft: '80px',
                      justifyContent: 'center',
                      textAlign: 'center',
                      wordWrap: 'break-word',
                    }}
                  >
                    info@havionsolutions.com
                    <br />
                    <span style={{ color: 'gray' }}>Email</span>
                  </h6>
                </div>
              </div>
            </div>
            <div
              className="col-sm-12 col-md-6  justify-content-center align-items-center"
            >
              <div className="custom-card">
                <form id="contactForm">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="fullName"
                      name="fullName"
                      placeholder="Name"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      placeholder="Email"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="tel"
                      className="form-control"
                      id="phone"
                      name="phone"
                      placeholder="Phone Number"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Message"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary btn-block p-3"
                    style={{ backgroundColor: '#5D3FD3', color: 'white' }}
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

const Contact = () => {
  return (

    <div className="root-wrapper" >
      <TopBar/>

   <Header/>
    <div className="root contact-wrapper" >
     
    <ContactUsContainer/>

       
  </div>

  <Footer/>
  </div>


  );
};

export default Contact;
