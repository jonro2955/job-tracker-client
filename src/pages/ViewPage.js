import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Context from "../utils/context";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
// import "react-pdf/dist/esm/Page/TextLayer.css";
// import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import BtnCareerSwitcher from "../components/BtnModalCareerSwitcher";
import Step1UrlDesc from "../components/Step1UrlDesc";
import Step2NameTitle from "../components/Step2NameTitle";
import Step3Notes from "../components/Step3Notes";
import Step6Tags from "../components/Step6Tags";
import PdfViewer from "../components/PdfViewer";
// import Step4Resume from "../components/Step4Resume";
// import Step5CoverLetter from "../components/Step5CoverLetter";

export default function AppPage() {
  const { id } = useParams();
  const context = useContext(Context);
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
  const [resBytea, setResumeBytea] = useState();
  const [coverLetterBytea, setCoverLetterBytea] = useState();

  useEffect(() => {
    if (context.isAuthenticated && context.dbProfileState) {
      let dbProfile = context.dbProfileState;
      if (dbProfile) {
        setCareersList(dbProfile.careers_list);
      }
      axios
        .get("/api/get/app", { params: { id } })
        .then((res) => {
          // console.log(res.data);
          setPostingURL(res.data.posting_url);
          setCompanyName(res.data.company_name);
          setJobTitle(res.data.job_title);
          setJobDescription(res.data.job_description);
          setJobNotes(res.data.job_notes);
          setTags(String(res.data.tags));
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

          // res.data.resume_file and res.data.cover_letter_file comes in as strings
          // like: '{"0":13, "1":74, "2":266, "3":23, "4":80, ...}' so we need to
          // JSON.parse it into an object, then turn it into an array using
          // Object.keys() then into a Uint8Array, like this:
          const resumeData = JSON.parse(res.data.resume_file);
          const clData = JSON.parse(res.data.cover_letter_file);
          let resBytea = Object.keys(resumeData).map((key) => resumeData[key]);
          let clByteA = Object.keys(clData).map((key) => resumeData[key]);
          resBytea = new Uint8Array(resBytea);
          clByteA = new Uint8Array(clByteA);
          setResumeBytea(resBytea);
          setCoverLetterBytea(clByteA);
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
      username: context.isAuthenticated ? context.user.email : "demoUser",
      postingURL: postingURL,
      companyName: companyName,
      jobDescription: jobDescription.toString("html"),
      jobTitle: jobTitle,
      jobNotes: jobNotes.toString("html"),
      tags: tags.split(","),
      careerName: careersList[careerNum],
    };
    console.log(data);
  }

  return (
    <div className="centeredPage">
      <h1>View/Edit This Application</h1>
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
        <BtnCareerSwitcher
          careersList={careersList}
          careerNum={careerNum}
          setCurrentCareerNum={setNewCareerNum}
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

      <PdfViewer byteData={resBytea} />

      <Step6Tags setTags={setTags} value={tags} />
      <div className="step w-50">
        <button className="btn btn-success p-2" onClick={handleUpdateApp}>
          Update
        </button>
      </div>
    </div>
  );
}
