import React from 'react';
import ReactDOM from 'react-dom';
import './semantic/dist/semantic.min.css';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom"
import {createStore, compose} from 'redux'
import reducer from './reducers/reducer'
import {Provider} from 'react-redux'
import { loadState, saveState } from './localStorage'
import './index.css';

const persistedState = loadState();
const store = createStore(reducer,persistedState, compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  ));

store.subscribe(() => {
  saveState({
    favorited: store.getState().favorited,
  })
})

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
  , document.getElementById('root'));
