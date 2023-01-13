import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

export default function Step2({ setCompanyName, setJobTitle }) {
  const [modalOn, setModalOn] = useState(false);

  function toggleModal() {
    setModalOn(!modalOn);
  }

  return (
    <div className="step w-md-75" style={{ backgroundColor: "white", minHeight: "100px" }}>
      <h3>Required</h3>
      <div className="step2 d-flex justify-content-space-between justify-content-md-center gap-1 gap-md-5 required">
        <div className="d-flex flex-column">
          <label htmlFor="jobTitle">Company: </label>
          <input
            id="companyName"
            className="form-control w-100"
            name="companyName"
            type="text"
            title="Company Name"
            placeholder="Company"
            // onClick={toggleModal}
            onChange={(e) => {
              setCompanyName(e.target.value);
            }}
          />
        </div>
        <div className="d-flex flex-column">
          <label htmlFor="jobTitle">Job Title: </label>
          <input
            id="jobTitle"
            className="form-control w-100"
            name="jobTitle"
            type="text"
            title="Job Title"
            placeholder="Job Title"
            // onClick={toggleModal}
            onChange={(e) => {
              setJobTitle(e.target.value);
            }}
          />
        </div>
      </div>
      <Modal isOpen={modalOn} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>You are currently not logged in.</ModalHeader>
        <ModalBody>
          If you proceed to save this application without logging in, it will be saved to the public
          demonstration database. It will not be saved to your personal account. Please log in to
          save your application privately.
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggleModal}>
            Ok
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
