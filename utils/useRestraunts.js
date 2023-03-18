import { useEffect, useState } from "react";
import { FETCH_MENU_API } from "../config";

const useRestraunts = (id) =>
{

const [restaurant,setRestraunts] = useState(null);

//getting Dta from API
useEffect(() => {
    getRestrauntInfo();
   },[]);
   

   async function getRestrauntInfo(){

   const data = await fetch(FETCH_MENU_API+id)
   const json = await data.json();
   //console.log(json.data);
setRestraunts(json.data);

}

return restaurant;

}

export default useRestraunts;