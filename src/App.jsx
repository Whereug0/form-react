import React from 'react';
import  styles from './App.module.scss';
import LogIn from './pages/logIn/index';
import { Link, Route, Routes } from 'react-router-dom';
import SignUp from './pages/signIn/index';

function App() {
  return (
    <div className={styles.container}>
      <div className={styles['links-box']}>
        <Link to="/log-in" className={styles["link"]}>Log In</Link>
        <Link to="/sign-up" className={styles["link"]}>Sign Up</Link>
      </div>
      <Routes>
        <Route path='/log-in' element={<LogIn />}/> 
        <Route path='/sign-up' element={<SignUp />}/> 

      </Routes>
    </div>
  );
}

export default App;
