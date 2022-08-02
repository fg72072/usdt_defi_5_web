import { useState } from "react";
import { Container } from "react-bootstrap"
import { CoinsTable } from "../components"
import { done, DOT, light, stream, WAN, wanBTC, WAND, wanDOGE, wanETH, wanLTC, wanUSDC, wanUSDT, wanXRP, WASP, ZOO } from "../components/Images"

function Home() {
  
    return <section className="section">
        <Container fluid className="custom-container">
            <div className="box">
                <h3 className="section-title">Stream Trade</h3>
                <p className="normal-text">Stream Trade helps users automatically buy and sell cryptocurrencies evenly over time. This enables advanced strategies including but not limited to dollar-cost averaging.</p>
                <div className="first-section-footer">
                    <div className="inner">
                        <img src={stream} />
                        <span className="normal-text-sm">24x7 Stream Service</span>
                    </div>
                    <div className="inner">
                        <img src={light} />
                        <span className="normal-text-sm">Flexible Stream Cycle</span>
                    </div>
                    <div className="inner">
                        <img src={done} />
                        <span className="normal-text-sm">No charge</span>
                    </div>
                </div>
                <div className="icon-list-main">
                    <span className="normal-text-sm">Current Supported Tokens</span>
                    <ul className="icon-list">
                        <li>
                            <img src={WAN} />
                        </li>
                        <li>
                            <img src={WASP} />
                            <div className="inner-text">
                                Add WASP to MetaMask
                            </div>
                        </li>
                        <li>
                            <img src={WAND} />
                            <div className="inner-text">
                                Add WAND to MetaMask
                            </div>
                        </li>
                        <li>
                            <img src={wanUSDT} />
                            <div className="inner-text">
                                Add wanUSDT to MetaMask
                            </div>
                        </li>
                        <li>
                            <img src={ZOO} />
                            <div className="inner-text">
                                Add ZOO to MetaMask
                            </div>
                        </li>
                        <li>
                            <img src={wanLTC} />
                            <div className="inner-text">
                                Add wanLTC to MetaMask
                            </div>
                        </li>
                        <li>
                            <img src={wanXRP} />
                            <div className="inner-text">
                                Add wanXRP to MetaMask
                            </div>
                        </li>
                        <li>
                            <img src={DOT} />
                            <div className="inner-text">
                                Add DOT to MetaMask
                            </div>
                        </li>
                        <li>
                            <img src={wanDOGE} />
                            <div className="inner-text">
                                Add wanDOGE to MetaMask
                            </div>
                        </li>
                        <li>
                            <img src={wanUSDC} />
                            <div className="inner-text">
                                Add wanUSDC to MetaMask
                            </div>
                        </li>
                        <li>
                            <img src={wanETH} />
                            <div className="inner-text">
                                Add wanETH to MetaMask
                            </div>
                        </li>
                        <li>
                            <img src={wanBTC} />
                            <div className="inner-text">
                                Add wanBTC to MetaMask
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="box mt-4">
                <CoinsTable/>
            </div>
        </Container>
    </section>
}

export default Home