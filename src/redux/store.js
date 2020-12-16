import {combineReducers, createStore} from "redux";
import ProfileReducer from './profile-reducer'
import MessagesReducer from './messages-reducer'
import UsersReducer from "./users-reducer";

let reducers = combineReducers({
  profilePage: ProfileReducer,
  messagesPage: MessagesReducer,
  usersPage: UsersReducer,
})
export let store = createStore(reducers);