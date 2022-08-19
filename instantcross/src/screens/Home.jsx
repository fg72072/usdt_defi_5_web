import React, { useState } from "react";
import { Header, Footer, CoinModal, ChainModal } from "../components/index";
import { Container, Row, Col, Dropdown, Tab, Tabs } from "react-bootstrap";
import {
  ChainImg,
  File,
  Location,
  Dollar,
  Trademark,
  EmptyData,
  About,
  bnb,
  ethscan,
  bscscan,
  matic,
} from "../components/images";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

export function HomeBox(props) {
  return (
    <div className="box">
      <div className="chain-selection">
        <div className="chain-info" onClick={props.handleShow}>
          <img src={ChainImg} alt="chain-img" className="chain-img" />
          <div>
            <p className="chain-select-text">Choose</p>
          </div>
        </div>
      </div>
      <div className="form-box w-100 mt-5">
        <div className="row">
          <div className="col-12">
            <div className="field my-3">
              <div className="field-icon">
                <img src={File} alt="file.png" />
                <span>From Chain:</span>
              </div>
              <Dropdown className="custom-dropdown">
                <Dropdown.Toggle
                  className="dropdown-btn"
                  id="dropdown-basic"
                  onClick={props.handleShow2}></Dropdown.Toggle>

                {/* <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">
                <img src={ethscan}/>
                <span>ETH</span>
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2">
                <img src={bscscan}/>
                <span>BSC</span>
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2">
                <img src={matic}/>
                <span>Polygon</span>
                </Dropdown.Item>
                  <div className="empty-data">
                    <img src={EmptyData} alt="emptydata.png" />
                    <span>No Data</span>
                  </div>
                </Dropdown.Menu> */}
              </Dropdown>
            </div>
          </div>
          <div className="col-12">
            <div className="field my-3">
              <div className="field-icon">
                <img src={File} alt="file.png" />
                <span>From Chain:</span>
              </div>
              <Dropdown className="custom-dropdown">
                <Dropdown.Toggle
                  className="dropdown-btn"
                  id="dropdown"
                onClick={props.handleShow2}></Dropdown.Toggle>
{/* 
                <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">
                <img src={ethscan}/>
                <span>ETH</span>
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2">
                <img src={bscscan}/>
                <span>BSC</span>
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2">
                <img src={matic}/>
                <span>Polygon</span>
                </Dropdown.Item>
                  <div className="empty-data">
                    <img src={EmptyData} alt="emptydata.png" />
                    <span>No Data</span>
                  </div>
                </Dropdown.Menu> */}
              </Dropdown>
            </div>
          </div>
          <div className="col-12">
            <div className="field input-field  my-3">
              <div className="field-icon ">
                <img src={Location} alt="location.png" />
                <span>Recipient:</span>
                <input type="text" />
              </div>
              <div>
                <span className="span-purple">Paste</span>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="field input-field my-3">
              <div className="field-icon">
                <img src={Dollar} alt="Dollar.png" />
                <span>Amount:</span>
                <input type="text" />
              </div>
              <div>
                {/* <OverlayTrigger
                  placement={"top"}
                  overlay={
                    <Tooltip id={`tooltip-top`}>
                      <div>
                        Operation Fee: <strong>0</strong>.
                      </div>
                    </Tooltip>
                  }
                >
                  <img src={About} alt="about.png" className="about-icon" />
                </OverlayTrigger> */}
                <img src={About} alt="about.png" className="about-icon" />

              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="field my-3">
              <div className="field-icon">
                <img src={Dollar} alt="Dollar.png" />
                <span>Fee:</span>
              </div>
              <div>
                {/* <OverlayTrigger
                  placement="top"
                  overlay={
                    <Tooltip id="tooltip-top">
                      <div>
                        WithDraw Fee: <strong>0</strong>.
                      </div>{" "}
                      <div>
                        Operation Fee: <strong>0</strong>.
                      </div>
                    </Tooltip>
                  }
                >
                  <img src={About} alt="about.png" className="about-icon" />
                </OverlayTrigger> */}
                <img src={About} alt="about.png" className="about-icon" />

              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="field my-3">
              <div className="field-icon">
                <img src={Trademark} alt="Trademark.png" />
                <span>You will receive:</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="send-btn mt-5">
        <button type="button" class="btn w-100">
          <span>Start</span>
        </button>
      </div>
    </div>
  );
}

function Home() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show2, setShow2] = useState(false);

  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);
  return (
    <div>
      <div className="bg-img-main">
        <div className="bg-img"></div>
      </div>
      <Header />
      {/* ========================Home-Banner===================  */}
      <section id="banner">
        <div className="custom-container">
          <div className="sec-padding">
            <Row>
              <Col lg={12}>
                <div className="main">
                  <HomeBox handleShow={handleShow} handleShow2={handleShow2}/>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </section>
      <CoinModal show={show} handleClose={handleClose}/>
      <ChainModal show={show2} handleClose={handleClose2}/>
      <Footer />
    </div>
  );
}

export default Home;
