import { Link } from "react-router-dom";
import SearchRadio from "./SearchRadio";
import { useState, useContext } from "react";
import Context from "../utils/context";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

export default function BtnModalCreateJob({}) {
  const context = useContext(Context);
  const [modalOn, setModalOn] = useState(false);

  function toggleModal() {
    setModalOn(!modalOn);
  }

  return (
    // <div>
    <div className="dropdown text-center">
      <button
        type="button"
        className="btn btn-primary m-1"
        onClick={() => {
          toggleModal();
        }}
      >
        + Create
      </button>
      <Modal isOpen={modalOn} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}></ModalHeader>
        <ModalBody>
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
                onChange={(e) => {
                  // setCompanyName(e.target.value);
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
                onChange={(e) => {
                  // setJobTitle(e.target.value);
                }}
              />
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button
            color="primary"
            onClick={() => {
              alert("Add");
              /* Insert function to check db for similar comanies/ positions and display them  */
            }}
          >
            Add
          </Button>
        </ModalFooter>
      </Modal>
    </div>
    // </div>
  );
}
