import { useEffect, useState } from "react";
import { arrow, bnb, eth, matic, usdt, WAN, wanUSDT } from "./Images"
import {  Deposit,Withdraw,Start } from "./"
import $ from 'jquery'
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

    useEffect(()=>{
        $(".stream-btn").click(function(){
            let parent = $(this).parents(".stream-parent-div");
            parent.find('.stream-div .second').css({'height':'100px','border-radius':'0px'})
            parent.find(".inner-div").toggleClass("d-flex");
        })
    },[])
    return <div className="custom-table">
        <div className="thead">
            <div className="tr">
                <span className="th">Crypto</span>
                <span className="th">My Wallet</span>
                <span className="th">My Deposits</span>
                <span className="th"></span>
                <div className="second-tr">
                <span className="th large-td">Auto Directions</span>
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
        </div>
        <div className="tbody">
            <div className="tr">
                <span className="td">
                    <div className="flex-text-icon">
                        <img src={usdt}/>
                        <span>USDTd</span>
                    </div>
                </span>
                <span className="td">
                    <span><span className="text-white">0.0 </span>USDTd</span>
                </span>
                <span className="td">
                    <span><span className="text-white">0.0 </span>USDTd</span>
                </span>
                <span className="td">
                <div className="btn-flex-colmn">
                        <button className="custom-btn secondary-btn" onClick={handleShow}>Deposit</button>
                        <button className="custom-btn primary-btn mt-2" onClick={withdrawHandleShow}>Withdraw</button>
                    </div>
                </span>
                <div className="stream-parent-div">
                <div className="second-tr">
                    <span className="td large-td">
                        <div className="stream-div">
                        <div className="second">
                            <div className="td-icon-flex">
                            <div className="flex-text-icon">
                                <img src={usdt}/>
                                <span>USDTd</span>
                            </div>
                            <img src={arrow}/>
                            <div className="flex-text-icon">
                                <img src={eth}/>
                                <span>ETH</span>
                            </div>
                            <div className="inner-text-ab">
                                <div>
                                    <span>Path:</span>
                                    <span>{'-'}</span>
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
                            <i class="fa-solid fa-angle-down text-white pointer stream-btn"></i>
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
          
                <div className="second-tr inner-div">
                    <span className="td large-td">
                        <div className="stream-div">
                        <div className="second">
                            <div className="td-icon-flex">
                            <div className="flex-text-icon">
                                <img src={usdt}/>
                                <span>USDTd</span>
                            </div>
                            <img src={arrow}/>
                            <div className="flex-text-icon">
                                <img src={bnb}/>
                                <span>BNB</span>
                            </div>
                            <div className="inner-text-ab">
                                <div>
                                    <span>Path:</span>
                                    <span>{'-'}</span>
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
                <div className="second-tr inner-div">
                    <span className="td large-td">
                        <div className="stream-div">
                        <div className="second">
                            <div className="td-icon-flex">
                            <div className="flex-text-icon">
                                <img src={usdt}/>
                                <span>USDTd</span>
                            </div>
                            <img src={arrow}/>
                            <div className="flex-text-icon">
                                <img src={matic}/>
                                <span>Matic</span>
                            </div>
                            <div className="inner-text-ab">
                                <div>
                                    <span>Path:</span>
                                    <span>{'-'}</span>
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
            </div>
            <div className="tr">
                <span className="td">
                    <div className="flex-text-icon">
                        <img src={bnb}/>
                        <span>BNB</span>
                    </div>
                </span>
                <span className="td">
                    <span><span className="text-white">0.0 </span>BNB</span>
                </span>
                <span className="td">
                    <span><span className="text-white">0.0 </span>USDTd</span>
                </span>
                <span className="td">
                <div className="btn-flex-colmn">
                        <button className="custom-btn secondary-btn" onClick={handleShow}>Deposit</button>
                        <button className="custom-btn primary-btn mt-2" onClick={withdrawHandleShow}>Withdraw</button>
                    </div>
                </span>
                <div className="stream-parent-div">
                <div className="second-tr">
                    <span className="td large-td">
                        <div className="stream-div">
                        <div className="second">
                            <div className="td-icon-flex">
                            <div className="flex-text-icon">
                                <img src={bnb}/>
                                <span>BNB</span>
                            </div>
                            <img src={arrow}/>
                            <div className="flex-text-icon">
                                <img src={usdt}/>
                                <span>USDTd</span>
                            </div>
                            <div className="inner-text-ab">
                                <div>
                                    <span>Path:</span>
                                    <span>{'-'}</span>
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
                            <i class="fa-solid fa-angle-down text-white pointer stream-btn"></i>
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
                <div className="second-tr inner-div">
                    <span className="td large-td">
                        <div className="stream-div">
                        <div className="second">
                            <div className="td-icon-flex">
                            <div className="flex-text-icon">
                                <img src={bnb}/>
                                <span>BNB</span>
                            </div>
                            <img src={arrow}/>
                            <div className="flex-text-icon">
                                <img src={eth}/>
                                <span>ETH</span>
                            </div>
                            <div className="inner-text-ab">
                                <div>
                                    <span>Path:</span>
                                    <span>{'-'}</span>
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
                <div className="second-tr inner-div">
                    <span className="td large-td">
                        <div className="stream-div">
                        <div className="second">
                            <div className="td-icon-flex">
                            <div className="flex-text-icon">
                                <img src={bnb}/>
                                <span>BNB</span>
                            </div>
                            <img src={arrow}/>
                            <div className="flex-text-icon">
                                <img src={matic}/>
                                <span>Matic</span>
                            </div>
                            <div className="inner-text-ab">
                                <div>
                                    <span>Path:</span>
                                    <span>{'-'}</span>
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
            </div>
            <div className="tr">
                <span className="td">
                    <div className="flex-text-icon">
                        <img src={eth}/>
                        <span>ETH</span>
                    </div>
                </span>
                <span className="td">
                    <span><span className="text-white">0.0 </span>ETH</span>
                </span>
                <span className="td">
                    <span><span className="text-white">0.0 </span>USDTd</span>
                </span>
                <span className="td">
                <div className="btn-flex-colmn">
                        <button className="custom-btn secondary-btn" onClick={handleShow}>Deposit</button>
                        <button className="custom-btn primary-btn mt-2" onClick={withdrawHandleShow}>Withdraw</button>
                    </div>
                </span>
                <div className="stream-parent-div">
                <div className="second-tr">
                    <span className="td large-td">
                        <div className="stream-div">
                        <div className="second">
                            <div className="td-icon-flex">
                            <div className="flex-text-icon">
                                <img src={eth}/>
                                <span>ETH</span>
                            </div>
                            <img src={arrow}/>
                            <div className="flex-text-icon">
                                <img src={usdt}/>
                                <span>USDTd</span>
                            </div>
                            <div className="inner-text-ab">
                                <div>
                                    <span>Path:</span>
                                    <span>{'-'}</span>
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
                            <i class="fa-solid fa-angle-down text-white pointer stream-btn"></i>
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
                <div className="second-tr inner-div">
                    <span className="td large-td">
                        <div className="stream-div">
                        <div className="second">
                            <div className="td-icon-flex">
                            <div className="flex-text-icon">
                                <img src={eth}/>
                                <span>ETH</span>
                            </div>
                            <img src={arrow}/>
                            <div className="flex-text-icon">
                                <img src={bnb}/>
                                <span>BNB</span>
                            </div>
                            <div className="inner-text-ab">
                                <div>
                                    <span>Path:</span>
                                    <span>{'-'}</span>
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
                <div className="second-tr inner-div">
                    <span className="td large-td">
                        <div className="stream-div">
                        <div className="second">
                            <div className="td-icon-flex">
                            <div className="flex-text-icon">
                                <img src={eth}/>
                                <span>ETH</span>
                            </div>
                            <img src={arrow}/>
                            <div className="flex-text-icon">
                                <img src={matic}/>
                                <span>Matic</span>
                            </div>
                            <div className="inner-text-ab">
                                <div>
                                    <span>Path:</span>
                                    <span>{'-'}</span>
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
            </div>
            <div className="tr">
                <span className="td">
                    <div className="flex-text-icon">
                        <img src={matic}/>
                        <span>Matic</span>
                    </div>
                </span>
                <span className="td">
                    <span><span className="text-white">0.0 </span>Matic</span>
                </span>
                <span className="td">
                    <span><span className="text-white">0.0 </span>USDTd</span>
                </span>
                <span className="td">
                <div className="btn-flex-colmn">
                        <button className="custom-btn secondary-btn" onClick={handleShow}>Deposit</button>
                        <button className="custom-btn primary-btn mt-2" onClick={withdrawHandleShow}>Withdraw</button>
                    </div>
                </span>
                <div className="stream-parent-div">
                <div className="second-tr">
                    <span className="td large-td">
                        <div className="stream-div">
                        <div className="second">
                            <div className="td-icon-flex">
                            <div className="flex-text-icon">
                                <img src={matic}/>
                                <span>Matic</span>
                            </div>
                            <img src={arrow}/>
                            <div className="flex-text-icon">
                                <img src={usdt}/>
                                <span>USDTd</span>
                            </div>
                            <div className="inner-text-ab">
                                <div>
                                    <span>Path:</span>
                                    <span>{'-'}</span>
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
                            <i class="fa-solid fa-angle-down text-white pointer stream-btn"></i>
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
                <div className="second-tr inner-div">
                    <span className="td large-td">
                        <div className="stream-div">
                        <div className="second">
                            <div className="td-icon-flex">
                            <div className="flex-text-icon">
                                <img src={matic}/>
                                <span>Matic</span>
                            </div>
                            <img src={arrow}/>
                            <div className="flex-text-icon">
                                <img src={bnb}/>
                                <span>BNB</span>
                            </div>
                            <div className="inner-text-ab">
                                <div>
                                    <span>Path:</span>
                                    <span>{'-'}</span>
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
                <div className="second-tr inner-div">
                    <span className="td large-td">
                        <div className="stream-div">
                        <div className="second">
                            <div className="td-icon-flex">
                            <div className="flex-text-icon">
                                <img src={matic}/>
                                <span>Matic</span>
                            </div>
                            <img src={arrow}/>
                            <div className="flex-text-icon">
                                <img src={eth}/>
                                <span>ETH</span>
                            </div>
                            <div className="inner-text-ab">
                                <div>
                                    <span>Path:</span>
                                    <span>{'-'}</span>
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
            </div>
           
        </div>
        <Deposit show={show} handleClose={handleClose}/>
        <Withdraw show={withdrawShow} handleClose={withdrawHandleClose}/>
        <Start show={startShow} handleClose={startHandleClose}/>
    </div>
}

export default CoinsTable