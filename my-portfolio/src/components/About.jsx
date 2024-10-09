import React from 'react';
import PageWrapper from './PageWrapper';
import ProjectCard from './ProjectCard';
import styled from 'styled-components';
import project1Img from '../assets/flightnex.jpg'; // replace with actual project image
import project2Img from '../assets/blood-donor.jpg'; // replace with actual project image

// Styled container for centering the projects
const ProjectsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center; /* Centers items horizontally */
  align-items: center; /* Centers items vertically */
  min-height: 60vh; /* Ensures the container takes up most of the screen height */
  margin: 0 auto; /* Centers the container itself */
  width: 80%;
  max-width: 1200px; /* Optional: To restrict the width for larger screens */
  padding: 20px; /* Optional: Adds padding around the container */
`;

// Main section styling for text content
const Section = styled.div`
  margin: 30px 0;
  text-align: center;
`;

// Styled heading for future goals
const FutureGoalsTitle = styled.h4`
  font-size: 1.8rem;
  margin-bottom: 20px;
  color: #007bff;
  border-bottom: 3px solid #007bff;
  display: inline-block;
  padding-bottom: 5px;
`;

// Paragraph styling for the content
const SectionContent = styled.p`
  font-size: 1.1rem;
  color: #555;
  line-height: 1.8;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;

// Styling for the intro paragraph
const IntroParagraph = styled(SectionContent)`
  margin-top: 20px;
  font-size: 1.2rem;
  color: #333;
`;

const projects = [
  {
    title: 'FlightNex',
    description: 'A flight ticket booking system built with the MERN stack, featuring a user-friendly interface for searching and booking flights.',
    image: project1Img,
  },
  {
    title: 'Blood Bank Management System',
    description: 'A platform that connects blood donors with recipients, providing easy access to donor information based on location.',
    image: project2Img,
  },
];

const About = () => {
  return (
    <PageWrapper title="My Projects">
      <Section>
        <IntroParagraph>
          I am currently pursuing a Bachelor of Technology in Computer Science and Engineering at Anurag University. 
          My passion lies in developing efficient and user-centric software solutions. Below are some of the projects 
          I’ve built to hone my skills and provide real-world solutions:
        </IntroParagraph>
      </Section>
      
      <ProjectsContainer>
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </ProjectsContainer>

      <Section>
        <FutureGoalsTitle>Future Goals</FutureGoalsTitle>
        <SectionContent>
          As I continue my journey as a software engineer, I aim to contribute to innovative projects that solve real-world problems.
          My goal is to work in a challenging and dynamic environment where I can collaborate with talented professionals 
          while expanding my expertise in cutting-edge technologies.
        </SectionContent>
      </Section>
    </PageWrapper>
  );
};

export default About;
