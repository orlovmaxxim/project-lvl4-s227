import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/application.css';
// import faker from 'faker';
// import gon from 'gon';
// import cookies from 'js-cookie';
// import io from 'socket.io-client';


const store = createStore(
  reducers,
  { ...window.gon },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('chat'),
);


