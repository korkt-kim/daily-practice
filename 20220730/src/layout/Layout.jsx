import React from 'react';
import { css } from '@emotion/react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Layout({ children }) {
  return (
    <div
      css={css`
        max-width: 100%;
        width: 100%;
        padding: 0;
        margin: 0;
        height: auto;
      `}
    >
      <div
        css={css`
          background: blue;
        `}
      >
        {children}
      </div>
    </div>
  );
}

const HeaderTypeA = () => (
  <Header justifyContent="space-between">
    <Header.H1>aisjdfoi;asjdgopaisjdg2222222222222222222222222222222222</Header.H1>
    <div
      css={css`
        flex-shrink: 0;
        > button {
          margin-right: 10px;
        }
      `}
    >
      <Header.Button>
        <i class="fas fa-cloud"></i>
      </Header.Button>
      <Header.Button>
        <i class="fas fa-cloud"></i>
      </Header.Button>
      <Header.Button>
        <i class="fas fa-cloud"></i>
      </Header.Button>
    </div>
  </Header>
);

const HeaderTypeB = () => (
  <Header>
    <Header.H1
      css={css`
        flex-basis: 200px;
      `}
    >
      aisjdfoi;asjdgopaisjdg2222222222222222222222222222222222
    </Header.H1>
    <Header.Button>
      <i class="fas fa-cloud"></i>
    </Header.Button>
    <Header.Button>
      <i class="fas fa-cloud"></i>
    </Header.Button>
    <Header.Button>
      <i class="fas fa-cloud"></i>
    </Header.Button>
  </Header>
);

const FooterTypeA = () => (
  <Footer justifyContent="space-around">
    <Footer.Button startIcon={<i class="fas fa-cloud"></i>}>back</Footer.Button>
    <Footer.Button startIcon={<i class="fas fa-cloud"></i>}>home</Footer.Button>
    <Footer.Button startIcon={<i class="fas fa-cloud"></i>}>next</Footer.Button>
  </Footer>
);

const FooterTypeB = () => (
  <Footer>
    <Footer.Button>asdf</Footer.Button>
  </Footer>
);

Layout.HeaderTypeA = HeaderTypeA;
Layout.HeaderTypeB = HeaderTypeB;

Layout.FooterTypeA = FooterTypeA;
Layout.FooterTypeB = FooterTypeB;

export default Layout;

//page
