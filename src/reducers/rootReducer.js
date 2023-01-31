
import { combineReducers } from 'redux';
import navReducer from './navReducer';
import toggleReducer from './toggleReducer';
import sectionReducer from './sectionReducer';
import taskReducer from './taskReducer';
import signupReducer from './signupReducer';
import userReducer from './userReducer';
import commentReducer from './commentReducer';
import roomReducer from './roomReducer';
import messageIdReducer from './messageIdReducer';
import workspaceReducer from './workspaceReducer';
import projectReducer from './projectReducer'

const rootReducer = combineReducers({
  projectReducer:projectReducer,
  workspaceReducer:workspaceReducer,
  messageIdReducer:messageIdReducer,
  roomReducer:roomReducer,
  commentReducer:commentReducer,
  userReducer:userReducer,
  signupReducer: signupReducer,
  navReducer: navReducer,
  toggleReducer: toggleReducer,
  sectionReducer: sectionReducer,
  taskReducer: taskReducer,
});

export default rootReducer;
