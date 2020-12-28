import React from 'react'
import styles from './UsersPage.module.css'
import User from "./User/User";

const UsersPage = (props) => {
  const onFollow = (id) => {
    props.onFollow(id);
  };
  const onUnfollow = (id) => {
    props.onUnfollow(id);
  };

  let pagesCount = Math.ceil(85 / props.pageSize);
  let pages = [];
  for (let i = 1; i < pagesCount; i++) {
    pages.push(i)
  }
  let userItems = props.users.map(u => {
    return <User user={u} onFollow={onFollow} onUnfollow={onUnfollow} key={u.id}/>
  });
  let pagesItems = pages.map(p => {
    return (props.currentPage === p ?
        <span className={styles.currentPage}>{p}</span> :
        <span className={styles.regularPage} onClick={() => props.onPageChange(p)}>{p}</span>)
  })
  return (
      <div className={styles.userContainer}>
        {userItems}
        <div className={styles.pagesBlock}>
          {pagesItems}
        </div>
      </div>
  )
}

export default UsersPage