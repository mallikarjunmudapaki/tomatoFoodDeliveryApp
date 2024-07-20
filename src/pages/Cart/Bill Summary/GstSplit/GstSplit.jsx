import React from 'react'
import './GstSplit.css'
import { assets } from '../../../../assets/assets'
const GstSplit = ({setshowGstSplit}) => {
    const gstOnitem = 6;
    const gstPlatform = 2;
    const totalgst = gstOnitem+gstPlatform ;
  return (
    <div className='gstsplit'>
        <div className="gstsplit-container">
         <div className="gstsplit-title">

        <p>Tomato has no role to play in taxes levied by the govt.</p>
        <img onClick={()=>setshowGstSplit(false)} src={assets.cross_icon} alt=''/>
         </div>
        <div className='gstsplit-items'>
            <b>GST on item total</b>
            <b>${gstOnitem}</b>
        </div>
        <div className='gstsplit-items'>
            <b>GST on platfrom fee</b>
            <b>${gstPlatform}</b>
        </div>
        <div className='gstsplit-items'>
            <b>total</b>
            <b>${totalgst}</b>
        </div>
        </div>
      
    </div>
  )
}

export default GstSplit
