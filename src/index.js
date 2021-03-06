import React from 'react';
import ReactDOM from 'react-dom';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import axios from 'axios';
import './index.css';
import 'semantic-ui-css/semantic.min.css';
import 'react-day-picker/lib/style.css';
import App from './scenes/App/App';
import rootReducer from './data/reducers/rootReducer';
import registerServiceWorker from './registerServiceWorker';

axios.defaults.headers.common['Content-Type'] = 'application/json';

if (process.env.NODE_ENV === 'production') {
  axios.defaults.baseURL = 'http://api.basketballreasons.io';
} else {
  axios.defaults.baseURL = `http://localhost:${process.env.PORT || 4321}`;
}

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Route path="/:date?" component={App}/>
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();