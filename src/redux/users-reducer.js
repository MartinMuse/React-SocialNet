const FOLLOW = 'Follow';
const UNFOLLOW = 'Unfollow';
const USERS = 'UsersPage';

let initialState = {
  users: [
  ]
}

const UsersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId){
            return {...u, followed: true}
          }
          return u
        })
      }
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId)
            return {...u, followed: false}
          return u
        })
      }
    case USERS:
      return {...state,
        // users:[...state.users,...action.users]}
        users:[...action.users]}
    default:
      return state
  }
}

export const followAC = (userId) => ({type: FOLLOW, userId})
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId})
export const setUsersAC = (users) => ({type: USERS, users})

export default UsersReducer;
