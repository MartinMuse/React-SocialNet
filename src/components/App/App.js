import Header from "../Header/Header";
import React from "react";
import Navbar from "../Navbar/Navbar";
import Profile from "../Profile/Profile";
import styles from './App.module.css'
import Dialogs from "../Dialogs/Dialogs";
import News from "../News/News";
import {Route} from 'react-router-dom';
import Settings from "../Settings/Settings";

function App(props) {
  console.log(props)
  return (
      <div className={styles.wrapper}>
        <Header/>
        <div className={styles['body-container']}>
          <Navbar/>
          <div className={styles['wrapper-content']}>
            <Route path={'/profile'} render={() => <Profile/>}/>
            <Route path={'/dialogs'} render={() => <Dialogs/>}/>
            <Route path={'/news'} render={() => <News/>}/>
            <Route path={'/settings'} render={() => <Settings/>}/>
          </div>
        </div>
      </div>
  );
}

export default App;
