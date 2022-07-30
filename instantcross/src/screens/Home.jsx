import React from "react";
import { Header, Footer } from "../components/index";
import { Container, Row, Col, Dropdown, Tab, Tabs } from "react-bootstrap";
import {
  ChainImg,
  File,
  Location,
  Dollar,
  Trademark,
  EmptyData,
  About,
} from "../components/images";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

export function HomeBox() {
  return (
    <div className="box">
      <div className="chain-selection">
        <div className="chain-info">
          <img src={ChainImg} alt="chain-img" className="chain-img" />
          <div>
            <p className="chain-select-text">Select</p>
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
                ></Dropdown.Toggle>

                <Dropdown.Menu>
                  <div className="empty-data d-flex flex-column align-items-center ">
                    <img src={EmptyData} alt="emptydata.png" />
                    <span>No Data</span>
                  </div>
                </Dropdown.Menu>
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
                  id="dropdown-basic"
                ></Dropdown.Toggle>

                <Dropdown.Menu>
                  <div className="empty-data d-flex flex-column align-items-center ">
                    <img src={EmptyData} alt="emptydata.png" />
                    <span>No Data</span>
                  </div>
                </Dropdown.Menu>
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
                <OverlayTrigger
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
                </OverlayTrigger>
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
                <OverlayTrigger
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
                </OverlayTrigger>
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
                  <HomeBox />
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;
