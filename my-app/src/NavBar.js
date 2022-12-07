import { NavLink } from "react-router-dom";

function NavBar(){
 return (
    <div className="nav">
        <NavLink 
        style={{ marginRight: "10px" }} 
        to="/home">
            Home 
        </NavLink>
        <NavLink
         style={{ marginRight: "10px" }} 
         to="/portfolio">
            Portfolio 
        </NavLink>
    </div>
 )
}

export default NavBar;
