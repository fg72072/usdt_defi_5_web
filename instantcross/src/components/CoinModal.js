import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { bnb, eth, matic, usdt } from './images';

export default function CoinModal(props) {


  return (
    <>
      <Modal show={props.show} onHide={props.handleClose} centered className='coin-modal'>
        <Modal.Header >
          <Modal.Title>Select Coin</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <ul className='modal-coin-ul'>
                <li onClick={props.handleClose}>
                    <img src={bnb}/>
                    <span>BNB</span>
                </li>
                <li onClick={props.handleClose}>
                    <img src={usdt}/>
                    <span>USDTd</span>
                </li>
                <li onClick={props.handleClose}>
                    <img src={eth}/>
                    <span>ETH</span>
                </li>
                <li onClick={props.handleClose}>
                    <img src={matic}/>
                    <span>Matic</span>
                </li>
            </ul>
        </Modal.Body>
       
      </Modal>
    </>
  );
}