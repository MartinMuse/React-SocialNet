import React from 'react'
import styles from './ProfileNarrowColumn.module.css'

const ProfileNarrowColumn = () => {
  return <div className={styles.profileInfo}>
    <div className={styles.image}>
      <img src={'https://image.freepik.com/free-vector/man-avatar-profile-round-icon_24640-14044.jpg'} alt={'image'}/>
    </div>
    <div className={styles.infoBlock}>
      <div>Followers:</div>
      <div>Subscribes:</div>
    </div>
  </div>
}

export default ProfileNarrowColumn;