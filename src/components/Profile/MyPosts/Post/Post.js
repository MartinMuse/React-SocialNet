import React from 'react'
import styles from "./Post.module.css";
import userImage from "../../../../images/userImg.jpg"

const Post = (props) => {
  return <div className={styles.item}>

    <img src={userImage} className={styles.profileImg} alt={'image'}/>
    {props.title}

    <div className={styles.like}>
      <img src={'https://webstockreview.net/images/twitter-like-png-2.png'} className={styles.likeImg} alt={'Like'}/>
      {props.likesCount}
    </div>
  </div>
}

export default Post;