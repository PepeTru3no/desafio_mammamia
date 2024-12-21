import { createContext, useState } from "react";
import { pizzaCart} from '../data/pizzas'

export const CartContext = createContext();

const CartProvider = ({children})=>{
    const [cart, setCart] = useState([]);
    return(        
        <CartContext.Provider value={{cart, setCart}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider