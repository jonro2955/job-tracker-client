import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

export default function BtnModalCreateJob({ allAppsList }) {
  const navigate = useNavigate();
  const [modalOn, setModalOn] = useState(false);
  const [companyName, setCompanyName] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [similarEntriesList, setSimilarEntriesList] = useState([]);

  function toggleModal() {
    setModalOn(!modalOn);
  }

  useEffect(() => {
    if (!companyName && !jobTitle) {
      setSimilarEntriesList([]);
    } else {
      setSimilarEntriesList(
        allAppsList.filter((app) => {
          return (
            app["company_name"]
              .toLowerCase()
              .includes(companyName.toLowerCase()) &&
            app["job_title"].toLowerCase().includes(jobTitle.toLowerCase())
          );
        })
      );
    }
  }, [companyName, jobTitle, allAppsList]);

  return (
    <div className="dropdown text-center">
      <button
        type="button"
        className="btn btn-primary m-1"
        onClick={() => {
          toggleModal();
        }}
      >
        + Add
      </button>
      <Modal isOpen={modalOn} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>TRACK A NEW JOB</ModalHeader>
        <ModalBody>
          <div className="step2 d-flex justify-content-space-between justify-content-md-center gap-1 gap-md-5 required">
            <div className="d-flex flex-column">
              <label htmlFor="jobTitle">
                <strong>Company: </strong>
              </label>
              <input
                id="companyName"
                className="form-control w-100"
                name="companyName"
                type="text"
                title="Company Name"
                placeholder="Company"
                value={companyName}
                onChange={(e) => {
                  setCompanyName(e.target.value);
                }}
              />
            </div>
            <div className="d-flex flex-column">
              <label htmlFor="jobTitle">
                <strong>Job Title: </strong>
              </label>
              <input
                id="jobTitle"
                className="form-control w-100"
                name="jobTitle"
                type="text"
                title="Job Title"
                placeholder="Job Title"
                value={jobTitle}
                onChange={(e) => {
                  setJobTitle(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="step2 d-flex justify-content-space-between justify-content-md-center gap-1 gap-md-5 required"></div>
        </ModalBody>
        <ModalFooter className="d-flex justify-content-between">
          <Button
            color="success"
            disabled={!companyName && !jobTitle}
            onClick={() => {
              setCompanyName("");
              setJobTitle("");
            }}
          >
            Reset
          </Button>
          <Button
            color="primary"
            disabled={!companyName || !jobTitle}
            onClick={() => {
              navigate(
                `/add/{"company":"${companyName}","title":"${jobTitle}"}`
              );
            }}
          >
            Add
          </Button>
        </ModalFooter>
        <ModalFooter className="d-flex flex-column justify-content-between align-items-center">
          <h5>Matching Entries</h5>
          <div>
            {similarEntriesList.length > 0 && (
              <table className="table table-bordered text-center mt-4">
                <thead>
                  <tr>
                    <th>Company</th>
                    <th>Title</th>
                    <th>Application Date</th>
                  </tr>
                </thead>
                <tbody>
                  {similarEntriesList.map((entry, i) => {
                    let date = new Date(entry["application_date"]);
                    return (
                      <tr key={i}>
                        <td>{entry["company_name"]}</td>
                        <td>{entry["job_title"]}</td>
                        <td>{`${date.getFullYear()}-${
                          date.getMonth() + 1
                        }-${date.getDate()}`}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            )}
          </div>
        </ModalFooter>
      </Modal>
    </div>
  );
}
