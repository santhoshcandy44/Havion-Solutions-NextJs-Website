
'use client'
import Image from "next/image"
import React from 'react'
import { Carousel } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './home.css'
import BusinessImage from './assets/business.jpg'
import TeamImage from './assets/team.jpg'
import LeaderImage from './assets/leader.webp'
import BusinessGrowthImage from './assets/business-growth.png'
import GrowthImage from './assets/growth.png'
import WebDevelopementServicesImage from './assets/web-development-services.png'
import SEOServicesImage from './assets/seo-services.png'
import HTMLImage from './assets/html.png'
import CSSImage from './assets/css.png'
import PythonImage from './assets/python.png'
import PHPImage from './assets/php.png'
import JavaScriptImage from './assets/js.png'
import KotlinImage from './assets/kotlin.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

import { faCogs, faLaptopCode, faChartLine, faLightbulb, faRocket} from '@fortawesome/free-solid-svg-icons'
import { faStar, faStarHalfAlt} from '@fortawesome/free-solid-svg-icons'
import { faQuoteLeft} from '@fortawesome/free-solid-svg-icons'
import EmailImage from "./assets/email.png"
import DailImage from "./assets/dial.png"
import  { useEffect } from 'react'
import Footer from "./footer"
import Header from "./header"
import TopBar from "./topbar"

export default function Home() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('wowjs/dist/wow.js').then(({ WOW }) => {
        const wow = new WOW({
          live: true,
        });
        wow.init();

        return () => {
          wow.stop();
        };
      }).catch(error => {
        console.error('Failed to load WOW.js', error);
      });
    }
  }, []);

  return (
    <div className="root">
      <TopBar/>
      <Header/>
  <CarouselComponent />
      <CompanyName />
      <Services />
      <InfoContainer/>
      <AboutUs />
      <OurServices/>
      <ContactUs />
      <Technologies />
      <WhoWeAreContainer/>
      <TestimonialsContainer/>
      <ContactUsContainer/>
      <Footer/>
    </div>
  


  );
}


function CarouselComponent() {
  return (  
    <Carousel indicators={false} 
    interval={1000}
    >
      <Carousel.Item>
      <div
        className='carousel-img'
        
         
        
        >
<img
      src={BusinessImage.src}
      alt="First slide"
      style={{
        objectFit: 'cover',
        height: '100%',
        opacity: '0.5',
      }}
    />

            </div>

            

        <Carousel.Caption >
        <div className='container' style={{marginLeft:"0"}}>
        <p className='carousel-caption-heading'
   >Find the right solutions with us</p>

        <h1 className='carousel-caption-sub-heading animate__animated animate__slideInLeft'>Welcome to Havion Solutions</h1>
          <a href="#about" className="link-suppress slider-link my-4">
            <b>Learn More</b>
          </a>
        </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
       
      <div
        className='carousel-img'
        
         
        
        >
    <img
      src={TeamImage.src}
      alt="Second slide"
      style={{
        objectFit: 'cover',
        height: '100%',
        opacity: '0.5',
      }}
    />
                </div>


        <Carousel.Caption>
        <div className='container'>
        <p className='carousel-caption-heading'>What We Do</p>

          <h1 className='carousel-caption-sub-heading animate__animated animate__slideInLeft'>Utilize our services to grow up your business</h1>
          <a href="#services" className="link-suppress slider-link my-4">
            <b>Our Services</b>
          </a>

          </div>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <div
        className='carousel-img'
        
         
        
        >

<img
      src={LeaderImage.src}
      alt="Third slide"
      style={{
        objectFit: 'cover',
        height: '100%',
        opacity: '0.5',
      }}
    />
            </div>
            <Carousel.Caption>
            <div  className='container' style={{marginRight:"0"}} >
            <p className='carousel-caption-heading'>Right Place</p>

            <h1 className='carousel-caption-sub-heading animate__animated animate__slideInLeft'>Contact us to build your project in robust way</h1>
          <a href="#contact" className="link-suppress slider-link my-4">
            <b>Contact Us</b>
          </a>
           
       
        
            </div>
            </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

function CompanyName() {
    return (
      <div className="m-4 wow animate__animated animate__bounceInDown" data-wow-delay="0.1s" style={{
        visibility: 'visible',
        animationDuration: '1.5s',
        animationDelay: '0.1s',
        animationName: 'bounceInDown',
      }}>
        <div className="text-center">
          <div className="compnay-name">
            <span style={{ color: '#5D3FD3' }}>Havion Solutions</span> Private Limited
          </div>
        </div>
      </div>
    );
  }
  function Services() {
    return (
      <div className="m-4">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-sm-12 col-md-12 col-lg-4 mb-4 wow animate__animated animate__bounceInDown" data-wow-delay="0.1s" style={{
              visibility: 'visible',
              animationDuration: '1.5s',
              animationDelay: '0.1s',
              animationName: 'bounceInDown',
            }}>
              <div className="custom-card hover-col h-100 d-flex flex-column">
                <h3>Enhance Your Business with Our IT Services</h3>
                <p>
                  We are your trusted IT solutions provider, offering a wide range of services including software development, cybersecurity, cloud computing, and IT consulting. Let us empower your business with innovative technology solutions to your needs.
                </p>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-4  mb-4 wow animate__animated animate__bounceInDown" data-wow-delay="0.2s" style={{
              visibility: 'visible',
              animationDuration: '1.5s',
              animationDelay: '0.2s',
              animationName: 'bounceInDown',
            }}>
              <div className="custom-card hover-col h-100 d-flex flex-column">
                <h3>Your Partner in IT Excellence</h3>
                <p>
                  From managed IT services to custom software development, we offer comprehensive solutions to drive your business forward. Rely on our expertise to optimize your IT infrastructure and deliver exceptional digital experiences.
                </p>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-4 mb-4 wow animate__animated animate__bounceInDown" data-wow-delay="0.3s" style={{
              visibility: 'visible',
              animationDuration: '1.5s',
              animationDelay: '0.3s',
              animationName: 'bounceInDown',
            }}>
              <div className="custom-card hover-col h-100 d-flex flex-column">
                <h3>IT Solutions for a Digital Future</h3>
                <p>
                  Discover how we can transform your business with advanced IT solutions. Whether you need network security, data analytics, or digital transformation services, we have the expertise to propel your business into the digital age.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const InfoContainer = () => {
    return (
      <div className="m-4">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-12 col-md-12 col-lg-6 justify-content-center align-items-center">
              <h2>Choose Us for Your Business Growth</h2>
              <p>

             Our company is a critical component of modern organizations, responsible for the management, implementation, and maintenance of technology infrastructure and services. Here is an overview of typical functions, roles, and responsibilities within an IT department.</p>
            </div>
            <div
              className="col-sm-12 col-md-12 col-lg-6 d-flex justify-content-center align-items-center wow animate__animated animate__bounceInDown"
              data-wow-delay="0.1s"
              style={{
                visibility: 'visible',
                animationDuration: '1.5s',
                animationDelay: '0.1s',
                animationName: 'bounceInDown',
              }}
            >
               <img
      src={BusinessGrowthImage.src}
      alt="Business Growth"

  
     
      style={{ padding: '8px',maxWidth:"320px",width:"100%"}}
    />
            </div>
          </div>
        </div>
      </div>
    );
  };

  


  

  const AboutUs = () => {
    return (
      <div className="m-4" id="about">
        <div className="one">
          <h2>About Us</h2>
        </div>
        <div className="container">
          <div className="row">
            <div
              className="col-sm-12 col-md-12 col-lg-6  justify-content-center align-items-center wow animate__animated animate__bounceInDown"
              data-wow-delay="0.1s"
              style={{
                visibility: 'visible',
                animationDuration: '1.5s',
                animationDelay: '0.1s',
                animationName: 'bounceInDown',
              }}
            >
             <img
      src={GrowthImage.src}
      alt="Growth"
   
      style={{ maxWidth:"320px",width:"100%",padding: '8px' }}
    />
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6 justify-content-center align-items-center">
              <h3 className="px-5" style={{ borderLeft: '4px solid #5D3FD3', color: '#5D3FD3' }}>
                About Havion Solutions And It's Innovative IT Solutions
              </h3>
              <p>
              Havion Solutions specializes in providing a comprehensive range of IT solutions designed to enhance business operations and digital presence. Our services are tailored to meet the unique needs of each client, utilizing the latest tools and techniques to deliver effective and efficient IT solutions.
              </p>
              <h3 className="px-5" style={{ borderLeft: '4px solid #5D3FD3', color: '#5D3FD3' }}>
                Why Choose Us?
              </h3>
              <p>
                If you're a small business aiming to enhance your online presence or a large corporation aiming to drive sales, we've got you covered. Our team is dedicated to empowering our clients, delivering outstanding customer service, and providing top-notch support.
                Are you ready to elevate your business? Reach out to us today to explore our digital marketing and web development offerings and discover how we can assist you in reaching your business objectives. Our team is available to address any inquiries and tailor a solution to suit your unique requirements.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const OurServices = () => {
    return (
      <div className="m-4" id="services">
        <div className="one">
          <h2>Our Services</h2>
        </div>
        <div className="container" style={{ backgroundColor: 'EFF2EF' }}>
          <div className="row align-items-center" id="web-development-services">
            <div className="col-sm-12 col-md-12 col-lg-6 justify-content-center align-items-center">
              <h2 style={{ color: '#5D3FD3' }}>Web Development :-</h2>
              <p>
                We specialize in creating custom websites and web applications to help your business succeed online. Our team of experienced developers and designers is dedicated to building user-friendly and effective digital solutions tailored to your needs.
              </p>
              <h3>What We Offer:</h3>
              <ul>
                <li><strong>Custom Websites:</strong> We design and build unique websites that represent your brand and attract customers.</li>
                <li><strong>Easy-to-Use Designs:</strong> Our websites are intuitive and easy to navigate, ensuring a positive user experience.</li>
                <li><strong>Online Stores:</strong> We can set up secure and efficient e-commerce platforms for selling your products online.</li>
                <li><strong>Web Apps:</strong> From simple tools to complex systems, we develop web applications to streamline your business operations.</li>
                <li><strong>Mobile-Friendly:</strong> Your website will work seamlessly on all devices, including smartphones and tablets.</li>
                <li><strong>Speed and Performance:</strong> We optimize websites for fast loading times and smooth performance.</li>
                <li><strong>SEO Integration:</strong> We make sure your website is search engine friendly to help you reach more customers online.</li>
              </ul>
            </div>
            <div
              className="col-sm-12 col-md-12 col-lg-6 d-flex justify-content-center align-items-center wow animate__animated animate__bounceInDown"
              data-wow-delay="0.1s"
              style={{
                visibility: 'visible',
                animationDuration: '1.5s',
                animationDelay: '0.1s',
                animationName: 'bounceInDown',
              }}
            >
              <img
      src={WebDevelopementServicesImage.src}
      alt="Web Development Services"
      style={{ maxWidth:"320px",width:"100%",padding: '8px 0' }}

      
    />
            </div>
          </div>
          <div className="row align-items-center" id="seo-services">
            <div
              className="col-sm-12 col-md-12 col-lg-6 d-flex justify-content-center align-items-center wow animate__animated animate__bounceInDown"
              data-wow-delay="0.1s"
              style={{
                visibility: 'visible',
                animationDuration: '1.5s',
                animationDelay: '0.1s',
                animationName: 'bounceInDown',
              }}
            >
              <img
      src={SEOServicesImage.src}
      alt="SEO Services"
      style={{ maxWidth: '320px', padding: '8px 0' }}
     
    />
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6 justify-content-center align-items-center">
              <h2 style={{ color: '#5D3FD3' }}>SEO Services :-</h2>
              <p>
                we specialize in Search Engine Optimization (SEO) services designed to boost your website's visibility and performance online. Our comprehensive SEO strategies are tailored to improve various metrics including Domain Authority (DA), Page Authority (PA), and backlink quality, ultimately enhancing your website's ranking on search engines.
              </p>
              <h3>Our SEO Services Include:</h3>
              <ul>
                <li>
                  <strong>Website Optimization:</strong>
                  We optimize your website structure, content, and meta tags to make it more search engine friendly and improve overall performance.
                </li>
                <li>
                  <strong>Keyword Research:</strong>
                  We conduct thorough keyword research to identify relevant and high-performing keywords for your industry and target audience.
                </li>
                <li>
                  <strong>On-Page SEO:</strong>
                  We optimize individual web pages to improve their search engine rankings, including optimizing content, headings, images, and internal links.
                </li>
                <li>
                  <strong>Off-Page SEO:</strong>
                  We implement strategies to build high-quality backlinks from reputable websites, improving your website's authority and credibility.
                </li>
                <li>
                  <strong>Technical SEO:</strong>
                  We address technical aspects of your website such as site speed, mobile-friendliness, and schema markup to enhance user experience and search engine crawling.
                </li>
                <li>
                  <strong>Local SEO:</strong>
                  For businesses targeting local customers, we optimize your website for local search queries to improve visibility in local search results.
                </li>
                <li>
                  <strong>Content Development:</strong>
                  We create engaging and optimized content, including blog posts, articles, and landing pages, to attract organic traffic and support SEO efforts.
                </li>
                <li>
                  <strong>Monitoring and Reporting:</strong>
                  We monitor key SEO metrics such as keyword rankings, traffic, and conversions, providing regular reports and insights to track progress and inform future strategies.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  };


  function ContactUs() {
    return (
      <div className="m-4 wow animate__animated animate__bounceInDown" data-wow-delay="0.1s" style={{
        visibility: 'visible',
        animationDuration: '1.5s',
        animationDelay: '0.1s',
        animationName: 'bounceInDown',
      }}>
        <div className="container info-con p-4" style={{ backgroundColor: '#E6E6FA' }}>
          <div className="row align-items-center">
            <div className="col-sm-12 col-md-12 col-lg-6">
              <h2 style={{ borderLeft: '4px solid #5D3FD3', color: '#5D3FD3' }} className="px-5">
                Call Us
              </h2>
              <p>
                If you find yourself with any questions, concerns, or inquiries, please feel absolutely free to contact us. Our dedicated team is readily available to provide you with the assistance you need.
              </p>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6 d-flex justify-content-center align-items-center">
              <div className="container">
                <div className="col-sm-6">
                  <div className="py-4" style={{ fontSize: '16px' }}>
                    11:00 AM to 6:00 PM Mon-Fri
                  </div>
                  <a
                    className="btn btn-primary btn-xlg p-3"
                    href="tel:713-992-0916"
                    style={{
                      backgroundColor: '#5D3FD3',
                      color: 'white',
                    }}
                  >
                    <i className="fas fa-phone-alt" />
                    <span style={{ marginRight: '10px', padding: '8px 4px' }}>
                      Call Now
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }


function Technologies() {
  return (
    <div className="m-4">
       <div className="one">
          <h2 className="text-center mb-4">Technologies</h2>
          <p className="text-center">
            An major list of the programming languages we work with on the projects, fell free to ask us if the language you use isn’t listed here - we’ll tell you if we can help.
          </p>
        </div>

      <div className="container">
       
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
          <div className="p-4">
          <Image
          
      src={HTMLImage}
      alt="HTML"
      width={100}
      height={100}
      objectFit="cover"
    />
          </div>
          <div className="p-4">
          <Image
      src={CSSImage}
      alt="CSS"
      width={100}
      height={100}
      objectFit="cover"
    />
          </div>
          <div className="p-4">
          <Image
      src={PythonImage}
      alt="Python"
      width={100}
      height={100}
      objectFit="cover"
    />
          </div>
          <div className="p-4">
          <Image
      src={PHPImage}
      alt="PHP"
      width={100}
      height={100}
      objectFit="cover"
    />
          </div>
          <div className="p-4">
          <Image
      src={JavaScriptImage}
      alt="JavaScript"
      width={100}
      height={100}
      objectFit="cover"
    />
          </div>
          <div className="p-4">
          <Image
      src={KotlinImage}
      alt="Kotlin"
      width={100}
      height={100}
      objectFit="cover"
    />
          </div>
        </div>
      </div>
    </div>
  );
}

const WhoWeAreContainer = () => {
    return (
      <div className="m-4">
        <div className="one">
          <h2 className="text-center mb-4">Who We Are?</h2>
        </div>
        <div className="container" id="company">
          <div className="row">
            {/* Card 1 */}
            <div className="col-md-3 mb-4">
              <div className="card h-100 d-flex flex-column justify-content-between" style={{ padding: '16px 8px', textAlign: 'center' }}>
            
              <FontAwesomeIcon icon={faCogs} size="8x" className="mb-4" />
            
                <h5 className="card-title">Exploring Latest Tech Innovations</h5>
                <div className="card-body">
                  <p className="card-text">Discover the forefront of technology with a glimpse into the latest innovations driving change across industries, from AI to cloud computing, opening new avenues for growth and efficiency.</p>
                </div>
              </div>
            </div>
            {/* Card 2 */}
            <div className="col-md-3 mb-4">
              <div className="card h-100 d-flex flex-column justify-content-between" style={{ padding: '16px 8px', textAlign: 'center' }}>


              <FontAwesomeIcon icon={faLaptopCode} size="8x" className="mb-4" />

                <h5 className="card-title">Discover Comprehensive IT Services</h5>
                <div className="card-body">
                  <p className="card-text">Explore a range of comprehensive IT services tailored to meet diverse business needs, offering solutions from infrastructure management to cybersecurity, ensuring reliability, scalability, and innovation.</p>
                </div>
              </div>
            </div>
            {/* Card 3 */}
            <div className="col-md-3 mb-4">
              <div className="card h-100 d-flex flex-column justify-content-between" style={{ padding: '16px 8px', textAlign: 'center' }}>

              <FontAwesomeIcon icon={faChartLine} size="8x" className="mb-4" />
                <h5 className="card-title">Inside Vision for Industry Evolution</h5>
                <div className="card-body">
                  <p className="card-text">Peek into our vision for industry evolution, driven by forward-thinking strategies and emerging technologies, reshaping industries, streamlining processes, and fostering sustainable growth.</p>
                </div>
              </div>
            </div>
            {/* Card 4 */}
            <div className="col-md-3 mb-4">
              <div className="card h-100 d-flex flex-column justify-content-between" style={{ padding: '16px 8px', textAlign: 'center' }}>


              <FontAwesomeIcon icon={faLightbulb} size="8x" className="mb-4" />
                <h5 className="card-title">Unveiling Impactful IT Solutions</h5>
                <div className="card-body">
                  <p className="card-text">Witness the unveiling of impactful IT solutions designed to revolutionize business operations, from enhancing communication to optimizing workflows, paving the way for efficiency and growth.</p>
                </div>
              </div>
            </div>
            {/* Card 5 */}
            <div className="col-md-12 mb-4">
              <div className="card h-100 d-flex flex-column justify-content-between" style={{ padding: '16px 8px', textAlign: 'center' }}>

              <FontAwesomeIcon icon={faRocket} size="8x" className="mb-4" />


                <h5 className="card-title">Experience Future-Forward Technology</h5>
                <div className="card-body">
                  <p className="card-text">Dive into the world of tomorrow's technology with us as we lead the charge in innovation and advancement. Our forward-looking strategies and state-of-the-art solutions are set to transform how businesses function, opening doors to fresh possibilities and fueling success in an ever-changing digital world.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };


  
const TestimonialsContainer = () => {
    return (
      <div
        className="m-4 wow animate__animated animate__bounceInDown"
        data-wow-delay="0.1s"
        style={{
          visibility: 'visible',
          animationDuration: '1.5s',
          animationDelay: '0.1s',
          animationName: 'bounceInDown',
        }}
      >
        <div className="one">
          <h2 className="text-center mb-4">TESTIMONIALS</h2>
        </div>
  
        <div
          className="col-lg-10 offset-lg-1 pt-5 pb-5 mb-4"
          style={{ backgroundColor: 'lavender' }}
        >
          <Carousel
            id="client-testimonial-carousel"
            style={{ height: '200px' }}
          >
            <Carousel.Item>
              <blockquote className="blockquote text-center">
                <p className="mx-4">
                <FontAwesomeIcon icon={faQuoteLeft} /> I got website form my business, it is working good.
                </p>
                <div className='blockquote-footer' >Suresh</div>
                <p className="client-review-stars">
                <FontAwesomeIcon icon={faStar} />
      <FontAwesomeIcon icon={faStar} />
      <FontAwesomeIcon icon={faStar} />
      <FontAwesomeIcon icon={faStar} />
      <FontAwesomeIcon icon={faStar} />
                </p>
              </blockquote>
            </Carousel.Item>
  
            <Carousel.Item >
              <blockquote className="blockquote text-center">
                <p className="mx-4">
                <FontAwesomeIcon icon={faQuoteLeft} /> My website is ranking on the top of the results, and i am satisfied.
                </p>
                <div className='blockquote-footer'>Ram</div>
                <p className="client-review-stars">
                <FontAwesomeIcon icon={faStar} />
      <FontAwesomeIcon icon={faStar} />
      <FontAwesomeIcon icon={faStar} />
      <FontAwesomeIcon icon={faStar} />

      <FontAwesomeIcon icon={faStarHalfAlt} />
                </p>
              </blockquote>
            </Carousel.Item>
  
            <Carousel.Item >
              <blockquote className="blockquote text-center">
                <p className="mx-4">
                <FontAwesomeIcon icon={faQuoteLeft} /> I bought link building services from havion solutions, and i could see results in few months.
                </p>
                <div className='blockquote-footer'>Shiva</div>
                <p className="client-review-stars">
                <FontAwesomeIcon icon={faStar} />
      <FontAwesomeIcon icon={faStar} />
      <FontAwesomeIcon icon={faStar} />
      <FontAwesomeIcon icon={faStar} />
      <FontAwesomeIcon icon={faStar} />
                </p>
              </blockquote>
            </Carousel.Item>
          </Carousel>
  
         
        </div>
      </div>
    );
  };

  const ContactUsContainer = () => {
    return (
      <div
        id="contact"
        className="m-4 wow animate__animated animate__bounceInDown"
        data-wow-delay="0.1s"
        style={{
          visibility: 'visible',
          animationDuration: '1.5s',
          animationDelay: '0.1s',
          animationName: 'bounceInDown',
        }}
      >
        <div className="one">
          <h2 className="text-center mb-4">Contact Us</h2>
        </div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-12 col-md-6">
              <h2
                style={{ borderLeft: '4px solid #5D3FD3', color: '#5D3FD3' }}
                className="px-5"
              >
                Get in Touch with Us
              </h2>
              <p className="py-5">
                Thank you for interest in our service. Please reach us form below Phone or e-mail and we will get back to you promptly regarding your request.
              </p>
              <div className="custom-card">
                <div>


                <img
      src={DailImage.src}
      alt="Dail"
      
      style={{ maxWidth: '52px',width:"100%",float: 'left' }}
    />                  <h6
                    style={{
                      marginLeft: '80px',
                      justifyContent: 'center',
                      textAlign: 'center',
                    }}
                  >
                    +91 90423-33092
                    <br />
                    <span style={{ color: 'gray' }}>Phone Number</span>
                  </h6>
                </div>
              </div>
              <div className="custom-card">
                <div>

                <img
                 
                  alt="Email"
      src={EmailImage.src}
    
      style={{ maxWidth: '52px',width:"100%", float: 'left' }}
    />                  <h6
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
              className="col-sm-12 col-md-6 justify-content-center align-items-center"
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

