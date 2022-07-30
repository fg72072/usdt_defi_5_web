import React from "react";
import { Row, Col } from "react-bootstrap";
import { Header, Footer } from "../components/index";
import { ChainImg, EmptyData } from "../components/images";

export function HistoryBox() {
  return (
    <div className="box history-box">
      <div className="table-main w-100">
        <div className="table">
          <table>
            <thead className="ant-table-thead">
              <tr className="text-center">
                <th className="ant-table-cell">Time</th>
                <th className="ant-table-cell">Token</th>
                <th className="ant-table-cell">Amount</th>
                <th className="ant-table-cell">Status</th>
              </tr>
            </thead>
            <tbody className="ant-table-tbody">
              <tr className="ant-table-placeholder">
                <td colspan="4" className="ant-table-cell">
                  <div className="history-empty-data">
                    <div className="empty-data-image">
                      <img src={EmptyData} alt="" />
                    </div>
                    <div class="empty-data-text">No Data</div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function History() {
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
                  <HistoryBox />
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

export default History;
