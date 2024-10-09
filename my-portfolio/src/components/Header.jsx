import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  background: linear-gradient(90deg, rgba(34, 193, 195, 1) 0%, rgba(253, 187, 45, 1) 100%);
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: fixed;
  width: 100%;
  z-index: 1000;
`;

const Ul = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: center;
  margin: 0;
`;

const Li = styled.li`
  margin: 0 15px;
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-weight: bold;
  font-size: 18px;
  transition: color 0.3s;

  &:hover {
    color: #ffd700;
  }
`;

const Header = () => {
  return (
    <Nav>
      <Ul>
        <Li><StyledLink to="/">Home</StyledLink></Li>
        <Li><StyledLink to="/profile">Profile</StyledLink></Li>
        <Li><StyledLink to="/about">About</StyledLink></Li>
        <Li><StyledLink to="/contact">Contact</StyledLink></Li>
      </Ul>
    </Nav>
  );
};

export default Header;
