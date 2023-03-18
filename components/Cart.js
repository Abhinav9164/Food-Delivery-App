import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import FoodItems from "./FoodItems";

const Cart = () => {

const cartItems = useSelector((store) =>store.cart.items)

const dispatch = useDispatch();

const handleClearCart = () =>{
  dispatch(clearCart());
}

return(
<div>
    <h1 className="font-bold text-lg">
        Cart items-{cartItems.length }
    </h1>
    <button 
    className="bg-green-100"
    onClick={() => handleClearCart()}
    >Clear Cart</button>
<div className="flex">
{cartItems.map(items =>  <FoodItems key={items.id} {...items}/>)}
</div>
   
   
</div>
)
}

export default Cart;