import React, {createRef} from 'react'
import styles from "./ProfileWideColumn.module.css";
import Post from "./Post/Post";
import {addPostActionCreator, updateBufferTextActionCreator} from "../../../redux/profile-reducer";
import {connect} from "react-redux";


const ProfileWideColumn = (props) => {
  const postInput = createRef()

  const onChange = () => {
    props.onChange(postInput.current.value)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    props.onSubmit(postInput.current.value)
  }

  let postsElements = props.profilePage.posts
      .map((p) => <Post title={p.title} likesCount={p.likesCount}/>)
      .reverse()
  return (
      <div className={styles.wideColumn}>
        <div className={styles.infoBlock}>
          <h3>User name</h3>
          <div>Status</div>
          <div>Information</div>
        </div>
        <div className={styles.myPostsBlock}>
          <div>
            <form onSubmit={onSubmit} className={styles.postForm}>
              <input className={styles.postInput} ref={postInput} onChange={onChange} type={'text'}
                     value={props.profilePage.newText} placeholder={'How are you doing?'}/>
              <button className={styles.submitBtn}>Post</button>
            </form>
          </div>
          <h3>My posts:</h3>
          <div className={styles.myPosts}>
            {postsElements}
          </div>
        </div>
      </div>)
}

const mapStateToProps = (state) => {
  return {profilePage: state.profilePage}
}

  const mapDispatchToProps = (dispatch) => {
    return {
      onChange: (value) => {
        dispatch(updateBufferTextActionCreator(value))
      },
      onSubmit: (value) => {
        if (value !== '') {
          dispatch(addPostActionCreator());
          dispatch(updateBufferTextActionCreator(''))
        }
      }
    }
  }
export default connect(mapStateToProps, mapDispatchToProps)(ProfileWideColumn)