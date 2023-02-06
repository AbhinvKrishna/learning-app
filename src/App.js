import React, { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';




function App() {

  const [btnText, setBtnText]=useState('Enable Dark mode')

  const [mode, setMode] = useState({
    color: 'black',
    backgroundColor: 'white'
  });

  const toggleMode = () => {
    if (mode.color === 'black') {
      setMode({
        color: 'white',
        backgroundColor: '#042743'
      })
      setBtnText('Enable Light mode')

    }
    else {
      setMode({
        color: 'black',
        backgroundColor: 'white'
      })
      setBtnText('Enable Dark mode')

    }
  }





  return (
    <>
      {/* <Navbar tittle="Gangwar" about="Niklo"/> */}
      <button onClick={toggleMode}>{btnText}</button>
      <Navbar mode={mode} />
      <TextForm heading="Enter The Heading " mode={mode} />
    </>
  );
}

export default App;
