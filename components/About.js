import { Outlet } from "react-router-dom";
import Profile from "./Profile.js";


const About = () => {
    return (
        <div>
        <h1>
            About Us
        </h1>
        <p>This is Abhinav Page</p>
        <Profile name={"Abhinav"}/>
        </div>
    )
}

export default About;