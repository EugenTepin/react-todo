import React from 'react';
import ReactDOM from 'react-dom';
import 'todomvc-app-css/index.css';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from 'reducers'
import App from 'App';
const store = createStore(todoApp);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    div);
  ReactDOM.unmountComponentAtNode(div);
});







