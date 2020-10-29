import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Header = () => {
  return (
    <div>
      <Link to='/users'>
        <HeaderLink>
          Users
        </HeaderLink>
      </Link>
    </div>
  )
}

const HeaderLink = styled.span`
  color: black;
`;