import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../SroreContext/StoreContext'
import { useNavigate } from 'react-router-dom'
// import BillSummary from './Bill Summary/BillSummary'

const Cart = ({setshowBillSummary}) => {
  const {cartItems,removefromCart,food_list,getTotalAmount}= useContext(StoreContext)
  const navigate = useNavigate()
  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-item-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {
          food_list.map((item,index)=>{
            if(cartItems[item._id]>0){
              return (
                <div>

                <div className="cart-item-title cart-items-item">
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${item.price*cartItems[item._id]}</p>
                  <p onClick={()=>removefromCart(item._id)} className='cart-cross'>x</p>
                </div>
                <hr />
                </div>
              )
            }else{
              return null
            }

          })
        }
      </div>
      <div className="cart-bottom">
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
      <button  onClick={()=>navigate('/placeorder')}>Proceed To Cheakout</button>
      </div>

     <div className="cart-promo-code">
      <div>
        <p>If you have Promo Code Add here</p>
        <div className='cart-promo-code-input'>
       <input type="text" placeholder='Promo Code' />
       <button>Submit</button>
        </div>
      </div>
     </div>
     </div>
    </div>
  )
}

export default Cart
