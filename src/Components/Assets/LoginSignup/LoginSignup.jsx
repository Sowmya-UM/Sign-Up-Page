import React, {useState} from 'react';
import './LoginSignup.css'

import { AiTwotoneMail } from "react-icons/ai";
import { RiLockPasswordFill } from "react-icons/ri";
import { BsFillPersonFill } from "react-icons/bs";
import { IconContext } from 'react-icons';


const LoginSignup = () => {
  const [action,setAction] = useState("Login");
  return (
    <div className='container'>
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
      <IconContext.Provider value={{size:'1rem' , color:'grey', }} >
        {action==="Login"?<div></div>:<div className="input"> <BsFillPersonFill style={{ margin: '0px 30px' }} /> <input type="text" placeholder="Name" /> </div>}

        <div className="input"> <AiTwotoneMail style={{ margin: '0px 30px' }} /> <input type="email"  placeholder="Email Id" /> </div>
        <div className="input"> <RiLockPasswordFill style={{ margin: '0px 30px' }} /> <input type="password"  placeholder="Password" /> </div>      
        </IconContext.Provider>
      </div>
      {action==="Sign Up"?<div></div>:<div className="forgot-password"> Forgot Password? <span> Click Here!</span></div>}

       <div className="submit-container">
        <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}> Sign Up</div>
        <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}> Login</div>
       </div>


    </div>
  )
}

export default LoginSignup
