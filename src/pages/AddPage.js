import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Context from "../utils/context";
import BtnCareerRenamer from "../components/BtnModalCareerRenamer";
import BtnCareerSwitcher from "../components/BtnModalCareerSwitcher";
import BtnCareerAdder from "../components/BtnModalCareerAdder";
import Step1CompAndTitle from "../components/Step1CompAndTitle";
import Step2URL from "../components/Step2URL";
import Step3Desc from "../components/Step3Desc";
import Step4Notes from "../components/Step4Notes";
import Step5Resume from "../components/Step5Resume";
import Step6CoverLetter from "../components/Step6CoverLetter";
import Step7Tags from "../components/Step7Tags";
import Step8Date from "../components/Step8Date";

export default function AddPage() {
  const context = useContext(Context);
  const navigate = useNavigate();
  const [data, setData] = useState(JSON.parse(useParams().data));
  // console.log(data);
  const [currentCareerNum, setCurrentCareerNum] = useState(0);
  const [careersList, setCareersList] = useState(["C1", "C2"]);
  const [postingURL, setPostingURL] = useState("");
  const [companyName, setCompanyName] = useState(data["company"]);
  const [jobTitle, setJobTitle] = useState(data["title"]);
  const [jobDescription, setJobDescription] = useState("");
  const [jobNotes, setJobNotes] = useState("");
  const [byteaResume, setByteaResume] = useState();
  const [byteaCoverLetter, setByteaCoverLetter] = useState();
  const [resumeDisplayFile, setResumeDisplayFile] = useState({});
  const [coverLetterDisplayFile, setCoverLetterDisplayFile] = useState({});
  const [tags, setTags] = useState("");
  const [subDate, setSubDate] = useState(new Date());

  useEffect(() => {
    let dbProfile = context.dbProfileState;
    if (dbProfile) {
      setCurrentCareerNum(dbProfile.current_career_num);
      setCareersList(dbProfile.careers_list);
    }
  }, [context.dbProfileState]);

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
    setByteaResume(bytea);
    setResumeDisplayFile(newFile[0]);
    // console.log("new resume file:", newFile[0]);
    // console.log("array buffer:", arrayBuffer);
    // console.log("byte array:", bytea);
  }

  async function setCoverLetterFile(newFile) {
    const arrayBuffer = await getByteArray(newFile[0]);
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
      applicationDate: String(subDate),
    };
    console.log(data);
    axios
      .post("/api/post/postapp", data)
      .then((res) => {
        if (context.isAuthenticated) {
          console.log(`Saved to user ${context.user.email}'s database.`);
        } else {
          console.log(`Saved to public demonstration database.`);
        }
        navigate("/jobs");
      })
      .catch((err) => {
        console.log(err);
        alert(err);
      });
  }

  function clearForm() {
    setPostingURL("");
    setJobDescription("");
    setCompanyName("");
    setJobTitle("");
    setData({ company: "", title: "" });
    setJobNotes("");
    setByteaResume([]);
    setByteaCoverLetter([]);
    let nodeList = document.getElementsByTagName("input");
    let nodeListConvertedToArray = Array.prototype.slice.call(nodeList);
    nodeListConvertedToArray.forEach((input) => {
      input.value = "";
    });
    // document.querySelector(".step2").style.color = "initial";
  }

  return (
    <div className="centeredPage">
      <h1>New Application</h1>
      <h3>
        Career:&nbsp;
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
          <Step1CompAndTitle
            setCompanyName={setCompanyName}
            setJobTitle={setJobTitle}
            data={data}
          />
          <Step2URL postingURL={postingURL} setPostingURL={setPostingURL} />
        </div>
        <div className="row">
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
          <div className="col">
            <Step5Resume
              setResumeFile={setResumeFile}
              resumeDisplayFile={resumeDisplayFile}
              setResumeDisplayFile={setResumeDisplayFile}
            />
          </div>
          <div className="col">
            <Step6CoverLetter
              setCoverLetterFile={setCoverLetterFile}
              coverLetterDisplayFile={coverLetterDisplayFile}
              setCoverLetterDisplayFile={setCoverLetterDisplayFile}
            />
          </div>
        </div>
        {/* <Step7Tags setTags={setTags} /> */}
      </div>
      <Step8Date subDate={subDate} setSubDate={setSubDate} />
      <div className="step w-50">
        <button className="btn btn-success p-2" onClick={handleSaveApp}>
          Save
        </button>
      </div>
    </div>
  );
}
