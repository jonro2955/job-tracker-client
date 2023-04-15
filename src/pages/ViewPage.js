import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import axios from "axios";
import Context from "../utils/context";
// import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
// import "react-pdf/dist/esm/Page/TextLayer.css";
// import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import BtnModalCareerSwitcher from "../components/BtnModalCareerSwitcher";
import Step1CompAndTitle from "../components/Step1CompAndTitle";
import Step2URL from "../components/Step2URL";
import Step3Desc from "../components/Step3Desc";
import Step4Notes from "../components/Step4Notes";
import Step5Resume from "../components/Step5Resume";
import Step6CoverLetter from "../components/Step6CoverLetter";
import Step7Tags from "../components/Step7Tags";
import PdfViewer from "../components/PdfViewer";

export default function AppPage() {
  const { id } = useParams();
  const context = useContext(Context);
  const navigate = useNavigate();
  const [postingURL, setPostingURL] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [jobNotes, setJobNotes] = useState("");
  const [tags, setTags] = useState("");
  const [appDate, setAppDate] = useState();
  const [elapsedDays, setElapsedDays] = useState(0);
  const [careersList, setCareersList] = useState([""]);
  const [careerNum, setCareerNum] = useState(0);
  const [newCareerNum, setNewCareerNum] = useState();
  const [byteaResume, setByteaResume] = useState();
  const [byteaCoverLetter, setByteaCoverLetter] = useState();
  const [newByteaResume, setNewByteaResume] = useState();
  const [newByteaCoverLetter, setNewByteaCoverLetter] = useState();
  const [showResAdder, setShowResAdder] = useState(false);
  const [showClAdder, setShowClAdder] = useState(false);
  const [resumeDisplayFile, setResumeDisplayFile] = useState({});
  const [coverLetterDisplayFile, setCoverLetterDisplayFile] = useState({});
  const [delModalOn, setDelModalOn] = useState(false);

  function toggleDelModal() {
    setDelModalOn(!delModalOn);
  }

  useEffect(() => {
    if (context.isAuthenticated && context.dbProfileState) {
      let dbProfile = context.dbProfileState;
      if (dbProfile) {
        setCareersList(dbProfile.careers_list);
      }
      axios
        .get("/api/get/app", { params: { id } })
        .then((res) => {
          console.log(res.data);
          setPostingURL(res.data.posting_url);
          setCompanyName(res.data.company_name);
          setJobTitle(res.data.job_title);
          setJobDescription(res.data.job_description);
          setJobNotes(res.data.job_notes);
          setTags(res.data.tags.toString());
          setCareerNum(
            newCareerNum >= 0
              ? newCareerNum
              : dbProfile.careers_list.indexOf(res.data.career_name)
          );
          let appDate = new Date(res.data.application_date);
          let currDate = new Date();
          let elapsed =
            Math.ceil((currDate - appDate) / (1000 * 3600 * 24)) - 1;
          setAppDate(appDate);
          setElapsedDays(elapsed);

          /* Postgres BYTEA data:
          The 2 BYTE ARRAY data items (res.data.resume_file and res.data.cover_letter_file) 
          comes in as strings like: '{"0":13, "1":74, "2":266, "3":23, "4":80, ...}'
          so we need to JSON.parse them into objects, then turn them into arrays
          using Object.keys(), then into a Uint8Array. Note that if resume_file is 
          undefined, Object.keys() will generate an error which prevents it from
          arrayifying the cover_letter_file too. */

          if (res.data.resume_file) {
            const resData = JSON.parse(res.data.resume_file);
            let resBytea = Object.keys(resData).map((key) => resData[key]);
            if (resBytea.length) {
              resBytea = new Uint8Array(resBytea);
              setByteaResume(resBytea);
            }
          } else {
            setByteaResume(new Uint8Array([0]));
          }

          if (res.data.cover_letter_file) {
            const clData = JSON.parse(res.data.cover_letter_file);
            let clByteA = Object.keys(clData).map((key) => clData[key]);
            if (clByteA.length) {
              clByteA = new Uint8Array(clByteA);
              setByteaCoverLetter(clByteA);
            }
          } else {
            setByteaCoverLetter(new Uint8Array([0]));
          }
        })
        .catch((err) => console.log(err));
    }
  }, [context, id, newCareerNum]);

  function handleUpdateApp() {
    if (companyName.length === 0 || jobTitle.length === 0) {
      document.querySelector(".step2").style.color = "red";
      alert("Save unsuccessful. Required data is missing.");
      return;
    }
    const data = {
      appId: id,
      postingURL: postingURL,
      companyName: companyName,
      jobTitle: jobTitle,
      jobDescription: jobDescription.toString("html"),
      jobNotes: jobNotes.toString("html"),
      resumeFile: newByteaResume ? newByteaResume : byteaResume,
      coverLetterFile: newByteaCoverLetter
        ? newByteaCoverLetter
        : byteaCoverLetter,
      tags: tags.split(","),
      careerName: careersList[careerNum],
      username: context.isAuthenticated ? context.user.email : "demoUser",
      applicationDate: String(appDate),
    };
    console.log(data);
    axios
      .put("/api/put/putapp", data)
      .then((res) => {
        if (context.isAuthenticated) {
          console.log(`Updated user ${context.user.email}'s database.`);
        } else {
          console.log(`Updated public demonstration database.`);
        }
        navigate("/jobs");
      })
      .catch((err) => {
        console.log(err);
        alert(err);
      });
  }

  function getByteArray(file) {
    return new Promise((acc, err) => {
      const reader = new FileReader();
      reader.onloadend = (event) => {
        acc(event.target.result);
      };
      reader.onerror = (error) => {
        err(error);
      };
      reader.readAsArrayBuffer(file);
    });
  }

  async function setResumeFile(newFile) {
    const arrayBuffer = await getByteArray(newFile[0]);
    const bytea = new Uint8Array(arrayBuffer);
    setNewByteaResume(bytea);
    setResumeDisplayFile(newFile[0]);
    console.log("new resume file:", bytea);
    // console.log("array buffer:", arrayBuffer);
    // console.log("byte array:", bytea);
  }

  async function setCoverLetterFile(newFile) {
    const arrayBuffer = await getByteArray(newFile[0]);
    const bytea = new Uint8Array(arrayBuffer);
    setNewByteaCoverLetter(bytea);
    setCoverLetterDisplayFile(newFile[0]);
  }

  function handleDeleteApp() {
    axios
      .get("/api/get/deleteapp", { params: { id } })
      .then((res) => {
        navigate("/jobs");
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="centeredPage">
      <h1>View/Edit This Application</h1>
      <Step1CompAndTitle
        setCompanyName={setCompanyName}
        setJobTitle={setJobTitle}
        data={{
          company: companyName,
          title: jobTitle,
        }}
      />
      {appDate && (
        <h3>
          {`${appDate.getFullYear()}-${
            appDate.getMonth() + 1
          }-${appDate.getDate()} (${elapsedDays} day${
            elapsedDays > 1 ? "s" : ""
          } ago)`}
        </h3>
      )}
      <span className="text-success d-flex justify-content-center align-items-center">
        <h3>
          Career: {careersList[careerNum]}
          &nbsp; &nbsp;
        </h3>
        <BtnModalCareerSwitcher
          careersList={careersList}
          careerNum={careerNum}
          setCurrentCareerNum={setNewCareerNum}
        />
      </span>
      <div className="container">
        <div className="row">
          <Step2URL postingURL={postingURL} setPostingURL={setPostingURL} />
          <div className="col">
            <Step3Desc
              id="step3editor"
              jobDescription={jobDescription}
              setJobDescription={setJobDescription}
            />
          </div>
          <div className="col">
            <Step4Notes
              id="step4editor"
              value={jobNotes}
              onChange={setJobNotes}
            />
          </div>
        </div>

        <div className="row">
          <div className="col text-center">
            {byteaResume && byteaResume.length > 1 ? (
              <div>
                <PdfViewer byteData={byteaResume} type={"Resume"} />
              </div>
            ) : (
              <div>
                <h3 className="text-center">This application has no resume</h3>
              </div>
            )}
          </div>
          <div className="col text-center">
            {byteaCoverLetter && byteaCoverLetter.length > 1 ? (
              <div>
                <PdfViewer byteData={byteaCoverLetter} type={"Cover Letter"} />
              </div>
            ) : (
              <div>
                <h3 className="text-center">
                  This application has no cover letter
                </h3>
              </div>
            )}
          </div>
        </div>
        <div className="row">
          <div className="col text-center">
            <Step5Resume
              setResumeFile={setResumeFile}
              resumeDisplayFile={resumeDisplayFile}
              setResumeDisplayFile={setResumeDisplayFile}
            />
          </div>
          <div className="col text-center">
            <Step6CoverLetter
              setCoverLetterFile={setCoverLetterFile}
              coverLetterDisplayFile={coverLetterDisplayFile}
              setCoverLetterDisplayFile={setCoverLetterDisplayFile}
            />
          </div>
        </div>
        {/* <div className="row">
          <Step7Tags setTags={setTags} value={tags} />
        </div> */}
      </div>
      <div className="step w-50">
        <button className="btn btn-success p-2" onClick={handleUpdateApp}>
          Update
        </button>
      </div>
      <button className="btn btn-warning p-2" onClick={toggleDelModal}>
        Delete
      </button>
      <Modal isOpen={delModalOn} toggle={toggleDelModal}>
        <ModalHeader toggle={toggleDelModal}>Confirm Delete</ModalHeader>
        <ModalBody>Are you sure you want to delete this application?</ModalBody>
        <ModalFooter>
          <Button
            color="primary"
            onClick={() => {
              handleDeleteApp();
            }}
          >
            Yes
          </Button>
          <Button color="warning" onClick={toggleDelModal}>
            No
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
