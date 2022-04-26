import { createStore, combineReducers } from 'redux'
import profileReducer from './profileReducer'
import dialogsReducer from './dialogsReducer'
import navbarReducer from './navbarReducer'
import usersReducer from './usersReducer'

const reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  navbar: navbarReducer,
  usersPage: usersReducer
})
const store = createStore(reducers)

window.store = store.getState()

export default store