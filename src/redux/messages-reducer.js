const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT'
const SENT_MESSAGE = 'SENT-MESSAGE'

let initialState = {
  messages: [],
  newMessageText: '',
}
export const MessagesReducer = (state = initialState, action) => {
  let newState = {
    ...state,
    newMessageText: [...state.newMessageText],
    messages: [...state.messages]
  }
  switch (action.type) {
    case UPDATE_MESSAGE_TEXT: {
      newState.newMessageText = action.newText;
      break;
    }
    case SENT_MESSAGE:
      let newMessage = {
        id: state.messages.length === 0 ?
            0 : state.messages[state.messages.length - 1].id + 1,
        message: state.newMessageText,
      }
      newState.messages.push(newMessage)
      break;
    default:
      break;
  }
  return newState
}
export const sentMessageActionCreator = () => {
  return {type: SENT_MESSAGE}
}
export const updateNewTextMessageActionCreator = (newText) => {
  return {type: UPDATE_MESSAGE_TEXT, newText: newText}
}

export default MessagesReducer;