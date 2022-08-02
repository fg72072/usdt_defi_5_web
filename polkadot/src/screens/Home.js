import {Container,Row,Col} from 'react-bootstrap'
import { Banner, Blog, Network, SecondSection, TooltipTrigger } from '../components'
import { circle1, circle2, circle3, circle4, web3summit } from '../components/Images'
function Home()
{
    return <main>
        <Banner/>
        <SecondSection/>
        <Network/>
        <section className='primary-section'>
            <Container fluid className="custom-container">
                <Row>
                    <Col lg={6}>
                        <h3 className='section-title f-700 text-white protocol-title'>An open-source<br/> protocol built for<br/> everyone</h3>
                    </Col>
                    <Col lg={6}>
                        <p className='protocol-desc'>
                        Polkadot is an open-source project founded by the <br/><a href="" className='normal-anchor'>Web3 Foundation</a>.
                        </p>
                        <p className='protocol-desc'>
                        Web3 Foundation has commissioned five teams and over 100 developers to build Polkadot, including:
                        </p>
                    </Col>
                </Row>
                <div className='protocol-tooltip'>
                    <div className='custom-tooltip'>
                        <img src={circle1}/>
                        <div className='inner-text'>
                            <span>Parity Technologies</span>
                        </div>
                    </div>
                    <div className='custom-tooltip'>
                        <img src={circle2}/>
                        <div className='inner-text'>
                            <span>ChainSafe</span>
                        </div>
                    </div>
                    <div className='custom-tooltip'>
                        <img src={circle3}/>
                        <div className='inner-text'>
                            <span>Soramitsu</span>
                        </div>
                    </div>
                    <div className='custom-tooltip'>
                        <img src={circle4}/>
                        <div className='inner-text'>
                            <span>Polkadot JS</span>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
        <section className='section-image'>
            <img src={web3summit}/>
            <Container fluid className="custom-container">
            <h3 className='section-image-text'>
                Founded by some of the blockchain<br/>industry’s foremost builders
            </h3>
            <button className='custom-btn primary-btn text-white'>Learn About the Polkadot Team</button>
            </Container>
        </section>
        <Blog/>
    </main>
}

export default Home