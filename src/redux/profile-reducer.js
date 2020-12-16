const ADD_POST = 'ADD-POST'
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT'

let initialStore = {
  posts: [{
    id: 0,
    title: 'Hey!',
    likesCount: 45
  }],
  newText: '',
}
export const ProfileReducer = (state = initialStore, action) => {
  let newState={
    ...state,
    posts: [...state.posts],
    newText:[...state.newText]
  }

  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: state.posts.length === 0 ?
            0 : state.posts[state.posts.length - 1].id + 1,
        title: state.newText,
        likesCount: 0
      }
      newState.posts.push(newPost)
      break;
    case UPDATE_POST_TEXT:{
      newState.newText = action.newText;
      break;
    }
    default:
      break;
  }
  return newState
}
export const addPostActionCreator = () => {
  return {type: ADD_POST}
}
export const updateBufferTextActionCreator = (newText) => {
  return {type: UPDATE_POST_TEXT, newText: newText}
}
export default ProfileReducer;