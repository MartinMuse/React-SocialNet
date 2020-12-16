import React from 'react'
import styles from "./Post.module.css";

const Post = (props) => {
  return <div className={styles.item}>

    <img src={'https://image.freepik.com/free-vector/man-avatar-profile-round-icon_24640-14044.jpg'} className={styles.profileImg} alt={'image'}/>
    {props.title}

    <div className={styles.like}>
      <img src={'https://webstockreview.net/images/twitter-like-png-2.png'} className={styles.likeImg} alt={'Like'}/>
      {props.likesCount}
    </div>
  </div>
}

export default Post;