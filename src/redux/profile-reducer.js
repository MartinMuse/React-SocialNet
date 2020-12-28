const ADD_POST = 'ADD-POST'
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT'
const SET_PROFILE = 'SET-PROFILE'

let initialStore = {
  posts: [{
    id: 0,
    title: 'Hey!',
    likesCount: 45
  }],
  newText: '',
  profile: {
    id: null,
    name: null,
    photos: {
      small: null,
      large: null
    },
    status: null,
  }
}
const ProfileReducer = (state = initialStore, action) => {
  let newState = {
    ...state,
    posts: [...state.posts],
    newText: [...state.newText],
    profile: state.profile
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
    case UPDATE_POST_TEXT: {
      newState.newText = action.newText;
      break;
    }
    case SET_PROFILE: {
      console.log('action')
      newState.profile = action.profile
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
export const setProfile = (profile) => {
  return {type: SET_PROFILE, profile: profile}
}

export default ProfileReducer;