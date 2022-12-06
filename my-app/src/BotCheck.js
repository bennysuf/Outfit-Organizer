import { NavLink } from "react-router-dom"

function BotCheck() {

    return (
        <div className="robot">
            <NavLink to="/home"><input type="checkbox" checked={null} style={{ height: "30px", width: "75px" }}></input></NavLink>
            <label className="lable">I'm not a robot</label>
        </div >
    )
}

export default BotCheck;
