import { useState } from "react";
import { arrow, WAN, wanUSDT } from "./Images"
import {  Deposit,Withdraw,Start } from "./"

function CoinsTable()
{
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [withdrawShow, setWithdrawShow] = useState(false);

    const withdrawHandleClose = () => setWithdrawShow(false);
    const withdrawHandleShow = () => setWithdrawShow(true);

    const [startShow, setStartShow] = useState(false);

    const startHandleClose = () => setStartShow(false);
    const startHandleShow = () => setStartShow(true);
    return <div className="custom-table">
        <div className="thead">
            <div className="tr">
                <span className="th">Crypto</span>
                <span className="th">My Wallet</span>
                <span className="th">My Deposits</span>
                <span className="th large-td">Stream Direction</span>
                <span className="th">Time Left</span>
                <span className="th">Paid</span>
                <span className="th">
                    <div className="search-box">
                    <input className="" placeholder="Search"/>
                    <i class="fa-solid fa-magnifying-glass"></i>
                    </div>
                </span>
            </div>
        </div>
        <div className="tbody">
            <div className="tr">
                <span className="td">
                    <div className="flex-text-icon">
                        <img src={WAN}/>
                        <span>WAN</span>
                    </div>
                </span>
                <span className="td">
                    <span><span className="text-white">0.0 </span>WAN</span>
                </span>
                <span className="td">
                    <span><span className="text-white">0.0 </span>WAN</span>
                </span>
                <span className="td large-td">
                    <div className="stream-div">
                    <div className="btn-flex-colmn">
                        <button className="custom-btn secondary-btn" onClick={handleShow}>Deposit</button>
                        <button className="custom-btn primary-btn mt-2" onClick={withdrawHandleShow}>Withdraw</button>
                    </div>
                    <div className="second">
                        <div className="td-icon-flex">
                        <div className="flex-text-icon">
                            <img src={WAN}/>
                            <span>WAN</span>
                        </div>
                        <img src={arrow}/>
                        <div className="flex-text-icon">
                            <img src={wanUSDT}/>
                            <span>wanUSDT</span>
                        </div>
                        <div className="inner-text-ab">
                            <div>
                                <span>Path:</span>
                                <span>{'WAN->wanUSDT'}</span>
                            </div>
                            <div>
                                <span>Start Time:</span>
                                <span>-</span>
                            </div>
                            <div>
                                <span>End Time:</span>
                                <span>-</span>
                            </div>
                            <div>
                                <span>Update Time:</span>
                                <span>-</span>
                            </div>
                            <div>
                                <span>Collateral Amount:</span>
                                <span>-</span>
                            </div>
                            <div>
                                <span>Collateral Asset:</span>
                                <span>-</span>
                            </div>
                            <div>
                                <span>Pending Amount:</span>
                                <span>-</span>
                            </div>
                            <div>
                                <span>Total Paid in Pair:</span>
                                <span>-</span>
                            </div>
                            <div>
                                <span>Stream Rate:</span>
                                <span>-</span>
                            </div>
                        </div>
                        </div>
                        <i class="fa-solid fa-angle-down text-white pointer"></i>
                        
                    </div>
                    </div>
                </span>
                <span className="td">
                    -
                </span>
                <span className="td">
                    -
                </span>
                <span className="td">
                    <div className="btn-flex-colmn">
                        <button className="custom-btn secondary-btn" onClick={startHandleShow}>Start</button>
                        <button className="custom-btn primary-btn mt-2" disabled>Stop</button>
                    </div>
                </span>
            </div>
            <div className="tr">
                <span className="td">
                    <div className="flex-text-icon">
                        <img src={WAN}/>
                        <span>WAN</span>
                    </div>
                </span>
                <span className="td">
                    <span><span className="text-white">0.0 </span>WAN</span>
                </span>
                <span className="td">
                    <span><span className="text-white">0.0 </span>WAN</span>
                </span>
                <span className="td large-td">
                    <div className="stream-div">
                    <div className="btn-flex-colmn">
                        <button className="custom-btn secondary-btn" onClick={handleShow}>Deposit</button>
                        <button className="custom-btn primary-btn mt-2" onClick={withdrawHandleShow}>Withdraw</button>
                    </div>
                    <div className="second">
                        <div className="td-icon-flex">
                        <div className="flex-text-icon">
                            <img src={WAN}/>
                            <span>WAN</span>
                        </div>
                        <img src={arrow}/>
                        <div className="flex-text-icon">
                            <img src={wanUSDT}/>
                            <span>wanUSDT</span>
                        </div>
                        <div className="inner-text-ab">
                            <div>
                                <span>Path:</span>
                                <span>{'WAN->wanUSDT'}</span>
                            </div>
                            <div>
                                <span>Start Time:</span>
                                <span>-</span>
                            </div>
                            <div>
                                <span>End Time:</span>
                                <span>-</span>
                            </div>
                            <div>
                                <span>Update Time:</span>
                                <span>-</span>
                            </div>
                            <div>
                                <span>Collateral Amount:</span>
                                <span>-</span>
                            </div>
                            <div>
                                <span>Collateral Asset:</span>
                                <span>-</span>
                            </div>
                            <div>
                                <span>Pending Amount:</span>
                                <span>-</span>
                            </div>
                            <div>
                                <span>Total Paid in Pair:</span>
                                <span>-</span>
                            </div>
                            <div>
                                <span>Stream Rate:</span>
                                <span>-</span>
                            </div>
                        </div>
                        </div>
                        <i class="fa-solid fa-angle-down text-white pointer"></i>
                        
                    </div>
                    </div>
                </span>
                <span className="td">
                    -
                </span>
                <span className="td">
                    -
                </span>
                <span className="td">
                    <div className="btn-flex-colmn">
                        <button className="custom-btn secondary-btn" onClick={startHandleShow}>Start</button>
                        <button className="custom-btn primary-btn mt-2" disabled>Stop</button>
                    </div>
                </span>
            </div>
            <div className="tr">
                <span className="td">
                    <div className="flex-text-icon">
                        <img src={WAN}/>
                        <span>WAN</span>
                    </div>
                </span>
                <span className="td">
                    <span><span className="text-white">0.0 </span>WAN</span>
                </span>
                <span className="td">
                    <span><span className="text-white">0.0 </span>WAN</span>
                </span>
                <span className="td large-td">
                    <div className="stream-div">
                    <div className="btn-flex-colmn">
                        <button className="custom-btn secondary-btn" onClick={handleShow}>Deposit</button>
                        <button className="custom-btn primary-btn mt-2" onClick={withdrawHandleShow}>Withdraw</button>
                    </div>
                    <div className="second">
                        <div className="td-icon-flex">
                        <div className="flex-text-icon">
                            <img src={WAN}/>
                            <span>WAN</span>
                        </div>
                        <img src={arrow}/>
                        <div className="flex-text-icon">
                            <img src={wanUSDT}/>
                            <span>wanUSDT</span>
                        </div>
                        <div className="inner-text-ab">
                            <div>
                                <span>Path:</span>
                                <span>{'WAN->wanUSDT'}</span>
                            </div>
                            <div>
                                <span>Start Time:</span>
                                <span>-</span>
                            </div>
                            <div>
                                <span>End Time:</span>
                                <span>-</span>
                            </div>
                            <div>
                                <span>Update Time:</span>
                                <span>-</span>
                            </div>
                            <div>
                                <span>Collateral Amount:</span>
                                <span>-</span>
                            </div>
                            <div>
                                <span>Collateral Asset:</span>
                                <span>-</span>
                            </div>
                            <div>
                                <span>Pending Amount:</span>
                                <span>-</span>
                            </div>
                            <div>
                                <span>Total Paid in Pair:</span>
                                <span>-</span>
                            </div>
                            <div>
                                <span>Stream Rate:</span>
                                <span>-</span>
                            </div>
                        </div>
                        </div>
                        <i class="fa-solid fa-angle-down text-white pointer"></i>
                        
                    </div>
                    </div>
                </span>
                <span className="td">
                    -
                </span>
                <span className="td">
                    -
                </span>
                <span className="td">
                    <div className="btn-flex-colmn">
                        <button className="custom-btn secondary-btn" onClick={startHandleShow}>Start</button>
                        <button className="custom-btn primary-btn mt-2" disabled>Stop</button>
                    </div>
                </span>
            </div>
        </div>
        <Deposit show={show} handleClose={handleClose}/>
        <Withdraw show={withdrawShow} handleClose={withdrawHandleClose}/>
        <Start show={startShow} handleClose={startHandleClose}/>
    </div>
}

export default CoinsTable