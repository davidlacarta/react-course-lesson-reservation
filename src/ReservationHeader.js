import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import LoginForm from './LoginForm';

const Header = styled.header`
  display: flex;
  justify-content: flex-end;
  padding: 1em;
  background-color: rgb(205, 202, 169);

  span:first-child {
    font-weight: bold;
    margin-right: 1em;
  }

  span:last-child {
    margin-left: 1em;
  }
`;

const UserInfo = () => {
  const user = useSelector(state => state.user);
  if (user) {
    return <span>{user.name}</span>;
  }

  return <LoginForm />;
};

const ReservationHeader = ({ language }) => {
  return (
    <Header>
      <UserInfo />
      <span>{language}</span>
    </Header>
  );
};

export default ReservationHeader;
