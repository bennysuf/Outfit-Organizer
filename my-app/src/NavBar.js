import { NavLink } from "react-router-dom";

function NavBar(){
 return (
    <div>
        <NavLink to="/">
            Home 
        </NavLink>
       
        <NavLink to="/wardrobe">
            Wardrobe 
        </NavLink>
    </div>
 )
}

export default NavBar;