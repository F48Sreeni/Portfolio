import React from 'react';
import PageWrapper from './PageWrapper';
import ProjectCard from './ProjectCard';
import styled from 'styled-components';
import project1Img from '../assets/flightnex.jpg'; // replace with actual project image
import project2Img from '../assets/blood-donor.jpg'; // replace with actual project image

const ProjectsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 20px;
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
      <p>
        I am currently pursuing a Bachelor of Technology in Computer Science and Engineering at Anurag University. 
        Here are some of the projects I've worked on:
      </p>
      <ProjectsContainer>
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </ProjectsContainer>
      <h4>Future Goals</h4>
      <p>
        I aspire to work as a software engineer in a challenging environment where I can contribute to meaningful projects 
        while continuing to grow and expand my skill set in technology and software development.
      </p>
    </PageWrapper>
  );
};

export default About;
