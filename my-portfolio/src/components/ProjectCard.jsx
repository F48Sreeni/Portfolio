import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background: #f9f9f9;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-5px);
  }

  img {
    width: 100%;
    border-radius: 10px;
  }
`;

const ProjectCard = ({ title, description, image }) => {
  return (
    <Card>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </Card>
  );
};

export default ProjectCard;
