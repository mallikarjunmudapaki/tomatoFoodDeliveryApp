import React, { useContext } from 'react'
import './BillSummary.css'
import { assets } from '../../../assets/assets'
import { StoreContext } from '../../../SroreContext/StoreContext'
// import GstSplit from './GstSplit/GstSplit'
const BillSummary = ({setshowBillSummary, setshowGstSplit}) => {

    const {getTotalAmount} =useContext(StoreContext)
  return (
    <>
    <div className='bill-summary'>
        <div className="bill-summary-container">
      <div className="bill-summary-title">
            <h2><b>Bill Summary</b></h2>
            <img onClick={()=>setshowBillSummary(false)} src={assets.cross_icon} alt="" />
        </div>
      <div className='bill-summary-items'>
        <p>Item total</p>
        <p>${getTotalAmount()}</p>
      </div>
      <div className='bill-summary-items'>
      <p onClick={()=>setshowGstSplit(true)} className='bill-summary-gst'>GST</p>
      <p>$8</p>
      </div>
      <div className='bill-summary-items'>
      <p>Delivery partner fee (up to 4km)</p>
      <p>$5</p>
      </div>
      <div className='bill-summary-items'>
        <p>Platform fee</p>
        <p>$3</p>
      </div>
      <div className='bill-summary-items'>
        <b>Grand Total</b>
        <b>${2+5+3+ getTotalAmount()}</b>
      </div>
      <div className='bill-summary-items'>
        
      </div>
      </div>
    </div>
    </>
  )
}

export default BillSummary
