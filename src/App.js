// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React from 'react'
import { useState } from 'react';
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#0e0b2d';
      document.body.style.color = 'white';
      showAlert("Switched to Dark Mode!", "success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("Switched to Light Mode!", "success");
    }

  }

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  return (
    <>
      <Router>
        <Navbar title="textUtils" aboutText="About" mode={mode} toggleMode={toggleMode} alert={alert} />
        <Alert alert={alert} />

        <Routes>
          <Route exact path='/' element={<div className='container'> 
            <TextForm heading='Try TextUtils - Word counter, Character Counter' mode={mode} showAlert={showAlert} />
          </div>} />
          <Route exact path='/about' element={<About mode={mode}/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;