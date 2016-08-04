import { createStore, compse } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

//import the root reducer
import rootReducer from './reducers/index';

import comments from './data/comments.js';
import posts from './data/posts.js';

//create an object for the default data

const defaultStore = {
  posts,
  comments
};

export default const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory, store);