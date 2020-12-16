import React from 'react'
import styles from './Dialogs.module.css'
import DialogItems from "./DialogItems/Dialogs";
import Message from "./Message/Message";
import {sentMessageActionCreator, updateNewTextMessageActionCreator} from "../../redux/messages-reducer";
import {connect} from "react-redux";


const Dialogs = (props) => {
  const inputMessage = React.createRef();
  const dialogsElements = props.messagesPage.messages
      .map((d) => <DialogItems name={d.name} id={d.id}/>)
  const messagesElements = props.messagesPage.messages
      .map((m) => <Message message={m.message}/>)
  const onSubmit = (e) => {
    e.preventDefault()
    props.onSubmit(inputMessage.current.value)
  }
  const onChange = () => {
    props.onChange(inputMessage.current.value);
  }
  return (
      <div className={styles.dialogsPage}>
        {/*<div className={styles.dialogItems}>*/}
        {/*  {dialogsElements}*/}
        {/*</div>*/}
        <div className={styles.dialogHeader}>
          UserName
        </div>
        <div className={styles.messagesContainer}>
              {messagesElements}
        </div>
        <form onSubmit={onSubmit} className={styles.messageForm}>
          <input className={styles.messageInput} ref={inputMessage} onChange={onChange} type={'text'}
                 value={props.messagesPage.newMessageText} placeholder={'Type a message'}/>
        </form>
      </div>
  )
}

const mapStateToProps = (state) => {
  debugger
  return {messagesPage: state.messagesPage}
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (value) => {
      dispatch(updateNewTextMessageActionCreator(value))
    },
    onSubmit: (value) => {
      if (value !== '') {
        dispatch(sentMessageActionCreator())
        dispatch(updateNewTextMessageActionCreator(''))
      }
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dialogs)