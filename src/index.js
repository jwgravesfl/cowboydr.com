import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import "animate.css/animate.min.css";
import "video-react/dist/video-react.css"
import configureStore from './store/store';

import { Provider } from 'react-redux';

const store = configureStore();

  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
