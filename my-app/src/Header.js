import { NavLink } from "react-router-dom"

function Header() {
    return (
        <>
            <h1 className="header">Outfit Organizer</h1>
            <NavLink to="/home/new" className="add"><button>Add new item</button></NavLink>
        </>
    )
}

export default Header;