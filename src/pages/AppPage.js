import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Context from "../utils/context";
import BtnCareerRenamer from "../components/BtnModalCareerRenamer";
import BtnCareerSwitcher from "../components/BtnModalCareerSwitcher";
import BtnCareerAdder from "../components/BtnModalCareerAdder";
import Step1UrlDesc from "../components/Step1UrlDesc";
import Step2NameTitle from "../components/Step2NameTitle";
import Step3Notes from "../components/Step3Notes";
import Step4Resume from "../components/Step4Resume";
import Step5CoverLetter from "../components/Step5CoverLetter";
import Step6Tags from "../components/Step6Tags";
import Step7Date from "../components/Step7Date";

export default function AppPage() {
  const { id } = useParams();
  const context = useContext(Context);
  const [appData, setAppData] = useState();
  const [postingURL, setPostingURL] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [jobNotes, setJobNotes] = useState("");
  const [careerName, setCareerName] = useState("");
  const [byteaResume, setByteaResume] = useState();
  const [byteaCoverLetter, setByteaCoverLetter] = useState();
  const [resumeDisplayFile, setResumeDisplayFile] = useState({});
  const [coverLetterDisplayFile, setCoverLetterDisplayFile] = useState({});
  const [tags, setTags] = useState("");
  const [appDate, setAppDate] = useState();
  const [careersList, setCareersList] = useState([""]);
  const [currentCareerNum, setCurrentCareerNum] = useState(0);
  const [elapsedDays, setElapsedDays] = useState(0);

  /* 
  app_id SERIAL UNIQUE,
  username TEXT UNIQUE REFERENCES users(username),
  career_name TEXT,
  posting_url TEXT,
  company_name TEXT NOT NULL,
  job_title TEXT NOT NULL,
  job_description TEXT,
  job_notes TEXT,
  resume_file BYTEA, 
  cover_letter_file BYTEA,
  tags TEXT [],
  application_date TEXT,
  */

  useEffect(() => {
    if (context.isAuthenticated && context.dbProfileState) {
      let dbProfile = context.dbProfileState;
      if (dbProfile) {
        setCareersList(dbProfile.careers_list);
      }
      axios
        .get("/api/get/app", { params: { id } })
        .then((res) => {
          setAppData(res.data);
          console.log("res.data", res.data);
          // Set all states here using res.data. In fact, I don't think we even need the appData state by doing this.
          setPostingURL(res.data.posting_url);
          setCompanyName(res.data.company_name);
          setJobTitle(res.data.job_title);
          setJobDescription(res.data.job_description);
          setJobNotes(res.data.job_notes);
          setTags(res.data.tags);
          setCareerName(res.data.career_name);
          setCurrentCareerNum(dbProfile.current_career_num);
          let appDate = new Date(res.data.application_date);
          setAppDate(appDate);
          let currDate = new Date();
          let elapsed =
            Math.ceil((currDate - appDate) / (1000 * 3600 * 24)) - 1;
          setElapsedDays(elapsed);
        })
        .catch((err) => console.log(err));
    }
  }, [context]);

  useEffect(() => {
    if (appData) {
    }
  }, [appData]);

  function handleUpdateApp() {}

  return (
    appData && (
      <div className="centeredPage">
        <h1>View/Edit This Application</h1>
        {/* <h1>Application ID: {id}</h1>
        <div>application_date: {appData.application_date}</div>
        <div>company_name: {appData.company_name}</div>
        <div>job_title: {appData.job_title}</div>
        <div>career_name: {appData.career_name}</div>
        <div>posting_url: {appData.posting_url}</div>
        <div>job_description: {appData.job_description}</div>
        <div>job_notes: {appData.job_notes}</div>
        <div>tags: {appData.tags}</div> */}
        {/*  */}
        {/* <h2>Application Date:</h2> */}
        <Step2NameTitle
          setCompanyName={setCompanyName}
          setJobTitle={setJobTitle}
          data={{
            company: companyName,
            title: jobTitle,
          }}
        />
        {appDate && (
          <h3>
            Application Date:{" "}
            {`${appDate.getFullYear()}-${
              appDate.getMonth() + 1
            }-${appDate.getDate()} (${elapsedDays} day${
              elapsedDays > 1 ? "s" : ""
            } ago)`}
          </h3>
        )}
        <span className="text-success d-flex justify-content-center align-items-center">
          <h3>
            Career: {careerName}
            &nbsp; &nbsp;
          </h3>
          <BtnCareerSwitcher
            careersList={careersList}
            currentCareerNum={currentCareerNum}
            setCurrentCareerNum={setCurrentCareerNum}
          />
        </span>
        <div className="container">
          <div className="row">
            <div className="col">
              <Step1UrlDesc
                id="step3editor"
                name="step3editor"
                value={jobDescription}
                url={postingURL}
                setPostingURL={setPostingURL}
                setJobDescription={setJobDescription}
              />
            </div>
            <div className="col">
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
              {}
              {/* <Step4Resume
                setResumeFile={setResumeFile}
                resumeDisplayFile={resumeDisplayFile}
                setResumeDisplayFile={setResumeDisplayFile}
              /> */}
            </div>
            <div className="col">
              {/* <Step5CoverLetter
                setCoverLetterFile={setCoverLetterFile}
                coverLetterDisplayFile={coverLetterDisplayFile}
                setCoverLetterDisplayFile={setCoverLetterDisplayFile}
              /> */}
            </div>
          </div>
        </div>
        <Step6Tags setTags={setTags} value={appData.tags} />
        <div className="step w-50">
          <button className="btn btn-success p-2" onClick={handleUpdateApp}>
            Update
          </button>
        </div>
        {/*  */}
      </div>
    )
  );
}
