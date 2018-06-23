import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import App from './components/App';
import './index.css';
import reducer from './reducers';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducer);

console.log(store.getState());

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
