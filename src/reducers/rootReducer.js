
import { combineReducers } from 'redux';
import navReducer from './navReducer';
import toggleReducer from './toggleReducer';
import sectionReducer from './sectionReducer';
import taskReducer from './taskReducer';

const rootReducer = combineReducers({
  navReducer: navReducer,
  toggleReducer: toggleReducer,
  sectionReducer: sectionReducer,
  taskReducer: taskReducer,
});

export default rootReducer;
