import { dots, logo } from "./Images"
import '../assets/css/header.css'
import { Dropdown } from "react-bootstrap"
import { useWeb3React, Web3ReactProvider } from "@web3-react/core";
import Onboard from 'bnc-onboard';
import { ethers } from "ethers";
import { useEffect, useState } from 'react';
const INFURA_ID = 'a3573077-8a08-483c-b4a0-6a4544c59985'
function Header() {
    const [connect, setConnect] = useState(false)
    const loadProvider = async () => {
        try {
            const web3Modal = new web3Modal();
            const connection = await web3Modal.connect();
            const provider = new ethers.providers.Web3Provider(connection);
            return provider.getSigner();
        } catch (e) {
            console.log("loadProvider default: ", e);
        }
    };

    const {
        connector,
        library,
        account,
        chainId,
        activate,
        deactivate,
        active,
        errorWeb3Modal,
        active: networkActive, error: networkError, activate: activateNetwork
    } = useWeb3React();
    let provider
    const onboard = Onboard({
        dappId: INFURA_ID, 
        networkId: 3,
        darkMode: true,
        subscriptions: {
            wallet: async (wallet) => {
                if (wallet.provider) {
                    setConnect(true)
                } else {
                    setConnect(false)
                }
            }
        },
        walletSelect: {
            wallets: [
                {
                    walletName: "metamask",
                    preferred: true,
                },
                {
                    walletName: "trust",
                    preferred: true,
                },

                {
                    walletName: 'walletConnect',
                    preferred: true,
                    infuraKey: INFURA_ID,
                    bridge: 'https://bridge.walletconnect.org',
                },
                {
                    walletName: 'torus',
                },
                {
                    walletName: 'tally',
                },
                {
                    walletName: 'status',
                },
                {
                    walletName: 'alphawallet',
                },
                {
                    walletName: 'atoken',
                },
                {
                    walletName: 'blockwallet',
                },
                {
                    walletName: 'coinbase',
                }
            ]
        }
    })
    const connectWalletPressed = async () => {
        let wallet = await onboard.walletSelect();
        await onboard.walletCheck();
    };
    useEffect(async () => {
        loadProvider();
    }, [connect]);

    return <header className='custom-header'>
        <div className="logo-section">
            <img src={logo} className="logo" />
        </div>
        <div className="links d-flex align-items-center">
            <button className="wallet-btn icon-btn" onClick={(e) => connectWalletPressed()}><i class="fa-solid fa-wallet"></i><span>Connect Wallet</span></button>
            <Dropdown className="margin-left">
                <Dropdown.Toggle className="dropdown-btn" id="dropdown-basic">
                    {/* <img src={dots}/> */}
                    <i class="fa-solid fa-ellipsis"></i>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1"><i class="fa-solid fa-circle-info"></i><span> Docs</span></Dropdown.Item>
                    <Dropdown.Item href="#/action-3"> <i class="fa-solid fa-dollar-sign"></i><span> USDTd Lend</span></Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    </header>
}

export default Header