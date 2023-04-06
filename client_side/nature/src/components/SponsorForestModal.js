import '../App.css';
import React, { useState } from 'react';
import {Button, Modal, Form } from 'react-bootstrap';


function SponsorForestModal({ show, setShow, handleClose, handleShow }) {

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        animation={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Sponsor a Forest</Modal.Title>
        </Modal.Header>

        <Modal.Body>

        <Form>

        <Form.Group className="formDonationAmount">
            <Form.Label>Donation Amount</Form.Label>
            <Form.Control
              // type="text"
              // value={cardNumber}
              // onChange={(event) => setCardNumber(event.target.value)}
              placeholder="Enter Amount"
            />
          </Form.Group>

          <Form.Group className="formCardNumber">
            <Form.Label>Card Number</Form.Label>
            <Form.Control
              // type="text"
              // value={cardNumber}
              // onChange={(event) => setCardNumber(event.target.value)}
              placeholder="Enter card number"
            />
          </Form.Group>

          <Form.Group className="formCardHolder">
            <Form.Label>Cardholder Name</Form.Label>
            <Form.Control
              // type="text"
              // value={cardHolder}
              // onChange={(event) => setCardHolder(event.target.value)}
              placeholder="Enter cardholder name"
            />
          </Form.Group>

          <Form.Group Classname="formExpirationDate">
            <Form.Label>Expiration Date</Form.Label>
            <Form.Control
              // type="text"
              // value={expirationDate}
              // onChange={(event) => setExpirationDate(event.target.value)}
              placeholder="MM/YY"
            />
          </Form.Group>

          <Form.Group className="formCvv">
            <Form.Label>CVV</Form.Label>
            <Form.Control
              // type="text"
              // value={cvv}
              // onChange={(event) => setCvv(event.target.value)}
              placeholder="Enter CVV"
            />
          </Form.Group>
        </Form>
        
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" type="submit" onClick={handleClose}>
            Submit
          </Button>
        </Modal.Footer>

      </Modal>
    </>
  );
}

export default SponsorForestModal;