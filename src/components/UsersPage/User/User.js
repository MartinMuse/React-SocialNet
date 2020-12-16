import React, {createRef} from 'react'
import styles from './User.module.css'

const User = (props) => {
  const createBtn=()=>{
    if(props.user.follow===true)
      return(<button className={'userBtn'} onClick={()=>props.onUnfollow(props.user.id)}>Unfollow</button>)
    else{
      return(<button className={'userBtn'} onClick={()=>props.onFollow(props.user.id)}>Follow</button>)
    }
  }
  return <div className={styles.user}>
    <div>
      {props.user.userName}
    </div>
    <div>
      {props.user.location}
    </div>
    {createBtn()}
  </div>
}


export default User;