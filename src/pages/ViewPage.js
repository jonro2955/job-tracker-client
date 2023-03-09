import React, { useContext, useEffect, useState, useMemo } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Context from "../utils/context";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import BtnCareerSwitcher from "../components/BtnModalCareerSwitcher";
import PdfViewer from "../components/PdfViewer";
import Step1UrlDesc from "../components/Step1UrlDesc";
import Step2NameTitle from "../components/Step2NameTitle";
import Step3Notes from "../components/Step3Notes";
import Step4Resume from "../components/Step4Resume";
import Step5CoverLetter from "../components/Step5CoverLetter";
import Step6Tags from "../components/Step6Tags";

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
  const [resumeBytea, setResumeBytea] = useState();
  const [coverLetterBytea, setCoverLetterBytea] = useState();
  const [resumeSize, setResumeSize] = useState(400);
  const [coverLetterSize, setCoverLetterSize] = useState(400);

  /* 

  const calculation = useMemo(() => getPdfs(id), [id]);

  function getPdfs(num) {
    return 1;
  }

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

          // res.data.resume_file comes in as a stringified object
          // it looks like this: '{"0":13, "1":74, "2":266, "3":23, "4":80, ...}'
          // so we need to JSON.parse it into an object, then turn it into an array
          // then into a Uint8Array
          const resumeData = JSON.parse(res.data.resume_file);
          let resumeByteA = Object.keys(resumeData).map(
            (key) => resumeData[key]
          );
          resumeByteA = new Uint8Array(resumeByteA);
          setResumeBytea(resumeByteA);
          // same thing for cover letter
          const clData = JSON.parse(res.data.cover_letter_file);
          let clByteA = Object.keys(resumeData).map((key) => resumeData[key]);
          clByteA = new Uint8Array(clByteA);
          setCoverLetterBytea(clByteA);
        })
        .catch((err) => console.log(err));
    }
  }, [context, id]);

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

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offset) {
    setPageNumber((prevPageNumber) => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

  function handleResSizeChange(event) {
    setResumeSize(parseInt(event.target.value));
  }

  function handleClSizeChange(event) {
    setCoverLetterSize(parseInt(event.target.value));
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

      {/* Resume */}
      <div className="step">
        <h3 className="text-center">Resume</h3>
        {resumeBytea && (
          <Document
            file={{ data: resumeBytea }}
            onLoadSuccess={onDocumentLoadSuccess}
            loading=""
          >
            <Page pageNumber={pageNumber} className="pdfPage" />
          </Document>
        )}
        {numPages > 1 && (
          <>
            <p>
              Page {pageNumber} of {numPages}
            </p>
            <button
              type="button"
              disabled={pageNumber <= 1}
              onClick={previousPage}
            >
              Previous
            </button>
            <button
              type="button"
              disabled={pageNumber >= numPages}
              onClick={nextPage}
            >
              Next
            </button>
          </>
        )}
        {/* <Step4Resume
              setResumeFile={setResumeFile}
              resumeDisplayFile={resumeBytea}
              setResumeDisplayFile={setResumeDisplayFile}
            /> */}
      </div>
      {/* CL */}
      <div className="step">
        <h3 className="text-center">Cover Letter</h3>
        {coverLetterBytea && (
          <Document
            file={{ data: coverLetterBytea }}
            onLoadSuccess={onDocumentLoadSuccess}
            loading=""
          >
            <Page pageNumber={pageNumber} className="pdfPage" />
          </Document>
        )}
        {numPages > 1 && (
          <>
            <p>
              Page {pageNumber} of {numPages}
            </p>
            <button
              type="button"
              disabled={pageNumber <= 1}
              onClick={previousPage}
            >
              Previous
            </button>
            <button
              type="button"
              disabled={pageNumber >= numPages}
              onClick={nextPage}
            >
              Next
            </button>
          </>
        )}
        {/* <Step5CoverLetter
                setCoverLetterFile={setCoverLetterFile}
                coverLetterDisplayFile={coverLetterDisplayFile}
                setCoverLetterDisplayFile={setCoverLetterDisplayFile}
              /> */}
      </div>
      <Step6Tags setTags={setTags} value={tags} />
      <div className="step w-50">
        <button className="btn btn-success p-2" onClick={handleUpdateApp}>
          Update
        </button>
      </div>
    </div>
  );
}