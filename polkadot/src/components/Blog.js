import { Card, Col, Container, Row } from "react-bootstrap";
import { blog1, blog2, blog3, gavin } from "./Images";

function Blog()
{
    return<>
        <section className="section">
        <Container fluid className="custom-container">
            <h3 className="section-title f-700 text-center">From the blog</h3>
            <div className="blog-main">
            <Row>
                <Col lg={4}>
                    <Card>
                    <Card.Img variant="top" src={blog1} />
                    <Card.Body>
                        <Card.Title>Polkadot</Card.Title>
                        <h4 className="card-intro">
                        Gov2: Polkadot’s Next Generation of Decentralised Governance
                        </h4>
                        <Card.Text className="mb-4">
                        Read the proposal for Polkadot's next-generation governance system - currently known as Gov2 - to discover how it aims to advance the decentralization of the network....
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <div className="author">
                            <img src={gavin}/>
                            <span>Gavin Wood</span>
                        </div>
                    </Card.Footer>
                    </Card>
                </Col>
                <Col lg={4}>
                    <Card>
                    <Card.Img variant="top" src={blog2} />
                    <Card.Body>
                        <Card.Title>Polkadot</Card.Title>
                        <h4 className="card-intro">
                        Introducing the Polkadot Staking Dashboard: The Easiest Way to Nominate and Stake Your DOT
                        </h4>
                        <Card.Text className="mb-4">
                        Staking your DOT just got a whole lot easier with Polkadot’s new staking dashboard, a user-friendly interface for staking natively on Polkadot....
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <div className="author">
                            <img src={gavin}/>
                            <span>Gavin Wood</span>
                        </div>
                    </Card.Footer>
                    </Card>
                    
                </Col>
                <Col lg={4}>
                    <Card>
                    <Card.Img variant="top" src={blog3} />
                    <Card.Body>
                        <Card.Title>Polkadot</Card.Title>
                        <h4 className="card-intro">
                        XCMv2 Audit Completed by Quarkslab
                        </h4>
                        <Card.Text className="mb-4">
                        XCMv2 has now been audited for a second time to discover any potential cross-chain security or fairness issues, including logical bugs, denial-of-service lock/unlock or burn/mint on both chains...
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <div className="author">
                            <img src={gavin}/>
                            <span>Gavin Wood</span>
                        </div>
                    </Card.Footer>
                    </Card>
                </Col>
            </Row>
            </div>
            <div className="section-footer">
                    <h3 className="section-title">Want to get involved?</h3>
                    <button className="custom-btn primary-btn">Join the Community</button>
                    <p className="mt-4">or learn about how to <a href="" className="primary-anchor">build on Polkadot</a>.</p>
                    
                </div>
        </Container>
        </section>
    </>
}

export default Blog