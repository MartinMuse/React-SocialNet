import React from 'react'
import styles from './Profile.module.css'
import ProfileWideColumn from "./MyPosts/ProfileWideColumn";
import ProfileNarrowColumn from "./ProfileNarrowColumn/ProfileNarrowColumn";

const Profile = (props) => {
  return <div className={styles['profile-content']}>

    <div className={styles.narrowColumn}>
      <ProfileNarrowColumn/>
    </div>

    <div className={styles.wideColumn}>
      <ProfileWideColumn/>
    </div>
  </div>
}

export default Profile;