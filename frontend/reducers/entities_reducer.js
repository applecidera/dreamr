import { combineReducers } from 'redux';
import postReducer from './post_reducer';
import usersReducer from './users_reducer';

const entitiesReducer = combineReducers({
  posts: postReducer,
  users: usersReducer
  // follows: followsReducer
});

export default entitiesReducer;
