import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Footer from './components/Footer/Footer'
import LoginPopup from './components/LoginPopup/LoginPopup'
import BillSummary from './pages/Cart/Bill Summary/BillSummary'
import GstSplit from './pages/Cart/Bill Summary/GstSplit/GstSplit'


const App = () => {
  
  
  const [showGstSplit, setshowGstSplit] = useState(false);
  const [showLogin, setShowLogin] = useState(false)
  const [showBillSummary, setshowBillSummary] = useState(false)
  return (

    <>
    
     {showGstSplit?<GstSplit setshowGstSplit={setshowGstSplit} />:<></>}
    {showLogin?<LoginPopup  setShowLogin={setShowLogin} />:<></>}
    {showBillSummary?<BillSummary setshowGstSplit={setshowGstSplit}  setshowBillSummary={setshowBillSummary} />:<></>}
    <div className='app'>
      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart   setshowBillSummary={setshowBillSummary}/>}/>
        <Route path='/placeorder' element={<PlaceOrder setshowBillSummary={setshowBillSummary}/>}/>
      </Routes>
    </div>
    <Footer/>
    </>
  )
}

export default App
