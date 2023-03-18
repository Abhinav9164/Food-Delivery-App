import {IMG_CDN_URL} from "../config.js";

const RestrauntCard = ({name,cuisines,lastMileTravelString,cloudinaryImageId}) => {
    //console.log(props);
   
   return(
   <div className="w-[200px] h-[250px] p-2 m-2 shadow-lg bg-purple-100">
       <img 
       src=
       {IMG_CDN_URL + cloudinaryImageId}/>
       <h2 className="font-bold">{name}</h2>
       <h3>{cuisines.join(", ")}</h3>
       <h4>{lastMileTravelString}</h4>
   </div>
   );
   };

   export default RestrauntCard;