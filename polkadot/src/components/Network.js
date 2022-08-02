import { Col, Container, Row } from "react-bootstrap"
import { network1, network2, network3 } from "./Images"

function Network() {
    return <>
        <section className="section black-bg-section">
            <Container fluid className="custom-container">
                <div className="text-center ">
                <h3 className="section-title f-700 text-white">Powering the Polkadot network</h3>
                    <p className="text-white mt-4 sub-heading">
                    The DOT token serves three distinct purposes: governance over the <br/>network, staking and bonding.
                    </p>
                </div>
                <Row>
                    <Col lg={4}>
                        <article className="custom-card-2">
                            <img src={network1}/>
                            <h3 className="title">Governance</h3>
                            <p>
                            Polkadot token holders have complete control over the protocol. All privileges, which on other platforms are exclusive to miners, will be given to the Relay Chain participants (DOT holders), including managing exceptional events such as protocol upgrades and fixes.
                            </p>
                        </article>
                    </Col>
                    <Col lg={4}>
                        <article className="custom-card-2">
                            <img src={network2}/>
                            <h3 className="title">Staking</h3>
                            <p>
                            Game theory incentivizes token holders to behave in honest ways. Good actors are rewarded by this mechanism whilst bad actors will lose their stake in the network. This ensures the network stays secure.
                            </p>
                        </article>
                    </Col>
                    <Col lg={4}>
                        <article className="custom-card-2">
                            <img src={network3}/>
                            <h3 className="title">Bonding</h3>
                            <p>
                            New parachains are added by bonding tokens. Outdated or non-useful parachains are removed by removing bonded tokens. This is a form of proof of stake.
                            </p>
                        </article>
                    </Col>
                </Row>
                <div className="section-footer">
                    <h3 className="section-title text-white">Learn more about the<br/>DOT token</h3>
                    <button className="custom-btn primary-btn">Discover Polkadot</button>
                </div>
            </Container>
        </section>
    </>
}

export default Network