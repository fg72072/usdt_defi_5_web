import React from "react";
import { Row, Col } from "react-bootstrap";
import { Header, Footer } from "../components/index";
import { ChainImg, Fee } from "../components/images";

export function HelpBox() {
  return (
    <div className="box history-box">
      <div className="content-main">
        <div className="title">
          <em>
            <span>Tip</span> - Moving assets FROM Wanchain TO another
            blockchain: Using a Binance address as a Recipient address will
            reduce any incurred withdrawal fees.
          </em>
        </div>
        <div className="title">
          <em>
            <span>Warning</span> - Moving assets FROM Wanchain TO another
            blockchain: Using a Binance address as a Recipient address will
            reduce any incurred withdrawal fees.
          </em>
        </div>
        <p className="span-blue">For all Instant Cross transactions: </p>
        <ul>
          <li>
            <p>
              The Deposit Amount is the sum of the Amount you want to transfer
              and a unique identification code. Instant Cross uses this unique
              identification code to track different users’ transactions. For
              example, if you want to send a USDT 40 cross-chain transaction,
              you need to deposit slightly more than USDT 40 (e.g., USDT
              40.00812 or USDT 40.00240).
            </p>
          </li>
          <li>
            <p>
              Each Instant Cross transaction must be completed as a single
              transfer. Please do not transfer funds in batches.
            </p>
          </li>
        </ul>
        <div className="cross-line"></div>
        <div className="title">
          <em>
            The following fees may be applied to an Instant Cross transaction:
          </em>
        </div>
        <ul>
          <li>
            <p className="mb-4">
              <span className="span-blue">Withdrawal fees: </span>Cross-chain
              transactions from Wanchain to other blockchains may incur a
              withdrawal fee. The withdrawal fee differs depending on the chain
              involved.
            </p>
          </li>
          <li>
            <p>
              <span className="span-blue">Service fees: </span>All Instant Cross
              transactions incur a 0.3% service fee
            </p>
          </li>
        </ul>
        <div className="cross-line"></div>
        <img src={Fee} alt="Fee-table.png" />
        <p>(Withdrawal fee might be different on different chain)</p>
        <div className="cross-line"></div>
        <div className="title">
          <em>Contact</em>
        </div>
        <p>
          If you have any questions, please email{" "}
          <a href="mailto:support@instantcross.finance">
            support@instantcross.finance
          </a>
        </p>
      </div>
    </div>
  );
}

function Help() {
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
                  <HelpBox />
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

export default Help;
