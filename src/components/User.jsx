import React from 'react';
import { DB } from 'db';
import styled from 'styled-components';

export const User = (props) => {
  let user = DB.users.find( (item) => item.id == props.match.params.id)

  return (
    <UserTable>
      <tbody>
        <tr>
          <UserTd>ID</UserTd>
          <UserTd>{user.id}</UserTd>
        </tr>
        <tr>
          <UserTd>Name</UserTd>
          <UserTd>{user.name}</UserTd>
        </tr>
        <tr>
          <UserTd>Age</UserTd>
          <UserTd>{user.age}</UserTd>
        </tr>
        <tr>
          <UserTd>Country</UserTd>
          <UserTd>{user.country}</UserTd>
        </tr>
        <tr>
          <UserTd>Book</UserTd>
          <UserTd>{user.favoriteBook}</UserTd>
        </tr>
      </tbody>
    </UserTable>
  )
}

const UserTable = styled.table`
  border: 1px solid gray;
  margin-left: 20px;
  margin-top: 50px;
  background: lightgray;
`;
const UserTd = styled.td`
  border: 1px solid gray;
  padding: 5px 10px;
`;
