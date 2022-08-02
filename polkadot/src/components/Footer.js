import '../assets/css/footer.css'
import { Col, Container, Row } from "react-bootstrap"
import { logolight } from './Images'

function Footer() {
    return <>
        <footer className="footer">
            <Container fluid className="custom-container">
                <Row>
                    <Col lg={3}>
                        <h3>General</h3>
                        <ul className='footer-link'>
                            <li>
                                <a href=''>About</a>
                            </li>
                            <li>
                                <a href=''>FAQ</a>
                            </li>
                            <li>
                                <a href=''>Support</a>
                            </li>
                            <li>
                                <a href=''>Build</a>
                            </li>
                            <li>
                                <a href=''>Grants and Bounties</a>
                            </li>
                            <li>
                                <a href=''>Careers</a>
                            </li>
                        </ul>
                    </Col>
                    <Col lg={3}>
                        <h3>Technology</h3>
                        <ul className='footer-link'>
                            <li>
                                <a href=''>Technology</a>
                            </li>
                            <li>
                                <a href=''>Roadmap</a>
                            </li>
                            <li>
                                <a href=''>Token</a>
                            </li>
                            <li>
                                <a href=''>Telemetry</a>
                            </li>
                            <li>
                                <a href=''>Substrate</a>
                            </li>
                            <li>
                                <a href=''>Lightpaper</a>
                            </li>
                            <li>
                                <a href=''>Whitepaper</a>
                            </li>
                        </ul>
                    </Col>
                    <Col lg={3}>
                        <h3>Community</h3>
                        <ul className='footer-link'>
                            <li>
                                <a href=''>Community</a>
                            </li>
                            <li>
                                <a href=''>Documentation</a>
                            </li>
                            <li>
                                <a href=''>Brand Assets</a>
                            </li>
                            <li>
                                <a href=''>Blog</a>
                            </li>
                            <li>
                                <a href=''>Element Chat</a>
                            </li>
                            <li>
                                <a href=''>Medium</a>
                            </li>
                        </ul>
                    </Col>
                    <Col lg={3}>
                        <ul className='social-link'>
                            <li>
                                <a href=''>
                                    <i class="fa-brands fa-twitter"></i>
                                </a>
                            </li>
                            <li>
                                <a href=''>
                                    <i class="fa-brands fa-reddit-alien"></i>
                                </a>
                            </li>
                            <li>
                                <a href=''>
                                    <i class="fa-brands fa-github"></i>
                                </a>
                            </li>
                            <li>
                                <a href=''>
                                    <i class="fa-brands fa-youtube"></i>
                                </a>
                            </li>
                            <li>
                                <a href=''>
                                    <i class="fa-brands fa-discord"></i>
                                </a>
                            </li>
                        </ul>
                        <p className='normal-text'>Subscribe to the newsletter to hear about Polkadot updates and events.</p>
                        <button className='custom-btn primary-btn text-white pt-2 pb-2'>Subscribe</button>
                    </Col>
                </Row>
                <div className='footer-bottom'>
                    <img src={logolight}/>
                    <p>
                    © 2022 <a href='' className='anchor'>Web3 Foundation</a> |
                    <a href='' className='anchor'> Impressum</a> |
                    <a href='' className='anchor'> Disclaimer</a> |
                    <a href='' className='anchor'> Privacy</a> |
                    <a href='' className='anchor'> Cookie Settings</a>
                    </p>
                </div>
            </Container>
        </footer>
    </>
}

export default Footer