import React from 'react';
import PageWrapper from './PageWrapper';
import styled from 'styled-components';

// Main container for the profile page
const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  max-width: 1000px;
  margin: 0 auto;
  background: linear-gradient(135deg, #f8f9fa, #e9ecef);
  border-radius: 15px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  margin-top: 50px;
`;

// Container for the skills grid layout
const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 20px;
  margin: 20px 0;
  justify-items: center;
`;

// Styling for individual skill cards
const SkillCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
  width: 120px;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  }
`;

// Styling for the skill icon image
const SkillIcon = styled.img`
  width: 60px;
  margin-bottom: 10px;
`;

// Skill label styling
const SkillLabel = styled.p`
  font-size: 1rem;
  color: #333;
  margin: 0;
`;

// Section styling for different parts of the profile
const Section = styled.div`
  margin: 40px 0;
  width: 100%;
  text-align: center;
`;

// Section title styling
const SectionTitle = styled.h4`
  font-size: 1.8rem;
  margin-bottom: 20px;
  color: #007bff;
  border-bottom: 3px solid #007bff;
  display: inline-block;
  padding-bottom: 5px;
`;

// Content for each section
const SectionContent = styled.p`
  font-size: 1.1rem;
  color: #555;
  line-height: 1.8;
`;

// Button for interactivity and navigation
const ActionButton = styled.a`
  display: inline-block;
  margin-top: 30px;
  padding: 10px 25px;
  background-color: #007bff;
  color: white;
  border-radius: 25px;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

const Profile = () => {
  return (
    <PageWrapper title="Profile">
      <ProfileContainer>
        {/* Introduction */}
        <SectionContent>
          I am an aspiring software engineer aiming to contribute to innovative projects and work with talented teams to develop high-quality software. 
          I have experience in various programming languages and technologies, and I'm passionate about building scalable, efficient solutions.
        </SectionContent>
        
        {/* Skills Section */}
        <Section>
          <SectionTitle>Skills</SectionTitle>
          <SkillsContainer>
            <SkillCard>
              <SkillIcon src="https://img.icons8.com/color/48/000000/java-coffee-cup-logo.png" alt="Java" />
              <SkillLabel>Java</SkillLabel>
            </SkillCard>
            <SkillCard>
              <SkillIcon src="https://img.icons8.com/color/48/000000/mysql-logo.png" alt="MySQL" />
              <SkillLabel>MySQL</SkillLabel>
            </SkillCard>
            <SkillCard>
              <SkillIcon src="https://img.icons8.com/js" alt="JavaScript" />
              <SkillLabel>JavaScript</SkillLabel>
            </SkillCard>
            <SkillCard>
              <SkillIcon src="https://img.icons8.com/color/48/000000/react-native.png" alt="ReactJS" />
              <SkillLabel>ReactJS</SkillLabel>
            </SkillCard>
            <SkillCard>
              <SkillIcon src="https://img.icons8.com/color/48/000000/python.png" alt="Python" />
              <SkillLabel>Python</SkillLabel>
            </SkillCard>
            <SkillCard>
              <SkillIcon src="https://img.icons8.com/?size=100&id=54087&format=png&color=000000" alt="NodeJS" />
              <SkillLabel>NodeJs</SkillLabel>
            </SkillCard>
            <SkillCard>
              <SkillIcon src="https://img.icons8.com/?size=100&id=bosfpvRzNOG8&format=png&color=000000" alt="MogoDb" />
              <SkillLabel>MongoDB</SkillLabel>
            </SkillCard>
            
          </SkillsContainer>
        </Section>
        
        {/* Education Section */}
        <Section>
          <SectionTitle>Education</SectionTitle>
          <SectionContent>
            Bachelor of Technology in Computer Science and Engineering<br />
            Anurag University, Hyderabad<br />
            CGPA: 7.72
          </SectionContent>
        </Section>
        
        {/* Interests Section */}
        <Section>
          <SectionTitle>Interests</SectionTitle>
          <SectionContent>
            - Web Development<br />
            - Open Source Contributions<br />
            - Learning New Technologies<br />
            - UI/UX Design
          </SectionContent>
        </Section>
        
        {/* Call-to-Action Button */}
        <ActionButton href="#contact">
          Connect with Me
        </ActionButton>
      </ProfileContainer>
    </PageWrapper>
  );
};

export default Profile;
