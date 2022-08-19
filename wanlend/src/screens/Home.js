import { Row,Col,Container } from "react-bootstrap"
import { arrowdown, arrowdownblue, arrowdownwhite, arrowup, arrowupwhite, bnb, circle, eth, matic, usdt } from "../components/Images"
import { useEffect, useState } from "react"
import $ from 'jquery'
function Home()
{
    const [toggle,setToggle] = useState(true);
    const [collapse, setCollapse] = useState(false);

    useEffect(() => {
        $(".table-inner-header").click(function(){
            $(this).parent().find(".table").toggle();
        })
    }, [])
    

    console.log(toggle)
    return <main>
        <Container fluid className="custom-container">
        <section className="section-banner">
            <Row className="align-items-center">
                <Col lg={4}>
                    <div className="box-normal">
                        <img src={arrowup}/>
                        <div className="inner">
                            <span className="name primary-text">Supply Balance</span>
                            <span className="value">$0.00</span>
                        </div>
                    </div>
                </Col>
                <Col lg={4}>
                    <div className="circle-box">
                        <div className="relative-box">
                        <div id="netapy">Net APR%</div>
                        <div id="netapy_value">0%</div>
                        </div>
                    </div>
                    
                </Col>
                <Col lg={4}>
                    <div className="box-normal">
                        <img src={arrowdown}/>
                        <div className="inner">
                            <span className="name secondary-text">Borrow Balance</span>
                            <span className="value">$0.00</span>
                        </div>
                    </div>
                </Col>
            </Row>
            <div className="text-center">
                <button type="button" onClick={() => setToggle(toggle => !toggle)} role="switch" aria-checked="true" className={"ant-switch  ant-switch-small switchStyle___1cfxp " + (toggle ? "ant-switch-checked" : "gray-bg")} ant-click-animating="false">
                    <div class="ant-switch-handle"></div>
                    <span class="ant-switch-inner"></span>
                </button>
                <p className=" mt-1">APR {toggle ? "With" : "Without"} USDTd</p>
            </div>
        </section>
        <section className="section">
            <div className="box-two">
                <div className="arrow-text"> 
                    <img src={arrowdownblue} width={20}/>
                    <span className="secondary-text">Borrow Limit</span>
                </div>
                <div className="percentage-main">
                    <span className="secondary-text">0%</span>
                    <div className="bar">
                    </div>
                    <span className="secondary-text">0%</span>
                </div>
            </div>
            <Row>
                <Col lg={6}>
                    <div className="table-main">
                        <div className="table-header primary-bg">
                            <img src={arrowupwhite}/>
                            <h3 className="section-title">Supply Markets</h3>
                        </div>
                        <div className="table-inner-header" >
                            <i class="fa-solid fa-caret-down"></i>
                            <span>All Markets</span>
                        </div>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>
                                    Asset
                                    </th>
                                    <th>
                                    Supply APR
                                    </th>
                                    <th>
                                    Wallet
                                    </th>
                                    <th>
                                    Collateral/Factor
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                               <tr>
                                <td>
                                        <div className="icon-flex">
                                        <img src={usdt}/>
                                        <span>USDTd</span>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="green-text">
                                            <i class="fa-solid fa-arrow-up"></i>
                                            <span>4.88%</span>
                                        </div>
                                    </td>
                                    <td>
                                        <span className="d-block">0</span>
                                        <span className="d-block">USDTd</span>
                                    </td>
                                    <td>
                                    <button type="button"  role="switch" aria-checked="true" className="ant-switch  ant-switch-small switchStyle___1cfxp gray-bg" ant-click-animating="false">
                                        <div class="ant-switch-handle"></div>
                                        <span class="ant-switch-inner"></span>
                                    </button>
                                    <br/>
                                    <span>60%</span>
                                    </td>
                               </tr>
                               <tr>
                                <td>
                                        <div className="icon-flex">
                                        <img src={eth}/>
                                        <span>ETH</span>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="green-text">
                                            <i class="fa-solid fa-arrow-up"></i>
                                            <span>4.88%</span>
                                        </div>
                                    </td>
                                    <td>
                                        <span className="d-block">0</span>
                                        <span className="d-block">ETH</span>
                                    </td>
                                    <td>
                                    <button type="button"  role="switch" aria-checked="true" className="ant-switch  ant-switch-small switchStyle___1cfxp gray-bg" ant-click-animating="false">
                                        <div class="ant-switch-handle"></div>
                                        <span class="ant-switch-inner"></span>
                                    </button>
                                    <br/>
                                    <span>60%</span>
                                    </td>
                               </tr>
                               <tr>
                                <td>
                                    <div className="icon-flex">
                                        <img src={bnb}/>
                                        <span>BNB</span>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="green-text">
                                            <i class="fa-solid fa-arrow-up"></i>
                                            <span>4.88%</span>
                                        </div>
                                    </td>
                                    <td>
                                        <span className="d-block">0</span>
                                        <span className="d-block">BNB</span>
                                    </td>
                                    <td>
                                    <button type="button"  role="switch" aria-checked="true" className="ant-switch  ant-switch-small switchStyle___1cfxp gray-bg" ant-click-animating="false">
                                        <div class="ant-switch-handle"></div>
                                        <span class="ant-switch-inner"></span>
                                    </button>
                                    <br/>
                                    <span>60%</span>
                                    </td>
                               </tr>
                               <tr>
                                <td>
                                        <div className="icon-flex">
                                        <img src={matic}/>
                                        <span>Matic</span>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="green-text">
                                            <i class="fa-solid fa-arrow-up"></i>
                                            <span>4.88%</span>
                                        </div>
                                    </td>
                                    <td>
                                        <span className="d-block">0</span>
                                        <span className="d-block">Matic</span>
                                    </td>
                                    <td>
                                    <button type="button"  role="switch" aria-checked="true" className="ant-switch  ant-switch-small switchStyle___1cfxp gray-bg" ant-click-animating="false">
                                        <div class="ant-switch-handle"></div>
                                        <span class="ant-switch-inner"></span>
                                    </button>
                                    <br/>
                                    <span>60%</span>
                                    </td>
                               </tr>

                            </tbody>
                        </table>
                    </div>
                </Col>
                <Col lg={6}>
                    <div className="table-main">
                        <div className="table-header secondary-bg">
                            <img src={arrowdownwhite}/>
                            <h3 className="section-title text-white">Borrow Markets</h3>
                        </div>
                        <div className="table-inner-header" >
                            <i class="fa-solid fa-caret-down"></i>
                            <span>All Markets</span>
                        </div>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>
                                    Asset
                                    </th>
                                    <th>
                                    Borrow Cost
                                    </th>
                                    <th>
                                    Wallet
                                    </th>
                                    <th>
                                    Liquidity
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>
                                        <div className="icon-flex">
                                        <img src={usdt}/>
                                        <span>USDTd</span>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="green-text">
                                            <i class="fa-solid fa-arrow-up"></i>
                                            <span>4.88%</span>
                                        </div>
                                    </td>
                                    <td>
                                        <span className="d-block">0</span>
                                        <span className="d-block">USDTd</span>
                                    </td>
                                    <td>
                                    ---
                                    </td>
                               </tr>
                               <tr>
                                <td>
                                        <div className="icon-flex">
                                        <img src={eth}/>
                                        <span>ETH</span>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="green-text">
                                            <i class="fa-solid fa-arrow-up"></i>
                                            <span>4.88%</span>
                                        </div>
                                    </td>
                                    <td>
                                        <span className="d-block">0</span>
                                        <span className="d-block">ETH</span>
                                    </td>
                                    <td>
                                    ---
                                    </td>
                               </tr>
                               <tr>
                                <td>
                                    <div className="icon-flex">
                                        <img src={bnb}/>
                                        <span>BNB</span>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="green-text">
                                            <i class="fa-solid fa-arrow-up"></i>
                                            <span>4.88%</span>
                                        </div>
                                    </td>
                                    <td>
                                        <span className="d-block">0</span>
                                        <span className="d-block">BNB</span>
                                    </td>
                                    <td>
                                    ---
                                    </td>
                               </tr>
                               <tr>
                                <td>
                                        <div className="icon-flex">
                                        <img src={matic}/>
                                        <span>Matic</span>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="green-text">
                                            <i class="fa-solid fa-arrow-up"></i>
                                            <span>4.88%</span>
                                        </div>
                                    </td>
                                    <td>
                                        <span className="d-block">0</span>
                                        <span className="d-block">Matic</span>
                                    </td>
                                    <td>
                                    ---
                                    </td>
                               </tr>
                            </tbody>
                        </table>
                    </div>
                </Col>
            </Row>
        </section>
        </Container>
    </main>
}

export default Home