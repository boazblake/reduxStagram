import React from 'react';
import { render } from 'react-dom';

//Import Components
import App from './components/App.js'
import PhotoGrid from './components/PhotoGrid.js'
import Single from './components/Single.js'

//Import CSS
import ccc from './styles/style.styl';

//import react router dependencies:
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider} from 'react-redux';
import store, {history} from './store'

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={PhotoGrid}></IndexRoute>
        <Route path="/view/:postId" component={Single}></Route>
      </Route>
    </Router>
  </Provider>
)



  render(router, document.querySelector('#root'));