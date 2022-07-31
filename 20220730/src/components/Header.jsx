import React from 'react';
import { css } from '@emotion/react';

const Button = ({ children }) => {
  return (
    <button
      css={css`
        height: 50px;
        width: 50px;
        border-radius: 32px;
        background-color: purple;
      `}
    >
      {children}
    </button>
  );
};

const H1 = ({ children, color }) => {
  return (
    <h1
      css={css`
        color: ${color || 'black'};
        flex-shrink: 1;
        flex-basis: 400px;
        word-break: break-all;
      `}
    >
      {children}
    </h1>
  );
};

function Header({ justifyContent, children }) {
  return (
    <div
      css={css`
        height: 100px;
        width: 100%;
        background-color: yellow;
        display: flex;
        justify-content: ${justifyContent || 'unset'};
        align-items: center;
      `}
    >
      {children}
    </div>
  );
}

Header.H1 = H1;

Header.Button = Button;

export default Header;
