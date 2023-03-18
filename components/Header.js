import { useState,useContext } from "react";
import { Link } from "react-router-dom"; 
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";


const Title = () => (
    <a href="/">
   <img 
   className="h-28 p-2"
   alt="logo"
   src="https://yt3.googleusercontent.com/ytc/AL5GRJXudT76175T4x4n7eslWM1YkgNLHDSSqfXGoadl=s900-c-k-c0x00ffffff-no-rj">
   </img>
   </a>
); 

const Header = () =>{

    const [isLoggedIn,setLoggedIn] = useState(false);

    const {user} = useContext(UserContext);

    const cartItems = useSelector(store =>store.cart.items);


    return(
        <div className="flex justify-between bg-pink-50 shadow-lg sm:bg-pink-50 md:bg-pink-50">
            <Title/>
            <div className="nav-items">
                <ul className="flex py-10">
                    <Link to ='/'>
                    <li className="px-2">Home</li>
                    </Link>
                    <Link to="/about">
                    <li className="px-2">About</li>
                    </Link>
                    
                    <Link to="/contact">
                    <li className="px-2">Contact</li>
                    </Link>
                    <Link to="/instamart">
                    <li className="px-2">Instamart</li>
                    </Link>
                    <Link to="/cart">
                    <li className="px-2">Cart-{cartItems.length}</li>
                    </Link>
                    
                </ul>
                
            </div>
            <span className=" p-10 font-bold text-red-900 ">{user.name}</span>
            {
               isLoggedIn?
               (<button className="m-8 p-2 bg-purple-900  hover:bg-slate-400 text-white rounded-md" onClick={() => setLoggedIn(false)}>LogOut</button>):
               (<button className="m-8 p-2 bg-purple-900  hover:bg-slate-400  text-white rounded-md" onClick={()=> setLoggedIn(true)}>LogIn</button>)
            }

        </div>
    );
};

export default Header;