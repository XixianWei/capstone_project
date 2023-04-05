import React, { useState } from 'react';
import {Button} from 'react-bootstrap';
import {Modal} from 'react-bootstrap';

function AddForestModal({show, setShow, handleClose, handleShow}) {

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        animation={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add a forest</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
          <p>Forest Name:</p>
          
          <p>Location:</p>
          <p>Catergory:</p>
          <p>Audio:</p>
          <p>Images:</p>
          <p>A brief description:</p>
          <p>First Name:</p>
          <p>Last Name:</p>
          <p>Email:</p>
          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddForestModal;