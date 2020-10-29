import React from 'react';
import { DB } from 'db';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Users = () => {
  return (
    <UserList>
      {
        DB.users.map(user =>
          <Link key={user.id} to={`/users/${user.id}`}>
            <UserRow>
              {user.name}
            </UserRow>
          </Link>
        )
      }
    </UserList>
  )
}

const UserList = styled.ul`
  list-style: none;
`;

const UserRow = styled.li`
  color: black;
  margin-top: 10px;
`;