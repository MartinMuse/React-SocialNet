import React from 'react'
import styles from './UsersPage.module.css'
import {connect} from "react-redux";
import {followAC, unfollowAC} from "../../redux/users-reducer";
import User from "./User/User";

const UsersPage = (props) => {
  const onFollow=(id)=>{
    props.onFollow(id)
  };
  const onUnfollow=(id)=>{props.onUnfollow(id)};
  const userItems=props.usersPage.users.map(u=>{
    return <User user={u} onFollow={onFollow} onUnfollow={onUnfollow} />
  });

  return <div className={styles.userContainer}>
    {userItems}
  </div>
}


const mapStateToProps=(state)=>{
  return {usersPage: state.usersPage}
}
const mapDispatchToProps=(dispatch)=>{
  return {
    onFollow:(userId)=>{
      dispatch(followAC(userId))
    },
    onUnfollow:(userId)=>{
      dispatch(unfollowAC(userId))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(UsersPage);