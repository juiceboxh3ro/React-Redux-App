import React from 'react';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import { factReducer as reducer } from './reducers/FactReducer';

import FactsForm from './components/FactsForm'

const store = createStore(reducer, applyMiddleware(thunk))

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Here's some cat facts</h1>
        <FactsForm />
      </div>
    </Provider>
  );
}