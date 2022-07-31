import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './layout/layout';
import PageA from './Pages/PageA';
import PageB from './Pages/PageB';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route
            path="/a"
            element={
              <>
                <Layout.HeaderTypeA />
                <PageA />
                <Layout.FooterTypeA />
              </>
            }
          ></Route>
          <Route
            path="/b"
            element={
              <>
                <Layout.HeaderTypeA />
                <PageB />
                <Layout.FooterTypeB />
              </>
            }
          ></Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
