import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

const store = configureStore({
 
    
    reducer:{
        cart:cartSlice,
    },

});




export default store;



/**
 * steps:
 *  -configureStore() - RTK
 * 
 * Provide my store to App
 * <Provider store ={store}> import from react-redux
 * 
 * Slice
 * 
 * -RTK -createSlice({
 * name:"",
 * initialState:
 * reducers:{
 * addItems:(state,action) => {state = action.payload}
 * 
 * }
 * })
 * 
 * export default cartSlice.reducer
 * export const {addItems,removeItems,clearCart}
 * 
 * Put slice into store
 *    -{
 *       reducer: {
 *              
 *        cart:cartSlice,
 *        user:userSlice
 * 
 *            }
 * 
 *     }
 * 
 * 
 */