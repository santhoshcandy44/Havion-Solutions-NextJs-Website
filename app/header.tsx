"use client"
import Link from 'next/link';
import logo from './assets/logo.png';
import './header.css'
import { usePathname } from 'next/navigation';
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

const Header = () => {
  const pathname = usePathname();
  const reLoad=(path:string) =>window.location.href=path

  return (
    <header
      style={{
        position: 'sticky',
        backgroundColor: 'white',
        top: 0,
        zIndex: 100,
      }}
    >
      <div>
        <nav className="h-sticky-navbar">
          <div className="navbar-container nav-container">
            <input type="checkbox" name="" id="" />
            <div className="hamburger-lines">
              <span className="line line1"></span>
              <span className="line line2"></span>
              <span className="line line3"></span>
            </div>
            <ul className="menu-items">
              <li>
                <Link href="/" passHref className={(pathname==="/" ? 'active' : '')} 
                
                onClick={e=>reLoad("/")}
                >
                Home
                </Link>
              </li>
              { pathname==="/" && (

               
                <>
                  <li>
                    <Link href="/#web-development-services"  passHref>
                    Web Development
                     
                    </Link>
                  </li>
                  <li>
                    <Link href="/#seo-services" passHref>
                      SEO
                    </Link>
                  </li>
                </>
              )}
              <li>
                <Link href="/about/" passHref className={(pathname==="/about/" ? 'active' : '')}
                
                
                onClick={e=>reLoad("/about/")}

                >
                
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact/" passHref className={(pathname==="/contact/" ? 'active' : '')}
                
                onClick={e=>reLoad("/contact/")}

                >
                
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/careers/" passHref className={(pathname==="/careers/" ? 'active' : '')}
                
                onClick={e=>reLoad("/careers/")}

                >
                Careers
                </Link>
              </li>
            </ul>
            <Link href="/" className="logo-wrapper">
            <img
                   src={logo.src}
                   className='logo'
                   alt="Logo"
                   style={{
                     height: '100%',
                     maxHeight: '80px',
                   }}
                 />
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;