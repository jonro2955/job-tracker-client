import { useState, useContext } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import Context from "../utils/context";
import axios from "axios";

export default function BtnCareerRenamer({
  careersList,
  setCareersList,
  currentCareerNum,
}) {
  const context = useContext(Context);
  const [newName, setNewName] = useState(careersList[currentCareerNum]);
  const [modalOn, setModalOn] = useState(false);

  function toggleModal() {
    setModalOn(!modalOn);
  }

  function validateRename() {
    if (newName.length === 0 || newName === careersList[currentCareerNum]) {
      return;
    }
    if (
      careersList.find((item) => {
        return item === newName;
      })
    ) {
      alert(
        `Error: "${newName}" already exists. Cannot create duplicate careers.`
      );
    } else {
      updateRenameCareer(careersList, currentCareerNum, newName);
      toggleModal();
    }
  }

  /* Update both "users" table's careersList value and "apps" table's career values*/
  function updateRenameCareer(careersList, currentCareerNum, newName) {
    let newList = [...careersList];
    newList[currentCareerNum] = newName;
    if (context.isAuthenticated && context.dbProfileState) {
      let currentUser = context.dbProfileState.username;
      const oldName = careersList[currentCareerNum];
      const data = {
        username: currentUser,
        careersList: newList,
        oldCareerName: oldName,
        newCareerName: newName,
      };
      axios
        .put("/api/put/renamecareer", data) // db update
        .then((res) => {
          console.log("api/put/renamecareer res.data: ", res.data);
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
          onClick={toggleModal}
        >
          Rename Career
        </button>
        <Modal isOpen={modalOn} toggle={toggleModal}>
          <ModalHeader toggle={toggleModal}>
            Rename The Current Career: "{careersList[currentCareerNum]}"
          </ModalHeader>
          <ModalBody>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                validateRename();
              }}
            >
              <div>
                Note: Renaming this career will change the "career" attribute of
                all saved jobs with the career name "{careersList[currentCareerNum]}"
                to a new name entered below:
              </div>
              <input
                name="renameCareer"
                id="renameCareer"
                type="text"
                className="form-control"
                title="Rename Career"
                placeholder="New name"
                onChange={(e) => {
                  setNewName(e.target.value);
                }}
              />
              <button
                type="button"
                className="btn btn-success w-100"
                onClick={validateRename}
              >
                Rename
              </button>
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
