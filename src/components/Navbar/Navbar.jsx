import React,{useContext, useState} from 'react'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { StoreContext } from '../../SroreContext/StoreContext'

const Navbar = ({setShowLogin}) => {
    const [menu, setMenu] = useState('About');
    const {getTotalAmount} =useContext(StoreContext)
    // const menuNavigate =useNavigate()
  return (
    
    <div className='Navbar'>
      <Link to='/'><img className='logo' src={assets.logo} alt="logo" /></Link>
      <ul className='Navbar-menu'>

      <Link to='/' onClick={()=> setMenu("home")} className={menu==='home'?'active':''}>Home</Link>
      <a href='/' onClick={()=> setMenu("About")}  className={menu==='About'?'active':''}>About</a>
      <a href='#explore-menu' onClick={()=> setMenu("Menu")}  className={menu==='Menu'?'active':''}>Menu</a>
      <a href='#footer' onClick={()=> setMenu("ContactUs")}  className={menu==='ContactUs'?'active':''}>Contact Us</a>
      </ul>
      <div className='Navbar-right'>
        <img src={assets.search_icon} alt="" />
        <div className='Navbar-Search-icon'>
           <Link to='/cart'><img  src={assets.basket_icon} alt="" /></Link> 
            <div className={getTotalAmount()?"dot":""}></div>
        </div>
        <button onClick={()=>setShowLogin(true)}>Sign in</button>
      </div>
    </div>
  )
}

export default Navbar
