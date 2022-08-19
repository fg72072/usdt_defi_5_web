import '../assets/css/header.css'

import { circle, dots, jackpot, logo, market, setting, stream, usdt, volume, wallet } from "./Images"
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
        dappId: INFURA_ID, //e5dce034-797e-4871-8a93-ef69730dca19
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
    return <header className="custom-header">
        <div className="logo-section">
            <img src={logo} />
            <div className='version-control'>
                <div className="custom-dropdown">
                    <div className="version-toggle">
                        <span>V1</span>
                        <i class="fa-solid fa-chevron-down"></i>
                    </div>
                    <div className='dropdown-inner'>
                        <a href='#' className='item'>V1</a>
                        <a href='#' className='item'>V2</a>
                    </div>
                </div>
            </div>
        </div>
        <div className='custom-nav-link'>
            <ul className='links-ul'>
                <li>
                    <a href='#' className='link'><img src={usdt} /><span>Auto Trade</span></a>
                </li>
                {/* <li>
                    <a href='#' className='link'><img src={jackpot} /><span>Jack's Pot</span></a>
                </li> */}
                <li>
                    <a href='#' className='blue-link link' onClick={connectWalletPressed}><img src={wallet} /><span>Connect Wallet</span></a>
                </li>
                <li>
                    <a href='#' className='yellow-link link'><img src={market} /><span>Market</span></a>
                </li>
                <li>
                    <a href='#' className='round-btn link'><img src={volume} /></a>
                </li>
                <li>
                    <div className="custom-dropdown">
                        <a href='#' className='round-btn link'><img src={setting} /></a>
                        <div className='dropdown-inner dropdown-width'>
                            <a href='#' className='item'>English</a>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="custom-dropdown">
                        <a href='#' className='round-btn link'><img src={dots} /></a>
                        <div className='dropdown-inner dropdown-width'>
                            <a href='#' className='item'><i class="fa-solid fa-link"></i><span>WhitePaper</span></a>
                            <a href='#' className='item'><i class="fa-brands fa-twitter"></i><span>Twitter</span></a>
                            <a href='#' className='item'><i class="fa-brands fa-telegram"></i><span>Telegram</span></a>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </header>
}

export default Header