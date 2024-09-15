import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {

  const[mode, setMode] = useState('light') //Tells whether dark mode is enabled or not

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#202634'
      document.body.style.color = 'white'

    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'black'
    }
  }


  return (
    <>
      <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode}/>
      <div className="container my-3">
        <TextForm heading="Enter the text to analyze below" />
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
