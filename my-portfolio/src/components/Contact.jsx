import React from 'react';
import PageWrapper from './PageWrapper';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhoneAlt, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

// Styled container for contact information
const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background: #f8f9fa;
  border-radius: 15px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;

// Styled for individual contact items
const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin: 15px 0;
  font-size: 1.1rem;
  color: #333;
`;

// Icon styling
const Icon = styled(FontAwesomeIcon)`
  margin-right: 10px;
  color: #007bff;
`;

// Styling for the contact heading
const Heading = styled.h4`
  font-size: 1.8rem;
  color: #007bff;
  margin-bottom: 20px;
  text-align: center;
`;

// Content for the paragraph
const ContactText = styled.p`
  font-size: 1rem;
  color: #555;
  line-height: 1.8;
  text-align: center;
`;

// Social media links container
const SocialContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  gap: 20px;
`;

// Social media icon link styling
const SocialLink = styled.a`
  color: #007bff;
  font-size: 1.5rem;
  transition: color 0.3s;

  &:hover {
    color: #0056b3;
  }
`;

const Contact = () => {
  return (
    <PageWrapper title="Contact Me">
      <ContactContainer>
        <ContactItem>
          <Icon icon={faEnvelope} />
          <a href="mailto:sreenithagaripelli@gmail.com">sreenithagaripelli@gmail.com</a>
        </ContactItem>
        <ContactItem>
          <Icon icon={faPhoneAlt} />
          <a href="tel:9542458102">+91 9542458102</a>
        </ContactItem>
        <ContactItem>
          <Icon icon={faMapMarkerAlt} />
          Mahabubabad, Telangana, India
        </ContactItem>

        <Heading>Get in Touch</Heading>
        <ContactText>
          I am always open to collaboration and networking opportunities. Whether you're interested in discussing a potential project,
          exploring innovative ideas, or just connecting, feel free to reach out!
        </ContactText>

        <SocialContainer>
          <SocialLink href="https://github.com/{your-github}" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </SocialLink>
          <SocialLink href="https://www.linkedin.com/in/{your-linkedin}" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </SocialLink>
        </SocialContainer>
      </ContactContainer>
    </PageWrapper>
  );
};

export default Contact;
