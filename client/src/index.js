import './index.css';
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import ReduxStore from './store/ReduxStore'
import { Provider } from 'react-redux'


if (process.env.NODE_ENV !== 'production') {
  // const getCSRFToken = () => {
  //   return fetch("api/csrf/token")
  // }
  // getCSRFToken();
}

// const initialState = {
//   email: 'hanSolo@gmail.com',
//   password: 'password'
// }
const store = ReduxStore()


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
