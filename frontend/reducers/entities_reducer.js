import { combineReducers } from 'redux';
import postReducer from './post_reducer';
import usersReducer from './users_reducer';
import followsReducer from './follows_reducer';
import likesReducer from './likes_reducer';

const entitiesReducer = combineReducers({
  posts: postReducer,
  users: usersReducer,
  follows: followsReducer,
  likes: likesReducer
});

export default entitiesReducer;
