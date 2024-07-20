import React,{useContext} from 'react'
import './FoodItems.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../SroreContext/StoreContext';
const FoodItems = ({id,name,image,description,price}) => {

 
  const {cartItems,addtoCart, removefromCart}= useContext(StoreContext)
  return (
    <div className='food-item'>
      <div className="food-item-img-container">
        <img className='food-item-img' src={image} alt="" />
        {
          !cartItems[id]?
          <img alt=''  className='add' onClick={()=> addtoCart(id)} src={assets.add_icon_white} />
          :<div className='food-item-count'>
           <img className='red_icon' onClick={()=>removefromCart(id)} src={assets.remove_icon_red} alt="" />
           <p>{cartItems[id]}</p>
           <img className='green_icon' onClick={()=>addtoCart(id)} src={assets.add_icon_green} alt="" />
          </div>
        }
      </div>
      <div className='food-item-info'>
        <div className="food-item-name-rating">
        <p>{name}</p>
        <img className='food-item-rating' src={assets.rating_starts} alt="" />
        </div>
        <p className='food-item-desciption'>{description}</p>
        <p className='food-item-price'>${price}</p>
      </div>
    </div>
  )
}

export default FoodItems
