import { useState, useContext } from "react";
import Context from "../utils/context";
import axios from "axios";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

export default function BtnCareerAdder({ careersList, setCareersList }) {
  const context = useContext(Context);
  const [newCareer, setNewCareer] = useState("");
  const [modalOn, setModalOn] = useState(false);

  function toggleModal() {
    setModalOn(!modalOn);
  }

  function validateAddCareer() {
    if (newCareer.length === 0) {
      return;
    }
    if (
      careersList.find((item) => {
        return item === newCareer;
      })
    ) {
      alert(`"${newCareer}" already exists. Cannot create duplicate careers.`);
    } else {
      let newList = [...careersList, newCareer];
      updateCareersList(newList);
      toggleModal();
    }
  }

  function updateCareersList(newList) {
    if (context.isAuthenticated && context.dbProfileState) {
      let currentUser = context.dbProfileState.username;
      const data = {
        username: currentUser,
        careersList: newList,
      };
      axios
        .put("/api/put/careerslist", data) // db update
        .then((res) => {
          console.log("api/put/careerslist res", res.data);
          const tempProfile = { ...context.dbProfileState };
          tempProfile.careers_list = data.careersList;
          context.dispatchSetDbProfile(tempProfile); // reducer update
          setCareersList(newList); // HomePage ui update
        })
        .catch((err) => {
          console.log("api/put/careernum err", err);
        });
    } else {
      setCareersList(newList);
    }

    // let currentUser =
    //   context.isAuthenticated && context.dbProfileState
    //     ? context.dbProfileState.username
    //     : "demoUser";
  }

  return (
    <div>
      <div className="dropdown">
        <button
          type="button"
          className="btn btn-success m-1"
          onClick={() => {
            toggleModal();
          }}
        >
          New Career
        </button>
        <Modal isOpen={modalOn} toggle={toggleModal}>
          <ModalHeader toggle={toggleModal}>New career name:</ModalHeader>
          <ModalBody>
            <form
              autoFocus
              onSubmit={(e) => {
                e.preventDefault();
                validateAddCareer();
              }}
            >
              <input
                name="newCareer"
                id="newCareer"
                type="text"
                title="New Career"
                placeholder="career"
                className="form-control"
                onChange={(e) => {
                  setNewCareer(e.target.value);
                }}
              />
              <button type="submit" className="btn btn-success w-100">
                Add
              </button>
              {/* <div className="text-center">Existing Careers:</div>
              {careersList.map((name, i) => {
                return (
                  <div key={i}>
                    <button
                      type="button"
                      className="btn btn-outline-success w-100"
                      disabled
                    >
                      {name}
                    </button>
                  </div>
                );
              })} */}
            </form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={toggleModal}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    </div>
  );
}
