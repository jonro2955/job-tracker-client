import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import Context from "../utils/context";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import axios from "axios";

export default function BtnCareerSwitcher({
  careersList,
  currentCareerNum,
  setCurrentCareerNum,
}) {
  const context = useContext(Context);
  const [modalOn, setModalOn] = useState(false);

  function toggleModal() {
    setModalOn(!modalOn);
  }

  function updateCurrentCareerNum(newNum) {
    if (context.isAuthenticated && context.dbProfileState) {
      let currentUser = context.dbProfileState.username;
      const data = {
        currentCareerNum: newNum,
        username: currentUser,
      };
      axios
        .put("/api/put/careernum", data) // db update
        .then((res) => {
          const tempProfile = { ...context.dbProfileState };
          tempProfile.current_career_num = data.currentCareerNum;
          context.dispatchSetDbProfile(tempProfile); // reducer update
          setCurrentCareerNum(newNum); // HomePage ui update
        })
        .catch((err) => {
          console.log("api/put/careernum err", err);
        });
    } else {
      setCurrentCareerNum(newNum);
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
          Switch Career
        </button>
        <Modal isOpen={modalOn} toggle={toggleModal}>
          <ModalHeader toggle={toggleModal}>Select career:</ModalHeader>
          <ModalBody>
            {careersList.map((name, i) => {
              return (
                <div key={i}>
                  <button
                    type="button"
                    className="btn btn-success w-100"
                    disabled={currentCareerNum === i ? true : false}
                    onClick={() => {
                      updateCurrentCareerNum(i);
                      toggleModal();
                    }}
                  >
                    {name}
                  </button>
                </div>
              );
            })}
            <div className="text-center">
              <Link to="/home">How to delete a career</Link>
            </div>
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
