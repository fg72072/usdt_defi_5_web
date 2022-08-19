import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { bscscan,ethscan, matic} from './images';

export default function ChainModal(props) {


  return (
    <>
      <Modal show={props.show} onHide={props.handleClose} centered className='coin-modal'>
        <Modal.Header >
          <Modal.Title>Select Chain</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <ul className='modal-coin-ul'>
                <li onClick={props.handleClose}>
                    <img src={ethscan}/>
                    <span>ETH</span>
                </li>
                <li onClick={props.handleClose}>
                    <img src={bscscan}/>
                    <span>BSC</span>
                </li>
                <li onClick={props.handleClose}>
                    <img src={matic}/>
                    <span>Polygon</span>
                </li>
            </ul>
        </Modal.Body>
       
      </Modal>
    </>
  );
}