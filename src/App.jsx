import React from 'react';
import  styles from './App.module.scss';
import LogIn from './pages/logIn/index';
import { Route, Routes } from 'react-router-dom';
import SignIn from './pages/signIn/index';


function App() {
  return (
    <div className={styles.container}>
      <Routes>
        <Route path='/' element={<LogIn />}/> 
        <Route path='/sign-in' element={<SignIn />}/> 

      </Routes>
    </div>
  );
}

export default App;
