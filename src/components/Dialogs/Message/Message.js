import React from 'react'
import styles from './Message.module.css'


const Message = (props) => {
  return <div className={styles.message}>
    <div className={styles.messageImg}>
      <img src={'https://image.freepik.com/free-vector/man-avatar-profile-round-icon_24640-14044.jpg'} alt={'image'}/>
    </div>

    <div>
      <div className={styles.userName}>
        UserName
      </div>
      <div className={styles.messageTitle}>
        {props.message}
      </div>
    </div>
  </div>
}

export default Message;