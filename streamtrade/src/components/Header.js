import { dots, logo } from "./Images"
import '../assets/css/header.css'
import { Dropdown } from "react-bootstrap"
function Header()
{
    return <header>
        <div className="logo-section">
        <img src={logo} className="logo"/>
        </div>
        <div className="links d-flex align-items-center">
            <button className="wallet-btn icon-btn"><i class="fa-solid fa-wallet"></i><span>Connect Wallet</span></button>
            <Dropdown className="margin-left">
            <Dropdown.Toggle className="dropdown-btn" id="dropdown-basic">
                {/* <img src={dots}/> */}
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1"><i class="fa-solid fa-circle-info"></i><span> Help</span></Dropdown.Item>
                <Dropdown.Item href="#/action-2"><i class="fa-solid fa-angle-left"></i><i class="fa-solid fa-angle-right"></i><span> Github</span></Dropdown.Item>
                <Dropdown.Item href="#/action-3"> <i class="fa-solid fa-dollar-sign"></i><span> WanLend</span></Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown>
        </div>
    </header>
}

export default Header