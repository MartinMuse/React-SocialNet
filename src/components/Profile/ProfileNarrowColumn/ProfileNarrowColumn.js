import React from 'react'
import styles from './ProfileNarrowColumn.module.css'
import userImage from '../../../images/userImg.jpg'
import {NavLink} from "react-router-dom";

const ProfileNarrowColumn = (props) => {
  return <div className={styles.profileInfo}>
    <div className={styles.image}>
      {props.profilePage.profile.photos.large === null ?
          <img src={userImage}/> :
          <img src={props.profilePage.profile.photos.large}/>}
    </div>
    <div className={styles.infoBlock}>
      <div>Followers:</div>
      <div>Subscribes:</div>
    </div>
  </div>
}

export default ProfileNarrowColumn;