import React, { useContext, useEffect, useState } from "react";
import { Tooltip } from "reactstrap";
import { BsInfoCircle } from "react-icons/bs";
import axios from "axios";
import Context from "../utils/context";
import BtnCareerRenamer from "../components/BtnCareerRenamer";
import BtnCareerSwitcher from "../components/BtnCareerSwitcher";
import BtnCareerAdder from "../components/BtnCareerAdder";
import Step1UrlDesc from "../components/Step1UrlDesc";
import Step2NameTitle from "../components/Step2NameTitle";
import Step3Notes from "../components/Step3Notes";
import Step4Resume from "../components/Step4Resume";
import Step5CoverLetter from "../components/Step5CoverLetter";
import Step6Tags from "../components/Step6Tags";
import Step7Date from "../components/Step7Date";

export default function HomePage() {
  const context = useContext(Context);
  const [currentCareerNum, setCurrentCareerNum] = useState(0);
  const [careersList, setCareersList] = useState(["C1", "C2"]);
  const [postingURL, setPostingURL] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [jobNotes, setJobNotes] = useState("");
  const [byteaResume, setByteaResume] = useState();
  const [byteaCoverLetter, setByteaCoverLetter] = useState();
  const [resumeDisplayFile, setResumeDisplayFile] = useState({});
  const [coverLetterDisplayFile, setCoverLetterDisplayFile] = useState({});
  const [tags, setTags] = useState("");
  const [toolTipOn1, setToolTipOn1] = useState(false);
  const [subDate, setSubDate] = useState(String(new Date()));

  useEffect(() => {
    let dbProfile = context.dbProfileState;
    if (dbProfile) {
      setCurrentCareerNum(dbProfile.current_career_num);
      setCareersList(dbProfile.careers_list);
    }
  }, [context.dbProfileState]);

  async function setResumeFile(newFile) {
    const arrayBuffer = await context.getByteArray(newFile[0]);
    console.log(arrayBuffer);
    const bytea = new Uint8Array(arrayBuffer);
    console.log(bytea);
    setByteaResume(bytea);
    setResumeDisplayFile(newFile[0]);
  }

  async function setCoverLetterFile(newFile) {
    const arrayBuffer = await context.getByteArray(newFile[0]);
    const bytea = new Uint8Array(arrayBuffer);
    setByteaCoverLetter(bytea);
    setCoverLetterDisplayFile(newFile[0]);
  }

  function handleSaveApp() {
    if (companyName.length === 0 || jobTitle.length === 0) {
      document.querySelector(".step2").style.color = "red";
      alert("Save unsuccessful. Required data is missing.");
      return;
    }
    const data = {
      username: context.isAuthenticated ? context.user.email : "demoUser",
      postingURL: postingURL,
      companyName: companyName,
      jobDescription: jobDescription.toString("html"),
      jobTitle: jobTitle,
      jobNotes: jobNotes.toString("html"),
      resumeFile: byteaResume,
      coverLetterFile: byteaCoverLetter,
      tags: tags.split(","),
      careerName: careersList[currentCareerNum],
      applicationDate: String(subDate)
    };
    // console.log(data);
    axios
      .post("/api/post/postapp", data)
      .then((res) => {
        console.log("/api/post/postapp", res);
        if (context.isAuthenticated) {
          console.log(`Saved to user ${context.user.email}'s database.`);
        } else {
          console.log(`Saved to public demonstration database.`);
        }
        clearForm();
      })
      .catch((err) => {
        console.log(err);
        alert("Not saved. Error: Website under development");
      });
  }

  function clearForm() {
    setPostingURL("");
    setJobDescription("");
    setCompanyName("");
    setJobTitle("");
    setJobNotes("");
    setByteaResume([]);
    setByteaCoverLetter([]);
    let nodeList = document.getElementsByTagName("input");
    let nodeListConvertedToArray = Array.prototype.slice.call(nodeList);
    nodeListConvertedToArray.forEach((input) => {
      input.value = "";
    });
    document.querySelector(".step2").style.color = "initial";
  }

  return (
    <div className="centeredPage">
      <h5 className="text-center text-warning">Project Under Construction</h5>
      <h1>Home</h1>
      <h3>
        <span>
          <BsInfoCircle id="tipBtn" />
          <Tooltip
            placement="top"
            autohide={false}
            isOpen={toolTipOn1}
            target="tipBtn"
            toggle={() => {
              setToolTipOn1(!toolTipOn1);
            }}
          >
            This application is inteneded to be used while you are applying for
            a job on a site like Indeed or a company HR site. Fill out this form
            as you apply, then click the save button after you've submitted your
            application.
          </Tooltip>
        </span>
      </h3>
      <h3>
        Current Career:&nbsp;
        <span className="text-success">{careersList[currentCareerNum]}</span>
      </h3>
      <div className="d-flex">
        <BtnCareerSwitcher
          careersList={careersList}
          currentCareerNum={currentCareerNum}
          setCurrentCareerNum={setCurrentCareerNum}
        />
        <BtnCareerAdder
          careersList={careersList}
          setCareersList={setCareersList}
          setCurrentCareerNum={setCurrentCareerNum}
        />
        <BtnCareerRenamer
          careersList={careersList}
          setCareersList={setCareersList}
          currentCareerNum={currentCareerNum}
        />
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <Step1UrlDesc
              id="step3editor"
              name="step3editor"
              value={jobDescription}
              setPostingURL={setPostingURL}
              setJobDescription={setJobDescription}
            />
          </div>
          <div className="col">
            <Step2NameTitle
              setCompanyName={setCompanyName}
              setJobTitle={setJobTitle}
            />
            <Step3Notes
              id="step4editor"
              value={jobNotes}
              onChange={setJobNotes}
            />
          </div>
        </div>
      </div>
      <div className="container w-50">
        <div className="row">
          <div className="col">
            <Step4Resume
              setResumeFile={setResumeFile}
              resumeDisplayFile={resumeDisplayFile}
              setResumeDisplayFile={setResumeDisplayFile}
            />
          </div>
          <div className="col">
            <Step5CoverLetter
              setCoverLetterFile={setCoverLetterFile}
              coverLetterDisplayFile={coverLetterDisplayFile}
              setCoverLetterDisplayFile={setCoverLetterDisplayFile}
            />
          </div>
        </div>
      </div>
      <Step6Tags setTags={setTags} />
      <Step7Date subDate={subDate} setSubDate={setSubDate}/>
      <div className="step w-50">
        <button className="btn btn-success p-2" onClick={handleSaveApp}>
          Save
        </button>
      </div>
    </div>
  );
}
