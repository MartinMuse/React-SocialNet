const FOLLOW = 'Follow';
const UNFOLLOW = 'Unfollow';
const USERS = 'UsersPage';

let initialState = {
  users: [
    {id: 1, userName: 'Bob', location: 'Minsk', follow: false},
    {id: 2, userName: 'Max', location: 'Minsk', follow: false},
    {id: 3, userName: 'Sam', location: 'Minsk', follow: false},
    {id: 4, userName: 'Alex', location: 'Minsk', follow: false},
  ]
}

const UsersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId){
            return {...u, follow: true}
          }
          return u
        })
      }
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId)
            return {...u, follow: false}
          return u
        })
      }
    case USERS:
      return {...state,users:[...state.users,...action.users]}
    default:
      return state
  }
}

export const followAC = (userId) => ({type: FOLLOW, userId})
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId})
export const setUsersAC = (users) => ({type: USERS, users})

export default UsersReducer;
