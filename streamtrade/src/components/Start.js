import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Start(props) {
 

  return (
    <>

      <Modal show={props.show} onHide={props.handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>{'WAN->wanUSDT'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className='input-box secondary-input-box'>
                <input className='custom-input' placeholder='Input sell amount'/>
                <div>
                <button className='max-btn'>MAX</button>
                <span className='text-secondary margin-left'>| WAN</span>
                </div>
            </div>
            <div className='mt-3'>
                <button className='btn btn-lg gray-btn w-100' disabled>Next</button>
            </div>
            <div className='flex-between mt-3'>
                <span className='text-puple normal'>Balance</span>
                <span className='text-puple normal'>0.0 WAN</span>
            </div>
        </Modal.Body>
            <Modal.Footer>
             <p>After deposit, you can input the total amount you want to sell here.</p>
             <div class="sc-bdvvtL sc-XxNYO cDHLip hVZIWt"><div class="sc-ilfuhL ibZYis">1</div><div class="sc-uojGG ddKdWp"></div><div class="sc-ilfuhL jbhunA">2</div><div class="sc-uojGG ddKdWp"></div><div class="sc-ilfuhL jbhunA">3</div></div>
            </Modal.Footer>
      </Modal>
    </>
  );
}

export default Start