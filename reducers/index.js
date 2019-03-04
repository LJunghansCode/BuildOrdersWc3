import { combineReducers } from 'redux';
import { builds, currentVisibleBuild, newBuildForm } from './builds';
import { addOrderForm } from './addOrder';
import { login, register, userState } from './user';


const warcraftApp = combineReducers({
  builds,
  currentVisibleBuild,
  newBuildForm,
  addOrderForm,
  login,
  register,
  userState,

});

export default warcraftApp;
