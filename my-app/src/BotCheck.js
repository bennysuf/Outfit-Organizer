import { NavLink } from "react-router-dom"

function BotCheck() {

    return (
        <div className="robot">
            <label>Confirm you aren't a robot</label>
            <br />
            <NavLink to="/home"><button>Click</button></NavLink>
        </div >

    )
}

export default BotCheck;