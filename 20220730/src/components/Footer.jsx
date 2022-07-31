import React from 'react';
import { css } from '@emotion/react';

const Button = ({ children, startIcon, backgroundColor }) => {
  return (
    <button
      css={css`
        cursor: pointer;
        width: 200px;
        height: 50px;
        border-radius: 20px;
        color: blue;
        background-color: ${backgroundColor || 'white'};
      `}
    >
      {startIcon && (
        <span
          css={css`
            margin-right: 20px;
          `}
        >
          {startIcon}
        </span>
      )}
      {children}
    </button>
  );
};

function Footer({ justifyContent, children }) {
  return (
    <div
      css={css`
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100px;
        background-color: red;
      `}
    >
      <div
        css={css`
          display: flex;
          justify-content: ${justifyContent || 'unset'};
          padding: 20px;
        `}
      >
        {children}
      </div>
    </div>
  );
}

Footer.Button = Button;

export default Footer;
