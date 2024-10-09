import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const FooterWrapper = styled.footer`
  background: #333;
  color: white;
  padding: 20px;
  text-align: center;
`;

const SocialIcons = styled.div`
  margin: 10px 0;

  a {
    color: white;
    margin: 0 10px;
    text-decoration: none;
    font-size: 24px;
    transition: color 0.3s;

    &:hover {
      color: #ffd700;
    }
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <p>© 2024 Sreenitha Garipelli. All rights reserved.</p>
      <SocialIcons>
        <a href="https://github.com/{your-username}" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://www.linkedin.com/in/{your-linkedin}/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </SocialIcons>
    </FooterWrapper>
  );
};

export default Footer;
