import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';


function App() {

  const [mode, setMode] = useState('light');
  const [textMode, setTextMode] = useState('dark');
  const [alert, setAlert] = useState(null);

  const showAlert = (message ,type)=>{
    setAlert({
      message :message,
      type : type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = ()=>{
    if(mode === 'light') {
      setMode('dark');
      setTextMode('light');
      document.body.style.backgroundColor='#182123';
      document.body.style.color='white';
      showAlert("Dark Mode Enabled","success");

    } else {
      setMode('light');
      setTextMode('dark');
      document.body.style.backgroundColor='white';
      document.body.style.color='black';
      showAlert("Light Mode Enabled","success");
    }
  }

  return (
    <>
      <Navbar title="TextUtils" about="About" textMode={textMode} mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <Routes>
          <Route exact path="/" element={<TextForm showAlert={showAlert} textMode={textMode} mode={mode} heading="Enter the text to analyze below" />} />
          <Route exact path="/about" element={<About />} />
          {/* Exact is used to avoid partial matching by react router */}
        </Routes>
      </div>
    </>
  );
  
}

export default App;
