import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../SroreContext/StoreContext'

const PlaceOrder = ({ setshowBillSummary}) => {

  const {getTotalAmount}=useContext(StoreContext)

  return (
    <form className='place-order'>
     <div className='place-order-left'>
      <p>Delivery Information</p>
      <div className="multi-fields">
       <input type="text" placeholder=' First Name' />
       <input type="text" placeholder=' Last Name' />
      </div>
      <input type="email" placeholder=' Email address' />
      <input type="text" placeholder=' Street' />
      <div className="multi-fields">
       <input type="text" placeholder=' City' />
       <input type="text" placeholder=' State' />
      </div>
      <div className="multi-fields">
       <input type="text" placeholder=' Zip Code' />
       <input type="text" placeholder=' Country' />
      </div>
      <input type="tecxt" placeholder='phone number' />
     </div>
     <div className='place-order-right'>
     <div className="cart-total">
          <h2>Cart Totals</h2>
        <div className='cart-total-detail'>
          <p>Subtotal</p>
          <p>${getTotalAmount()}</p>
        </div>
        <hr />
        {/* <div className='cart-total-detail'>
          <p>Dilevery Fee</p>
          <p>${2}</p>
        </div> */}
         {/* <hr />    */}
        <div className='cart-total-detail'>
          <b onClick={()=>setshowBillSummary(true)} >Total Bill</b>
          <b>${getTotalAmount()?<i>{getTotalAmount()+10}</i>:""}</b>
        </div>
      <button >Proceed To Pay</button>
      </div>

     </div>

    </form>
  )
}

export default PlaceOrder
