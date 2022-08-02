import '../assets/css/header.css'

import { dots, jackpot, logo, market, setting, stream, volume, wallet } from "./Images"

function Header()
{
    return <header className="custom-header">
        <div className="logo-section">
            <img src={logo}/>
            <div className='version-control'>
            <div className="custom-dropdown">
                <div className="version-toggle">
                    <span>V2</span>
                    <i class="fa-solid fa-chevron-down"></i>
                </div>
                <div className='dropdown-inner'>
                    <a href='#' className='item'>V1</a>
                    <a href='#' className='item'>V2</a>
                </div>
                </div>
            </div>
        </div>
        <div className='custom-nav-link'>
            <ul className='links-ul'>
                <li>
                    <a href='#' className='link'><img src={stream}/><span>Stream Trade</span></a>
                </li>
                <li>
                    <a href='#' className='link'><img src={jackpot}/><span>Jack's Pot</span></a>
                </li>
                <li>
                    <a href='#' className='blue-link link'><img src={wallet}/><span>Connect Wallet</span></a>
                </li>
                <li>
                    <a href='#' className='yellow-link link'><img src={market}/><span>Market</span></a>
                </li>
                <li>
                    <a href='#' className='round-btn link'><img src={volume}/></a>
                </li>
                <li>
                    <div className="custom-dropdown">
                        <a href='#' className='round-btn link'><img src={setting}/></a>
                        <div className='dropdown-inner dropdown-width'>
                            <a href='#' className='item'>English</a>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="custom-dropdown">
                        <a href='#' className='round-btn link'><img src={dots}/></a>
                        <div className='dropdown-inner dropdown-width'>
                            <a href='#' className='item'><i class="fa-solid fa-link"></i><span>WhitePaper</span></a>
                            <a href='#' className='item'><i class="fa-brands fa-twitter"></i><span>Twitter</span></a>
                            <a href='#' className='item'><i class="fa-brands fa-telegram"></i><span>Telegram</span></a>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </header>
}

export default Header