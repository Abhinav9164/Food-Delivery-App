import React, { lazy,Suspense } from "react";
import  ReactDOM  from "react-dom/client";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import About from "./components/About";
import { createBrowserRouter ,RouterProvider,Outlet} from "react-router-dom";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestrauntMenu from "./components/ReastrauntMenu";
import Profile from "./components/Profile";
import Shimmer from "./components/Shimmer";
//import Instamart from "./components/Instamart";
//import ProfileClass from "./components/ProfileClass";
import { Provider } from "react-redux";
import store from "./utils/store";
import Cart from "./components/Cart";



//chunking
//lazy-loading
//Dynamic loading
//Dynamic Import
//code-splitting


const Instamart = lazy(()=>import("./components/Instamart"));

// upon on-demand loadinf-> upon render -> react suspends loading


const AppLayout = () => {
    return(
  <Provider store={store}>      
<Header />
<Outlet />
<Footer />
</Provider>
)
}

const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        errorElement:<Error/>,
        children:[
            {
                path:"/about",
                element:<About/>,
                children:[{
                    path:"profile",
                    element:<Profile />
                }]
            },
            {
                path:"/",
                element:<Body/>,
            },
            {
                path:"/contact",
                element:<Contact/>,
            },
            {
                path:"/restraunt/:id",
                element:<RestrauntMenu/>
            },
            {
                path:"instamart",
                element:(
<Suspense fallback={<Shimmer/>}><Instamart/></Suspense>

                ),
            },
            {
                path: "/cart",
                element:<Cart/>
            }
        ]
    },
    
]);



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router ={appRouter}/>);