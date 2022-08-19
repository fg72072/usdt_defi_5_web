import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import { Telegram, Twitter } from "./images";

function Footer() {
  return (
    <div>
      <footer>
        <Row className="gx-0 align-items-center justify-sm-center flex-column-reverse  flex-md-row">
          <Col lg={12} md={12} sm={12}>
            <div className="copy-right text-center">
              <p>Copyright © 2022 USDT DeFi. All Rights Reserved</p>
            </div>
          </Col>
        </Row>
        <a href="https://www.telegram.com/" target="_blank" className="sticky-btn-footer">
          <i class="fa-brands fa-telegram"></i>
        </a>
      </footer>
    </div>
  );
}

export default Footer;
