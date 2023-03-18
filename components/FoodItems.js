import {IMG_CDN_URL} from "../config";

const FoodItems = ({
    name,
    description,
    cloudinaryImageId,
    price,
}) => {

return(
<div className="w-56 p-2 m-2 shadow-lg bg-pink-100 flex-reverse-wrap">
    <img className="w-56 p-2 m-2 shadow-lg bg-pink-100"
    src=
    {
        IMG_CDN_URL + cloudinaryImageId
    }/>
<h1> {name}</h1>
<h3>{description}</h3>
<h4>{price}</h4>
</div>
)

}

export default FoodItems;