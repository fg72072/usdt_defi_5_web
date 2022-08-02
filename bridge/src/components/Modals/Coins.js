import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { aave } from '../Images';

function Coins(props) {
    let coins = [
        {name:'AAVE',image:aave},
        {name:'AAVE',image:aave},
        {name:'AAVE',image:aave},
        {name:'AAVE',image:aave},
        {name:'AAVE',image:aave},
        {name:'AAVE',image:aave},
        {name:'AAVE',image:aave},
    ]
  return (
    <>
      <Modal show={props.show} onHide={props.handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>SELECT ASSET</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <input className='form-control search-box' placeholder='Search token'/>
            <ul className='coins-head'>
                <li>
                    WAN
                </li>
                <li>
                    BTC
                </li>
                <li>
                    ETH
                </li>
                <li>
                    XRP
                </li>
                <li>
                    USDT
                </li>
            </ul>
            <div className="coins-list-main">
                <ul className='coins'>
                    {
                        coins.map( ( coin ) => {
                            return  <>
                            <li onClick={props.handleClose}>
                                <img src={coin.image}/>
                                <span>{coin.name}</span>
                            </li>
                            </>
                        })
                        
                    }
               
                </ul>
            </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Coins