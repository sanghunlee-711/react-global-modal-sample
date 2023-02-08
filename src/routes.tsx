import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './common/components/Layout';
import About from './pages/About';
import Main from './pages/Main';

const BaseRouter = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default BaseRouter;
