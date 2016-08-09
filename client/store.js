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

const store = createStore(rootReducer, defaultStore, window.devToolsExtension && window.devToolsExtension());

export const history = syncHistoryWithStore(browserHistory, store);

export default store