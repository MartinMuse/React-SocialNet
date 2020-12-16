import {combineReducers, createStore} from "redux";
import {ProfileReducer} from './profile-reducer'
import {MessagesReducer} from './messages-reducer'

let reducers = combineReducers({
  profilePage: ProfileReducer,
  messagesPage: MessagesReducer
})
export let store = createStore(reducers);