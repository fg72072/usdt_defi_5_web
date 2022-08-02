import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Deposit(props) {
 

  return (
    <>

      <Modal show={props.show} onHide={props.handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Input Deposits</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className='input-box secondary-input-box'>
                <input className='custom-input' placeholder='0'/>
                <div>
                <button className='max-btn'>MAX</button>
                <span className='text-secondary margin-left'>| WASP</span>
                </div>
            </div>
            <div className='flex-between mt-2'>
                <span className='text-puple normal'>Balance</span>
                <span className='text-puple normal'>0.0 WASP</span>
            </div>
            <div className='mt-4'>
                <button className='btn btn-lg gray-btn w-100' disabled>Approve</button>
            </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Deposit