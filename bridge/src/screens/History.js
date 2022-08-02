import { Container,Dropdown } from "react-bootstrap"
import { Tabs } from "../components"
import { addr, eth, okc, swap, wan } from "../components/Images"

function History()
{
    return <main>
        <Container>
        <section className="section">
            <Tabs/>
            
            <div className="main-box">
            <div className="no-data-message">
            <i class="fa-solid fa-message icon-message"></i>
                <p className="mt-2">No Data</p>
            </div>
            </div>
        </section>
        </Container>
    </main>
}

export default History