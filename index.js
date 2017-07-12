import React from 'react';
import ReactDom from 'react-dom';
import 'bulma/css/bulma.css';
import App from './src/components/App';
import reducer from './reducers/reducer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const store = createStore(reducer)

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root')
);