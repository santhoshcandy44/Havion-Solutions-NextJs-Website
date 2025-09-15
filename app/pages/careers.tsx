import './careers.css'
import Footer from "../footer";
import Header from "../header"
import 'bootstrap/dist/css/bootstrap.min.css';
import TopBar from "../topbar";


import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers",
  description: "At our company, we are always looking for talented individuals to join our growing team. If you are passionate about technology, driven to succeed, and eager to learn, we want to hear from you.",
  alternates: {
    canonical: 'https://havionsolutions/careers/',
  },
};



const Career = () => {
  return (

    <div className="root-wrapper">
          <TopBar/>
       <Header/>
     
   <div className="root career-wrapper" >
  

   <div className="container">
        <div>
          <h1>Join Our Team</h1>
          <p>
            At our company, we are always looking for talented individuals to join our
            growing team. If you are passionate about technology, driven to succeed,
            and eager to learn, we want to hear from you.
          </p>

          <h2>Current Openings</h2>
          <ul>
            <li>
              <h3>Front-End Developer</h3>
              <p>
                We are seeking a skilled Front-End Developer to join our team. You
                should have experience with React, JavaScript, and CSS.
              </p>
            </li>
            <li>
              <h3>Back-End Developer</h3>
              <p>
                We are looking for a Back-End Developer proficient in Node.js and
                Express to work on our server-side applications.
              </p>
            </li>
            <li>
              <h3>UI/UX Designer</h3>
              <p>
                We need a talented UI/UX Designer to create visually appealing and
                user-friendly interfaces for our web applications.
              </p>
            </li>
          </ul>

          <h2>Why Work with Us?</h2>
          <ul>
            <li>Competitive salary and benefits</li>
            <li>Opportunities for growth and advancement</li>
            <li>Collaborative and supportive work environment</li>
            <li>Flexible work arrangements</li>
          </ul>

          <h2>How to Apply</h2>
          <p>
            If you are interested in any of the open positions, please send your
            resume and cover letter to{' '}
            <a href="mailto:careers@havionsolutions.com">careers@havionsolutions.com</a>.
          </p>
        </div>
      </div>


      
  </div>
  <Footer/>
    </div>
 


  );
};

export default Career;
