import React from 'react';
import PageWrapper from './PageWrapper';
import styled from 'styled-components';

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
`;

const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 20px;
  margin: 20px 0;
  justify-items: center;
`;

const SkillCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f5f5f5;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
  width: 100px;

  &:hover {
    transform: translateY(-5px);
  }
`;

const SkillIcon = styled.img`
  width: 50px;
  margin-bottom: 10px;
`;

const SkillLabel = styled.p`
  font-size: 0.9rem;
  color: #333;
  margin: 0;
`;

const Section = styled.div`
  margin: 30px 0;
  width: 100%;
`;

const SectionTitle = styled.h4`
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: #0073e6;
  border-bottom: 2px solid #0073e6;
  padding-bottom: 5px;
  text-align: center;
`;

const SectionContent = styled.p`
  font-size: 1rem;
  color: #555;
  line-height: 1.6;
  text-align: center;
`;

const Profile = () => {
  return (
    <PageWrapper title="Profile">
      <ProfileContainer>
        <SectionContent>
          I am an aspiring software engineer aiming to contribute to innovative projects and work with talented teams to develop high-quality software. 
          I have experience in various programming languages and technologies.
        </SectionContent>
        
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
          </SkillsContainer>
        </Section>
        
        <Section>
          <SectionTitle>Education</SectionTitle>
          <SectionContent>
            Bachelor of Technology in Computer Science and Engineering<br />
            Anurag University, Hyderabad<br />
            CGPA: 7.72
          </SectionContent>
        </Section>
        
        <Section>
          <SectionTitle>Interests</SectionTitle>
          <SectionContent>
            - Web Development<br />
            - Open Source Contributions<br />
            - Learning New Technologies<br />
            - UI/UX Design
          </SectionContent>
        </Section>
      </ProfileContainer>
    </PageWrapper>
  );
};

export default Profile;
