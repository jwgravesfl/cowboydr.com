import { combineReducers } from 'redux'
import sessionReducer from './session'
import userReducer from './user'
import contactFormReducer from './contactForm'

const rootReducer = combineReducers({
  contact: contactFormReducer,
  sessionState: sessionReducer,
  userState: userReducer,
});

export default rootReducer;