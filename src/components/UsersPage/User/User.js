import React from 'react'
import styles from './User.module.css'
import userImage from '../../../images/userImg.jpg'
import {NavLink} from "react-router-dom";


const User = (props) => {
  const createBtn = () => {
    if (props.user.followed === true)
      return (<button className={styles.userBtn} onClick={() => props.onUnfollow(props.user.id)}
                      key={props.user.id}>Unfollow</button>)
    else {
      return (<button className={styles.userBtn} onClick={() => props.onFollow(props.user.id)}
                      key={props.user.id}>Follow</button>)
    }
  }
  return (
      <div className={styles.user}>
        <div className={styles.userImg}>
          <NavLink to={'/profile/'+props.user.id}>
            {props.user.photos.small === null ?
                <img src={userImage}/> :
                <img src={props.user.photos.small}/>}
          </NavLink>
        </div>
        <div className={styles.userBody}>
          <div className={styles.nameBlock}>
            <span className={styles.name}>{props.user.name}</span>
          </div>
          {createBtn()}
        </div>
      </div>)
}


export default User;