import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
        console.log('Covert button is clicked' + text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLowClick=()=>{
        console.log('Covert button is clicked' + text);
        let newText = text.toLowerCase();
        setText(newText);
    }
   const handlecopy=()=>{
    let text = document.getElementById("myBox");
     text.select();
     navigator.clipboard.writeText(text.value);
   }
        const handleClearClick=()=>{ 
        let newText ="";
            setText(newText);
        }
    const handleOnChange=(event)=>{
        console.log('Change done');
        setText(event.target.value);
    }
    const [text, setText] = useState('Enter text here');
  return (
    <>
    <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
        <br/><br/><br/>
      <div className="mb-3" style={{color: props.mode==='dark'?'white':'black'}} >
           <h2 >{props.heading}</h2>
           <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="3" style={{color: props.mode==='white'?'dark':'black'}}></textarea>
        </div>
        <button className="btn btn-primary mx-4" onClick={handleUpClick}>Convert to upperCase</button>
        <button className="btn btn-primary mx-4" onClick={handleLowClick}>Convert to lowerCase</button>
        <button className="btn btn-primary mx-4" onClick={handleClearClick}>Clear</button>
        <button className="btn btn-primary mx-4" onClick={handlecopy}>Copy</button>
    </div>
    <div className="container my-4" style={{color: props.mode==='dark'?'white':'black'}}>
        <h4>Your words and Characters</h4>
        <p>{text.split(" ").length} words {text.length} Characters</p>
        <p>{0.008*text.split(" ").length} minutes to read</p>
        <h3>Preview</h3>
        <p>{text}</p>
    </div>
    </>
  )
}
