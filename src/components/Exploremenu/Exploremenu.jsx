import React from 'react'
import './Exploremenu.css'
import { menu_list } from '../../assets/assets'


const Exploremenu = ({category,setcategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'> 
    <h1>Explore our menu</h1>
    <p className="explore-menu-text">Choose from a diverse menu featuring a delectable array of dishes.
         Our mission is to satisfy your cravings and elevate your dining experience, one dilicious meal at a time</p>
    <div className="explore-menu-list">
    {menu_list.map((items,index)=>{
    return (
        <div onClick={()=>setcategory(prev=>prev===items.menu_name?"all":items.menu_name)} className="explore-menu-list-items">
        <img className={category===items.menu_name?"active":""} key={index} src={items.menu_image} alt="" />
        <p>{items.menu_name}</p>
        </div>
    )})}
    </div>  
    <hr />
    </div>
  )
}

export default Exploremenu
