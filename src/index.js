import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
// import Modal from './components/modal/modal';

import './index.scss';

ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <Modal/>  */}
  </React.StrictMode>,
  document.getElementById('root')
);
