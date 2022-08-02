import { Col, Container, Row } from "react-bootstrap"
import { b_icon_1, b_icon_2, b_icon_3, b_icon_4, b_icon_5, b_icon_6 } from "./Images"

function SecondSection(){

const cards = [
    {
        icon: b_icon_1,
        name: 'True interoperability',
        description:'Polkadot enables cross-blockchain transfers of any type of data or asset, not just tokens. Connecting to Polkadot gives you the ability to interoperate with a wide variety of blockchains in the Polkadot network.'
    },
    {
        icon: b_icon_2,
        name: 'Economic & transactional scalability',
        description:'Polkadot provides unprecedented economic scalability by enabling a common set of validators to secure multiple blockchains. Polkadot provides transactional scalability by spreading transactions across multiple parallel blockchains.'
    },
    {
        icon: b_icon_3,
        name: 'Easy blockchain innovation',
        description:"Create a custom blockchain in minutes using the Substrate framework. Connect your chain to Polkadot and get interoperability and security from day one. This ease of development helps Polkadot's network grow."
    },
    {
        icon: b_icon_4,
        name: 'High energy efficiency',
        description:'Polkadot consumes a small fraction of the energy used by conventional blockchains thanks to its next-generation nominated proof-of-stake (NPoS) model. Using the equivalent of ~6.6 US households worth of energy per year, Polkadot has the lowest carbon footprint among proof-of-stake protocols analyzed in recent research.'
    },
    {
        icon: b_icon_5,
        name: 'Security for everyone',
        description:"Polkadot's novel data availability and validity scheme allows chains to interact with each other in a meaningful way. Chains remain independent in their governance, but united in their security."
    },
    {
        icon: b_icon_6,
        name: 'User-driven governance',
        description:'Polkadot has a sophisticated governance system where all stakeholders have a voice. Network upgrades are coordinated on-chain and enacted autonomously and without forking the network, ensuring that Polkadot’s development remains future-proof and community-driven.'
    },
]
    return <>
        <section className="section">
            <Container fluid className="custom-container">
                <Row className="gy-5">
                    {
                        cards.map((card)=>{
                            return <Col lg={4}>
                            <article className="custom-card">
                                <img src={card.icon}/>
                                <h3 className="title">{card.name}</h3>
                                <p>
                                {card.description}
                                </p>
                            </article>
                        </Col>
                        })
                    }
                </Row>
                <div className="section-footer">
                    <h3 className="section-title">Learn more about Polkadot's<br/> technology</h3>
                    <button className="custom-btn primary-btn">Discover Polkadot</button>
                </div>
            </Container>
        </section>
    </>
}
export default SecondSection