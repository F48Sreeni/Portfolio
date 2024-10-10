import React from 'react';
import PageWrapper from './PageWrapper';
import styled from 'styled-components';
import profileImg from '../assets/profile.png';

// Background styling with a gradient overlay for a premium look
const Background = styled.div`
  background: linear-gradient(135deg, #f8f9fa, #e9ecef),
    url('https://source.unsplash.com/1600x900/?technology') no-repeat center center/cover;
  padding: 100px 20px;
  color: white;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

// Container for the profile section
const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
`;

// Profile image with hover effect
const ProfileImage = styled.img`
  width: 180px;
  height: 180px;
  border-radius: 30%;
  border: 3px solid #ffd700;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.1);
  }
`;

// Styled welcome message
const WelcomeMessage = styled.h2`
  margin-top: 20px;
  color: #black;
  font-size: 2rem;
  font-weight: bold;
`;

// Content styling
const Description = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: #black;
  margin-top: 15px;
  margin-bottom: 20px;
`;



const Home = () => {
  return (
    <Background>
      <PageWrapper title="Welcome to My Portfolio">
        <ProfileContainer>
          <ProfileImage src={profileImg} alt="Sreenitha Garipelli" />
          <WelcomeMessage>
            Hi, I'm Sreenitha Garipelli
          </WelcomeMessage>
          <Description>
            As a passionate software engineer, I specialize in developing full-stack web applications that provide intuitive and engaging user experiences. 
            Skilled in modern frameworks and technologies like React, Node.js, and MongoDB, I aim to create impactful digital solutions that help clients achieve their goals.
          </Description>
          <Description>
            Outside of coding, I immerse myself in learning new technologies, exploring the latest trends in web development, and contributing to open-source projects to give back to the community.
          </Description>
        </ProfileContainer>
      </PageWrapper>
    </Background>
  );
};

export default Home;
