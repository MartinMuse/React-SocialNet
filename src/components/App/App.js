import Header from "../Header/Header";
import React from "react";
import Navbar from "../Navbar/Navbar";
import ProfileContainer from "../Profile/ProfileContainer";
import styles from './App.module.css'
import Dialogs from "../Dialogs/Dialogs";
import {Route} from 'react-router';
import Settings from "../Settings/Settings";
import UsersPage from "../UsersPage/UsersPageContainer";

function App(props) {
  return (
      <div className={styles.wrapper}>
        <Header/>
        <div className={styles['body-container']}>
          <Navbar/>
          <div className={styles['wrapper-content']}>
            <Route path={'/profile/:userId?'} render={() => <ProfileContainer/>}/>
            <Route path={'/dialogs'} render={() => <Dialogs/>}/>
            <Route path={'/users'} render={() => <UsersPage/>}/>
            <Route path={'/settings'} render={() => <Settings/>}/>
          </div>
        </div>
      </div>
  );
}

export default App;
