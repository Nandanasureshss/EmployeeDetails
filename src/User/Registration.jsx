import React from 'react';
import Navbar from '../Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Registration.css';

function Registration() {
  return (
    <div>
      <Navbar />
      <div className="registrationformcontainer">
        <h2 className="registrationformheading">Employee Registration</h2>
        <Form>
          <div className="registrationformrow">
            <div className="registrationformgroup">
              <Form.Label>Employee Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name"  required />
            </div>
            <div className="registrationformgroup">
              <Form.Label>Age</Form.Label>
              <Form.Control placeholder="Enter your age"required />
            </div>
          </div>

          <div className="registrationformrow">
            <div className="registrationformgroup">
              <Form.Label>Employment ID</Form.Label>
              <Form.Control type="number" placeholder="Enter your Employment ID" required />
            </div>

            <div className="registrationformgroup">
              <Form.Label>Type of Employment</Form.Label>
              <Form.Control type="text" placeholder="Enter type of Employment" required />
            </div>
          </div>

          <div className="registrationformrow">
            <div className="registrationformgroup">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" required />
            </div>

            <div className="registrationformgroup">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter your password" required />
            </div>
          </div>

          <div className="registrationformrow">
            <div className="registrationformgroup full-width">
              <Form.Check type="checkbox" label="I agree to the terms and conditions" required />
            </div>
          </div>

          <div className="registrationformrow">
            <div className="registrationformgroup full-width">
              <Button variant="primary" type="submit" className="registrationsubmitbutton">
                Submit
              </Button>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Registration;
