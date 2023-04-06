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
          <Modal.Title>Add a forest</Modal.Title>
        </Modal.Header>

        <Modal.Body>

          <Form.Group className="mb-1">
            <Form.Label>Forest Name:</Form.Label>
            <Form.Control type="text" placeholder="Enter forest name" />
          </Form.Group>

          <Form.Group className="mb-1">
            <Form.Label>Location:</Form.Label>
            <Form.Control type="text" placeholder="Enter Location" />
          </Form.Group>

          <Form.Group controlId="audio">
            <Form.Label>Audio:</Form.Label>
            <Form.Control type="file" accept="audio/*" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Image:</Form.Label>
            <Form.Control
              type="file"
              accept="image/*"
              onChange={(event) => {
                const file = event.target.files[0];
                // Do something with the file, like upload it to a server
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Select Category:</Form.Label>
            <Form.Select aria-label="Select Category">
              <option>Select a category</option>
              <option value="Temperate">Temperate</option>
              <option value="Subtropical">Subtropical</option>
              <option value="Tropical">Tropical</option>
              <option value="Boreal">Boreal</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-1">
            <Form.Label>A brief description:</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="a brief description"/>
          </Form.Group>

          <Form.Group className="mb-1">
            <Form.Label>First Name:</Form.Label>
            <Form.Control type="text" placeholder="Enter first name" />
          </Form.Group>

          <Form.Group className="mb-1">
            <Form.Label>Last Name:</Form.Label>
            <Form.Control type="text" placeholder="Enter last name" />
          </Form.Group>

          <Form.Group className="mb-1" controlId="formBasicEmail">
            <Form.Label>Email address:</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

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