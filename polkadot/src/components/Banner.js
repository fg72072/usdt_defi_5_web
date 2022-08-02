import { useEffect } from 'react';
import {Container,Row,Col} from 'react-bootstrap'
import { banner, outer } from '../components/Images'

function Banner()
{
    
        // useEffect(()=>{
            
        //     window.addEventListener('scroll', function() {
        //         var leftItem = document.getElementsByClassName('banner-img')[0],
        //     rightItem = document.getElementsByClassName('outer-img')[0];
        //             leftItem.style.transform = "rotate(-" + (window.pageYOffset-10) + "deg)";
        //             rightItem.style.transform = "translate(-50%,0) rotate(" + window.pageYOffset + "deg)";
        //     })
        // },[])
    return <>
    <Container fluid className="custom-container">
            <section className="banner-section">
                <Row>
                    <Col lg={6}>
                        <h1>The multichain vision for Web3 starts here.</h1>
                        <p className="banner-intro">
                        Polkadot unites and secures a growing ecosystem of specialized blockchains called parachains. Apps and services on Polkadot can securely communicate across chains, forming the basis for a truly interoperable decentralized web.
                        </p>
                        <div className='banner-btn-group'>
                            <button className='custom-btn primary-btn'>Learn Parachains</button>
                            <button className='custom-btn primary-btn'>Learn Parachains</button>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="banner-bg">
                            <img src={banner} className="banner-img" id='banner_img'/>
                            <img src={outer} className="outer-img"/>
                        </div>
                    </Col>
                </Row>
            </section>
        </Container>
    </>
}

export default Banner