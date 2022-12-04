import { NavLink } from "react-router-dom"

function BotCheck() {

    return (
        <div className="robot">
            <label>Confirm you aren't a robot</label>
            <br />
            <NavLink to="/home"><button style={{height: "40px", width:"75px"}}>Click</button></NavLink>
        </div >

    )
}

export default BotCheck;