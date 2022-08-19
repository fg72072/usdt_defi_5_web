import { useState } from "react";
import { Container } from "react-bootstrap"
import { CoinsTable } from "../components"
import { bnb, done, DOT, eth, light, matic, stream, usdt, WAN, wanBTC, WAND, wanDOGE, wanETH, wanLTC, wanUSDC, wanUSDT, wanXRP, WASP, ZOO } from "../components/Images"

function Home() {
  
    return <section className="section">
        <Container fluid className="custom-container">
            <div className="box">
                <h3 className="section-title">USDT- Defi Auto</h3>
                <p className="normal-text">USDT- Defi Auto helps users automatically buy and sell cryptocurrencies evenly over time. This enables advanced strategies including but not limited to dollar-cost averaging.</p>
                <div className="first-section-footer">
                    <div className="inner">
                        <img src={stream} />
                        <span className="normal-text-sm">24x7 Auto Service</span>
                    </div>
                    <div className="inner">
                        <img src={light} />
                        <span className="normal-text-sm">Custom Auto Cycles</span>
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
                            <img src={usdt} />
                            <div className="inner-text">
                                Add USDTd to MetaMask
                            </div>
                        </li>
                        <li>
                            <img src={bnb} />
                            <div className="inner-text">
                                Add BNB to MetaMask
                            </div>
                        </li>
                        <li>
                            <img src={eth} />
                            <div className="inner-text">
                                Add ETH to MetaMask
                            </div>
                        </li>
                        <li>
                            <img src={matic} />
                            <div className="inner-text">
                                Add Matic to MetaMask
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