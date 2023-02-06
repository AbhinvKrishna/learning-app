import React, {useState} from 'react';
import './bootstrap.css';


export default function TextForm(props) {

    const handleUppClick=()=>{
        //console.log("Upper Case was clicked " + text);
        let newText = text.toUpperCase();
        setText(newText);

    }

    const clearText=()=>{
      setText(' ');
    }

    const downloadText = ()=>{

      const element=document.createElement("a");
      const file = new Blob([text],{
        type:"text/plain"
      });

      element.href = URL.createObjectURL(file);
      element.download = "myFile.txt";
      element.click();
    }

    const handleOnChange = (event)=>{
        //console.log("change");
        setText(event.target.value); //By this method we can add the text to the Textarea  by keypress//
    }



    const [text, setText] = useState('');
    //text = "New Text"; -->Wrong way to change the state
    //setText ("New Text"); -->Correct way to change the state


  return (
    <>
    <div className='new' style={props.mode}> 
        <h1>{props.heading}</h1>
  <div className="mpp">
    <textarea name="text" value={text} onChange={handleOnChange} id="t12"  rows="8" className='textarea'></textarea>
  </div>
  <button className='btn1' onClick={handleUppClick}>Convert to upperCase</button>
  <button className="btn2" onClick={clearText}>Clear kr Basuriwale</button>
  <button className="btn3" onClick={downloadText}>Download Text</button>
    </div>
    <div className="new" style={props.mode}>
      <h1>Your text Summary Down</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p> 
      <p>Given text can be read in {0.008*text.split(' ').length} minutes </p>
    </div>
    </>
  )
}
