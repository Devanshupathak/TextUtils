import React,{useState} from 'react'

export default function About() {
    const [mystyle,setMystyle]= useState({
        color:'white',
        backgroundColor:'black',
     
    })
   
    const [btntext,setbtntext]= useState('Enable Light mode')
   const modeStyle=()=>{
        if(mystyle.color === 'white'){
            setMystyle({
                color:'black',
                backgroundColor:'white',
       
            })
setbtntext("Enable Dark mode")
        }
        else{
            setMystyle({
                color:'white',
        backgroundColor:'black',
   
            })
            setbtntext("Enable Light mode")
        }

    }
  return (
    <div>
        <div className="conainer" style={mystyle}>
        <h2>About us</h2>
     <p> webdew has done a commendable job of personifying their team and organization while also narrating their story. 

The top of the page features a friendly image of the company's employees, and as you scroll, you will find their values, goals, journey, details about the founders, the team, and the culture. Along the way, webdew continues to share photos of its executives and all other team members, completely humanizing its brand by putting various faces to its name. 

The organization has also done a fabulous job of establishing trust by including elements of social proof (i.e., media, client testimonials, partner logos, etc.) </p>
    <button onClick={modeStyle} type='button' className='btn btn-primary'>{btntext}</button>
    </div>
    </div>
  )
}
