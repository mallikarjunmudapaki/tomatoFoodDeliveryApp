import React, { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../SroreContext/StoreContext'
import FoodItems from '../FoodItems/FoodItems'
const FoodDisplay = ({category}) => {
    
    const {food_list} = useContext(StoreContext)
  return (
    <div className='food-display' id='food-display'>
      <h1>Top dishes near you</h1>
      <div className='food-display-list'>
        {
           food_list.map((item,index)=>{
            if(category ==="All" || category===item.category){

                return <FoodItems key={index} id={item._id} name={item.name} image={item.image} description={item.description} price={item.price} />
            }else{
                return null
            }
            })}
      </div>
    </div>
  )
}

export default FoodDisplay
