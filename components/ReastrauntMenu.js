import { useParams } from "react-router-dom"
//import { useState,useEffect} from "react";
import { IMG_CDN_URL } from "../config";
import Shimmer from "./Shimmer";
import useRestraunts from "../utils/useRestraunts";
import { addItem, removeItem } from "../utils/cartSlice";
//import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";


const RestrauntMenu = () =>{

    const {id} = useParams();

    const restraunts = useRestraunts(id);

    const dispatch = useDispatch();

   const addFoodItem = (item) =>{
    dispatch(addItem(item))
   }

   const removeFoodItem = (item) => {
    dispatch(removeItem(item))
   }

    return  (!restraunts)? <Shimmer/> : (
        <div className="flex  p-2 m-2">
        <div className="m-2 p-2 ">
            <h1>
                Restraunt Id: {id}
            </h1>
            <h2>{restraunts?.name}</h2>
            <img src={IMG_CDN_URL+restraunts.cloudinaryImageId}/> 
            <h2>{restraunts?.area}</h2>
            <h2>{restraunts?.city}</h2>
            <h2>{restraunts?.avgRating} stars</h2>
            <h2>{restraunts?.costForTwoMsg}</h2>
        </div>
        <div>
          
        </div>
        <div className="p-2 m-2">
            <h1>Menu</h1>
         <ul>{
         Object.values(restraunts?.menu?.items).map((item) =><li key ={item.id}>{item.name}-
         <div className="  flex space-x-2">
         <button className="
         rounded-xl p-2 m-2 bg-purple-200"
         onClick={()=>addFoodItem(item)}
         >Add</button>
         <button className="
rounded-xl p-2 m-2 bg-purple-200"
         onClick={()=>removeFoodItem(item)}
         >Remove</button>
         </div>
         </li>)}</ul>
        </div>  
        </div>
    )
}

export default RestrauntMenu;