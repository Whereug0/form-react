import React from 'react';
import  styles from './App.module.scss';
import LogIn from './pages/logIn/index';
import { Route, Routes } from 'react-router-dom';
import SignUp from './pages/signIn/index';


function App() {
  return (
    <div className={styles.container}>
      <Routes>
        <Route path='/log-in' element={<LogIn />}/> 
        <Route path='/sign-up' element={<SignUp />}/> 

      </Routes>
    </div>
  );
}

export default App;
