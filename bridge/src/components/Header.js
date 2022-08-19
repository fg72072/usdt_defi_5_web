import '../assets/css/header.css'
import { guide, logo } from './Images'
import { useWeb3React, Web3ReactProvider } from "@web3-react/core";
import Onboard from 'bnc-onboard';
import { ethers } from "ethers";
import { useEffect, useState } from 'react';
const INFURA_ID = 'a3573077-8a08-483c-b4a0-6a4544c59985'
function Header()
{
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
    wallets:[
      {
        walletName: "metamask",
        preferred: true,
      },
      {
        walletName: 'walletConnect',
        preferred: true,
        infuraKey: INFURA_ID,
        bridge: 'https://bridge.walletconnect.org',
      }
    ]
  }
})
const connectWalletPressed = async () => {
    let wallet = await onboard.walletSelect();
    await onboard.walletCheck();
};
useEffect(async() => {
    
loadProvider();
}, [connect]);
    return <header className='custom-header'>
        <div className='logo-section'>
        <img src={logo} className="logo"/>
        </div>
        <div className='flex-btn-group'>
            <button className='wallet-btn' onClick={connectWalletPressed}>Connect to Wallet</button>
            <button className='guide-btn'><img src={guide}/><span>Docs</span></button>
        </div>
    </header>
}

export default Header