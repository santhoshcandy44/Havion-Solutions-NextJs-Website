
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import './topbar.css';
const TopBar = () => {
  return (
    <div className="top-bar">
      <div>
        <FontAwesomeIcon
          icon={faEnvelope}
          style={{
            marginRight: '8px',
            color: 'white',
          }}
        />
        <a
          href="mailto:info@example.com"
          style={{
            textDecoration: 'none',
            color: 'white',
          }}
        >
          info@havionsolutions.com
        </a>
      </div>
      <div className="social-icons">
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="top-bar-social-icon"
        >
          <FontAwesomeIcon icon={faFacebookF} size="1x" />
        </a>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="top-bar-social-icon"
        >
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="top-bar-social-icon"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
    </div>
  );
};

export default TopBar;
