import React from 'react';
import './styles.scss';
import SVG_IMAGE from './laptop-cms.svg';

const App: React.FC = () => {
  return (
    <div>
      <h1>React TypeScript project my code</h1>
      <img src={SVG_IMAGE} alt='svg' width='350' />
    </div>
  );
};

export default App;
