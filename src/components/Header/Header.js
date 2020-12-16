import React from 'react'
import styles from './Header.module.css'

const Header = () => {
  return <header className={styles.header}>
    <div className={styles.logo}>
      <div className={styles.logoImage}>
      <img
          src={'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png'}/>
      </div>
      <div className={styles.logoTitle}>
        React
      </div>
    </div>

  </header>
}

export default Header;