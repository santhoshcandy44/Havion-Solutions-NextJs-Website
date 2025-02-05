import './about.css'
import Footer from "../footer";
import Header from "../header"
import 'bootstrap/dist/css/bootstrap.min.css';
import TopBar from "../topbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Havion Solutions is here to support businesses with digital marketing, web development, and SEO services. We offer PPC, Social Media Marketing, Web Development, SEO, and more. Our tailored strategies match each client's needs, using the latest tools and techniques to deliver effective campaigns that achieve real results.",
  alternates: {
    canonical: 'https://havionsolutions/about/',
  },
};


const About = () => {
  return (

    <div className="root-wrapper">
       <TopBar/>
       <Header/>
     
   <div className="root about-wrapper">
  


        <div className='container '>
        <div>
      <h1>Havion Solutions</h1>
      <p>
        Havion Solutions is here to support businesses with digital marketing, web
        development, and SEO services. We offer PPC, Social Media Marketing, Web
        Development, SEO, and more. Our tailored strategies match each client's
        needs, using the latest tools and techniques to deliver effective
        campaigns that achieve real results.
      </p>
      <h2>Our Innovative IT Solutions</h2>
      <p>
        At Havion Solutions, we pride ourselves on our innovative approach to
        delivering IT solutions. Our team of experts is dedicated to staying
        up-to-date with the latest technologies and industry trends, ensuring
        that we can provide our clients with cutting-edge solutions that meet
        their unique needs.
      </p>
      <h2>Products and Services</h2>
      <p>
        We offer a wide range of products and services, including: Digital
        Marketing, Web Development, Search Engine Optimization (SEO), Pay-Per-Click
        (PPC) Advertising, and Social Media Marketing.
      </p>
      <h2>Target Market</h2>
      <p>
        Our target market includes small and medium-sized businesses across
        various industries, with a focus on the technology and e-commerce
        sectors.
      </p>
      <h2>Competitive Advantage</h2>
      <p>
        Our key competitive advantages are our deep industry expertise, innovative
        approach, and commitment to delivering measurable results for our clients.
        We leverage the latest tools and techniques to ensure that our clients
        stay ahead of the competition.
      </p>
      <h2>Management Team</h2>
      <p>
        Our experienced management team includes industry veterans with a proven
        track record of success in the IT and digital marketing fields. They
        bring a wealth of knowledge and expertise to the table, ensuring that
        our clients receive the highest level of service and support.
      </p>
      <h2>Goals</h2>
      <p>
        Our primary goals are to expand our market share, develop new innovative
        solutions, and continue to provide exceptional service to our clients.
        We are committed to helping businesses of all sizes achieve their digital
        marketing and IT objectives.
      </p>
    </div>


        </div>


      
  </div>
  <Footer/>
    </div>
 


  );
};

export default About;
