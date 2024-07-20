import { createContext,useState } from "react";
import { food_list } from "../assets/assets";
export const StoreContext = createContext(null)

 const StoreContextProvider =(props)=>{
 
    const [cartItems, setcartItems] = useState({});
  
    const addtoCart = (itemId)=>{
        if(!cartItems[itemId]){
            setcartItems((prev)=> ({...prev,[itemId]:1}))
        }
        else{
            setcartItems((prev)=>({ ...prev,[itemId]:prev[itemId]+1}))
        }
    }
    const removefromCart=(itemId)=>{
        setcartItems((prev)=>({ ...prev,[itemId]:prev[itemId]-1}))
    }

    const getTotalAmount=()=>{
     let totalAmount = 0;
     for(const item in cartItems)
         if(cartItems[item]>0)
         {
        let itemInfo = food_list.find((product)=>product._id===item)
        totalAmount+= itemInfo.price * cartItems[item] 
       }
       return totalAmount;
    }
    const ContextValue={
       food_list,
       cartItems,
       addtoCart,
       removefromCart,
       getTotalAmount
    }
    return (
        <StoreContext.Provider value={ContextValue}>
            {props.children}
        </StoreContext.Provider>
    )

}
export default StoreContextProvider