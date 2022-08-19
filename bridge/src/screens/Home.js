import { useState } from "react";
import { Container,Dropdown } from "react-bootstrap"
import { Coins, Tabs } from "../components"
import { addr, bscscan, eth, ethscan, matic, okc, swap, usdt, wan } from "../components/Images"

function Home()
{
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return <main>
        <Container>
            
        <section className="section">
            <Tabs/>
            <div className="main-box">
                <div className="inner-one">
                    <div className="select-coin">
                        <div className="d-flex align-items-center">
                            <img src={usdt} className="coin"/>
                            <span className="name">USDTd</span>
                        </div>
                        <div className="icon-modal-btn" onClick={handleShow}>
                            <span className="gray-text">Asset</span>
                            <i class="fa-solid fa-caret-up secondary-text"></i>
                        </div>
                    </div>
                    <div className="coin-dropdown first-coin-dropdown">
                    <Dropdown>
                        <Dropdown.Toggle className="coin-dropdown-btn" id="dropdown-basic">
                            <span>Select From Chain</span>
                            <i class="fa-solid fa-caret-down"></i>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1"><img src={ethscan}/><span>ETH</span></Dropdown.Item>
                            <Dropdown.Item href="#/action-1"><img src={bscscan}/><span>BSC</span></Dropdown.Item>
                            <Dropdown.Item href="#/action-1"><img src={matic}/><span>Polygon</span></Dropdown.Item>
                        </Dropdown.Menu>
                        </Dropdown>
                    </div>
                    <div className="text-center swap-btn">
                        <img src={swap}/>
                    </div>
                    <div className="coin-dropdown">
                    <Dropdown>
                        <Dropdown.Toggle className="coin-dropdown-btn" id="dropdown-basic">
                            <span>Select To Chain</span>
                            <i class="fa-solid fa-caret-down"></i>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1"><img src={ethscan}/><span>ETH</span></Dropdown.Item>
                            <Dropdown.Item href="#/action-1"><img src={bscscan}/><span>BSC</span></Dropdown.Item>
                            <Dropdown.Item href="#/action-1"><img src={matic}/><span>POLYGON</span></Dropdown.Item>
                        </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>
                <div className="shadow">

                </div>
                <div className="inner-two">
                    <form className="custom-form">
                        <div className="form-group">
                            <label for="">From</label>
                            <div className="input-box">
                                <input readOnly/>
                            </div>
                            <div className="text-end">
                            <span>Balance: <span className="zero">0</span> AAVEw</span>
                            </div>
                        </div>
                        <div className="form-group">
                            <label for="">Recipient</label>
                            <div className="input-box">
                                <input placeholder="Input recipient address please"/>
                                <img src={addr}/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label for="">Amount</label>
                            <div className="input-box">
                                <input />
                                <button className="max-btn mb-2">Max</button>
                            </div>
                            <div className="text-end">
                            <span>Fee: <span className="zero">1.2</span> OKT</span>
                            </div>
                        </div>
                        <div className="form-group">
                            <button className="btn btn-lg secondary-btn w-100">Next</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
        <Coins show={show} handleClose={handleClose}/>
        </Container>
    </main>
}

export default Home