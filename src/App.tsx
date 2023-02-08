import React from 'react';
import GlobalModal from './common/components/GlobalModal';
import BaseRouter from './routes';

function App() {
  return (
    <>
      <BaseRouter />
      <GlobalModal />
    </>
  );
}

export default App;
