import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 80px 20px 20px;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`;

const Title = styled.h2`
  color: #333;
  margin-bottom: 30px;
`;

const PageWrapper = ({ title, children }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      {children}
    </Wrapper>
  );
};

export default PageWrapper;
