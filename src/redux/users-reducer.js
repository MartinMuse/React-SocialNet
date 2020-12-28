const FOLLOW = 'Follow';
const UNFOLLOW = 'Unfollow';
const USERS = 'UsersPage';
const PAGE = 'Page';

let initialState = {
  users: [],
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
}

const UsersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
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
      return {
        ...state,
        // users:[...state.users,...action.users]}
        users: [...action.users]
      }
    case PAGE:
      return {
        ...state,
        currentPage: action.page
      }
    default:
      return state
  }
}

export const followAC = (userId) => ({type: FOLLOW, userId})
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId})
export const setUsersAC = (users) => ({type: USERS, users})
export const setCurrentPageAC = (page) => ({type: PAGE, page})

export default UsersReducer;
