import React, { useState } from 'react';
import './App.css';
//import About from './Components/About';
import NavBar from './Components/NavBar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  const [mode,setmode]=useState('dark');
  const [alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg :message,
      type : type
    })
  }
 
  const togglemode=()=>{
    if(mode === 'light'){
      setmode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode is Enabled","success");
  }
  else{
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode is Enabled","success");
  }
}
setTimeout(()=>{
  setAlert(null);
},1500);
  return ( 
    <> 
    {/* <Router> */}
    <NavBar title="TextUtils" abo="About us" mode={mode} togglemode={togglemode} />
    <Alert alert={alert}></Alert>
     <div className="container">
     {/* <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact  path="/">
         
          </Route>
        </Switch> */}
     <TextForm heading="UpperCase" mode={mode}/>
    </div> 
    {/* </Router> */}
     </>
  );
}

export default App;
