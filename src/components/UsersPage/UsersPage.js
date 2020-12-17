import React from 'react'
import styles from './UsersPage.module.css'
import {connect} from "react-redux";
import {followAC, setUsersAC, unfollowAC} from "../../redux/users-reducer";
import User from "./User/User";
import * as axios from "axios"


class UsersPage extends React.Component {
  componentDidMount() {
    axios.get('https://social-network.samuraijs.com/api/1.0/users')
        .then(response=>{
          this.props.setUsers(response.data.items)
        })
  }

  onFollow = (id) => {
    this.props.onFollow(id)
    this.userItems()
  };
  onUnfollow = (id) => {
    this.props.onUnfollow(id)
    this.userItems()
  };
  userItems =()=> this.props.usersPage.users.map(u => {
    return <User user={u} onFollow={this.onFollow} onUnfollow={this.onUnfollow} key={u.id}/>
  });

  render() {
    return (
        <div className={styles.userContainer}>
          {this.userItems()}
        </div>)
  }
}

// const UsersPage = (props) => {
//   const onFollow = (id) => {
//     props.onFollow(id)
//   };
//   const onUnfollow = (id) => {
//     props.onUnfollow(id)
//   };
//   const userItems = props.usersPage.users.map(u => {
//     return <User user={u} onFollow={onFollow} onUnfollow={onUnfollow}/>
//   });
//
//   return <div className={styles.userContainer}>
//     {userItems}
//   </div>
// }


const mapStateToProps = (state) => {
  return {usersPage: state.usersPage}
}
const mapDispatchToProps = (dispatch) => {
  return {
    onFollow: (userId) => {
      dispatch(followAC(userId))
    },
    onUnfollow: (userId) => {
      dispatch(unfollowAC(userId))
    },
    setUsers:(users)=>{
      dispatch(setUsersAC(users))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(UsersPage);