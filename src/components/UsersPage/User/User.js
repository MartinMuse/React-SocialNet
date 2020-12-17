import React from 'react'
import styles from './User.module.css'



const User = (props) => {
  console.log(props.user)
  const createBtn=()=>{
    if(props.user.followed===true)
      return(<button className={'userBtn'} onClick={()=>props.onUnfollow(props.user.id)} key={props.user.id}>Unfollow</button>)
    else{
      return(<button className={'userBtn'} onClick={()=>props.onFollow(props.user.id)} key={props.user.id}>Follow</button>)
    }
  }
  return <div className={styles.user}>
    <div className={styles.nameBlock}>
      <span className={styles.name}>{props.user.name}</span>
    </div>
    {createBtn()}
  </div>
}


export default User;