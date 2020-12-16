import React from 'react'
import styles from '../Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItems = (props) => {
  const path = "/dialogs/" + props.id
  return (
      <div className={styles.dialog + ' ' + styles.active}>
        <NavLink to={path}>{props.name}</NavLink>
      </div>
  )
}
export default DialogItems;