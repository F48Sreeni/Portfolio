import React from 'react';
import PageWrapper from './PageWrapper';
import styled from 'styled-components';
import profileImg from '../assets/profile.png';

const Background = styled.div`
  background: url('https://source.unsplash.com/1600x900/?technology') no-repeat center center/cover;
  padding: 80px 0;
  color: white;
  min-height: 100vh;
`;

const ProfileImage = styled.img`
  width: 150px;
  border-radius: 1%;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;

const WelcomeMessage = styled.h3`
  margin-top: 20px;
  color: #ffd700;
`;

const Home = () => {
  return (
    <Background>
      <PageWrapper title="Welcome to My Portfolio">
        <ProfileImage 
          src={profileImg} 
          alt="Sreenitha Garipelli"
        />
        <WelcomeMessage>
          I am Sreenitha Garipelli, an aspiring software engineer passionate about building efficient software solutions.
        </WelcomeMessage>
        <p>
          I specialize in developing full-stack web applications using modern frameworks and technologies like React, Node.js, and MongoDB. 
          My goal is to create applications that provide exceptional user experiences and meet the needs of clients and users alike.
        </p>
        <p>
          When I'm not coding, I enjoy learning new technologies, exploring the latest trends in web development, and contributing to open-source projects.
        </p>
      </PageWrapper>
    </Background>
  );
};

export default Home;
