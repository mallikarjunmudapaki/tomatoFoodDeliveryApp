import React,{useState} from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets';
const LoginPopup = ({setShowLogin}) => {

    const [currentState, setcurrentState] = useState("Login");
  return (
    <div className='login-popup'>
      <form className='login-popup-container'>
        <div className="login-popup-title">
            <h2>{currentState}</h2>
            <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className='login-popup-inputs'>
            { currentState==='Login'?<></>:<input type="text" placeholder='Your Name' required/>}
                <input type="email" placeholder='Your Email' required />
                <input type="password" placeholder='Your Password' required />
            
        </div>
        <button> {currentState==='Login'?'Login':'Create Account'} </button>
        <div className="login-popup-condition">
            <input type="checkbox"  required />
            <p>By Continuing i agree to the term of use & privacy policy</p>
        </div>
        {
            currentState==='Login'?<p>Create a new Account? <span onClick={()=>setcurrentState('Sign up')}>Click here</span></p>:
            <p>Already have Account ? <span onClick={()=>setcurrentState('Login')}> login</span></p>
        
        }

      </form>
    </div>
  )
}

export default LoginPopup
