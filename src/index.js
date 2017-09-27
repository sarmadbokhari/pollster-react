import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Poll from './Poll';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Poll />, document.getElementById('root'));
registerServiceWorker();
