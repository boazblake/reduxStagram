import React from 'react';
import { render } from 'react-dom';

//Import Components
import Main from './components/Main.js'
import PhotoGrid from './components/PhotoGrid.js'
import Single from './components/Single.js'

//Import CSS
import ccc from './styles/style.styl';

//import react router dependencies:
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

const router = (
  <Router hiostory={browserHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={PhotoGrid}></IndexRoute>
      <Route path="/view/:postId" component={Single}></Route>
    </Route>
  </Router>
)



  render(router, document.querySelector('#root'));