//import { restaurantList } from "../config";
import RestrauntCard from "./RestrauntCard";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer.js";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";

const Body = () => {

const [allRestraunts,setAllRestraunts] = useState([]);
const [filteredRestaurants,setFilteredRestraunts] = useState([]);
const [searchText,setSearchText] = useState("");


useEffect(()=>{

getRestraunts();

},[])

async function getRestraunts() {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6389315&lng=77.08668109999999&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    //console.log(json);
    setAllRestraunts(json?.data?.cards[2]?.data?.data?.cards);

    setFilteredRestraunts(json?.data?.cards[2]?.data?.data?.cards);
}


//not render component(early return)
if(!allRestraunts) return null;

// if(filteredRestaurants?.length===0)
// {
//     return(
//         <h1>
//             No data found
//         </h1>
//     )
// }

const offline = useOnline();

if(!offline){
    return (
        <h1>
            Check internet Connectivity!!!!
        </h1>
    )
}


return allRestraunts.length == 0 ? <Shimmer /> : (
     <>
<div className="search-container p-4 bg-pink-50 my-2 ">
    <input 
    type="text"
    className="p-2 m-2 focus:bg-slate-200"
    placeholder="search"
    value={searchText}
    onChange={(e) => {
        setSearchText(e.target.value);
    }}
    />
    <button 
    className="p-2 m-2 bg-purple-900 text-white rounded-md"
    onClick={ () => {
        const data = filterData(searchText,allRestraunts);
        setFilteredRestraunts(data);
    }}
    >
        Search</button>
</div>


       <div className="flex flex-wrap">
       
{
    filteredRestaurants.map((restaurant) =>{
        return <Link  to={"/restraunt/" + restaurant.data.id}
        key = {restaurant.data.id}>
        <RestrauntCard {...restaurant.data} key={restaurant.data.id}/>
        </Link>
    })
}
       </div>
       
       </>
    );
}

export default Body;