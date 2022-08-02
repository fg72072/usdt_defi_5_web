import { Dropdown } from 'react-bootstrap'
import '../assets/css/header.css'
import { logo } from './Images'
function Header()
{
    return <>
    <header className="custom-header">
        <div className='top-header'>
            <div>
            <Dropdown className="custom-dropdown">
                <Dropdown.Toggle  id="dropdown-basic">
                    EN
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            </div>
            <div className="links">
                <ul>
                    <li>
                        <a href="#">Lightpaper</a>
                    </li>
                    <li>
                        <a href="#">Whitepaper</a>
                    </li>
                    <li>
                        <a href="#">Wiki</a>
                    </li>
                </ul>
                <ul className="social-links">
                    <li>
                        <a href="#"><i class="fa-brands fa-github-alt"></i></a>
                    </li>
                    <li>
                        <a href="#"><i class="fa-brands fa-discord"></i></a>
                    </li>
                    <li>
                        <a href="#"><i class="fa-brands fa-twitter"></i></a>
                    </li>
                    <li>
                        <a href="#" className="button-support">Support</a>
                    </li>
                </ul>
            </div>
        </div>
    </header>
    <header className="custom-header-2">
        <div className='logo-section'>
            <img src={logo} className="logo"/>
        </div>
        <ul className="nav-links">
            <li>
                <a href="#">Technology</a>
            </li>
            <li>
                <a href="#">Community</a>
            </li>
            <li>
                <a href="#">About</a>
            </li>
            <li>
                <a href="#">Blog</a>
            </li>
            <li>
                <a href="#">Build</a>
            </li>
            <li>
                <a href="#">Contact</a>
            </li>
        </ul>
        </header>
    </>
}

export default Header