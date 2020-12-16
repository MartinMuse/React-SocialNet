import React from 'react'
import styles from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {
  return <nav className={styles.nav}>
    <NavLink activeClassName={styles.active} to={'/profile'} className={styles.item}>
      <div className={styles.itemImage}>
        <img src={'https://mpng.subpng.com/20180404/sqe/kisspng-computer-icons-user-profile-clip-art-big-5ac5283827d286.2570974715228703281631.jpg'}/>
      </div>
      <div className={styles.itemTitle}>
        Profile
      </div>
    </NavLink>

    <NavLink activeClassName={styles.active} className={styles.item} to={'/dialogs'}>
      <div className={styles.itemImage}>
        <img src={'https://www.pngfind.com/pngs/m/56-568764_message-png-message-icon-png-white-transparent-png.png'}/>
      </div>
      <div className={styles.itemTitle}>
        Messages
      </div>
    </NavLink>

    {/*<div className={styles.item}>*/}
    {/*  <NavLink activeClassName={styles.active} to={'/news'}>News</NavLink>*/}
    {/*</div>*/}
    {/*<div className={styles.item}>*/}
    {/*  <NavLink activeClassName={styles.active} to={'/settings'}>Settings</NavLink>*/}
    {/*</div>*/}
  </nav>
}

export default Navbar;