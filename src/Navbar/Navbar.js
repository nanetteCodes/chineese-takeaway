import React from 'react';
import styled from 'styled-components';
import { pizzaRed } from '../Styles/colors';
import { TitleMain } from '../Styles/title';

export const NavbarStyled = styled.div`
  background-color: ${pizzaRed};
  padding: 10px;
  position: fixed;
  width: 100%;
  z-index: 999;
  display: flex;
  justify-content: space-between;
`;
const Logo = styled(TitleMain)`
  font-size: 30px;
  color: white;
  text-shadow: 1px 1px 4px black;
  letter-spacing: 1px;
`;
const UserStatus = styled.div`
  color: white;
  font-size: 12px;
  margin-right: 30px;
`;

const LoginButton = styled.span`
  cursor: pointer;
`;
export function Navbar({ login, loggedIn, logout }) {
  return (
    <NavbarStyled>
      <Logo>
        Chinese Takeaway{' '}
        <span role="img" aria-label="chopsticks">
          🥢
        </span>
      </Logo>
      <UserStatus>
        {loggedIn !== 'loading' ? (
          <>
            {loggedIn ? `👤 Hi, ${loggedIn.displayName} ` : ''}
            {loggedIn ? (
              <LoginButton onClick={logout}> Log out </LoginButton>
            ) : (
              <LoginButton onClick={login}> Log in </LoginButton>
            )}
          </>
        ) : (
          'loading...'
        )}
      </UserStatus>
    </NavbarStyled>
  );
}
