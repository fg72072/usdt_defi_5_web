import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Withdraw(props) {
 

  return (
    <>

      <Modal show={props.show} onHide={props.handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Input Withdraws</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className='input-box primary-input-box'>
                <input className='custom-input' placeholder='0'/>
                <div>
                <button className='max-btn'>MAX</button>
                <span className='text-primary margin-left'>| WAND</span>
                </div>
            </div>
            <div className='flex-between mt-2'>
                <span className='text-puple normal'>Balance</span>
                <span className='text-puple normal'>0.0 WAND</span>
            </div>
            <div className='mt-4'>
                <button className='btn btn-lg gray-btn w-100' disabled>Withdraw</button>
            </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Withdraw