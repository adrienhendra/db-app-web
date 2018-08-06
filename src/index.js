import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

/* Load all required CSS */
/* Semantic UI CSS */
import 'semantic-ui-css/semantic.min.css';
/* QUILL CSS */
import 'react-quill/dist/quill.snow.css';
/* REACT Table CSS */
import 'react-table/react-table.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
