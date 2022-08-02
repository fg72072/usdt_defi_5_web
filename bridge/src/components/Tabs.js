import { NavLink } from "react-router-dom"


function Tabs()
{
    return <>
    <div className="btn-tabs">
        <NavLink to={'/'}><i class="fa-solid fa-house-user"></i><span>Home</span></NavLink>
        <NavLink to={'/history'}><i class="fa-solid fa-clock-rotate-left"></i><span>History</span></NavLink>
    </div>
    </>
}

export default Tabs