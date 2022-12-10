import React, { useContext, useEffect, useState } from "react";
import Context from "../utils/context";
import axios from "axios";
import BtnCareerRenamer from "../components/BtnCareerRenamer";
import BtnCareerSwitcher from "../components/BtnCareerSwitcher";
import BtnCareerAdder from "../components/BtnCareerAdder";
import Step1 from "../components/Step1";
import Step2 from "../components/Step2";
import Step3 from "../components/Step3";
import Step4 from "../components/Step4";
import Step5 from "../components/Step5";
import Step6 from "../components/Step6";
import StepSave from "../components/StepSave";

export default function HomePage() {
  const context = useContext(Context);
  const [currentCareerNum, setCurrentCareerNum] = useState(0);
  const [careersList, setCareersList] = useState(["C1", "C2"]);
  const [postingURL, setPostingURL] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [jobNotes, setJobNotes] = useState("");
  const [files, setFiles] = useState([]);
  const [tags, setTags] = useState("");

  useEffect(() => {
    let dbProfile = context.dbProfileState;
    if (dbProfile) {
      setCurrentCareerNum(dbProfile.current_career_num);
      setCareersList(dbProfile.careers_list);
    }
  }, [context.dbProfileState]);

  /* 
  handleSetFilesState(droppedFiles) is the "ondrop" callback that is set up to run everytime 
  files are dropped/selected into the step 5 file loader. When files are dropped, 
  those files are inserted into this function as input arguments and this function is ran.
  When these files are first dropped, for each file, the app receives an abject containing information about those files (like the name, path, etc) but not the actual file contents itself. So in this function, we want to somehow load the file's actual data contents into 
  a variable so that we can insert that variable into the setFiles state setter to store it into the "files" state. Argument newFiles will be an array of file data abjects.

  We'll define a subfunction inside the function that will return a promise, so
  the function needs to be asynchronous.
  */
  async function handleSetFilesState(newFiles) {
    // subfunction
    const getByteArray = (file) => {
      return new Promise((acc, err) => {
        const reader = new FileReader(); // browser's built in file reader method
        reader.onload = (event) => {
          acc(event.target.result);
        };
        reader.onerror = (error) => {
          err(error);
        };
        reader.readAsArrayBuffer(file);
      });
    };
    console.log("here we have the regular file objects : ", newFiles);
    let byteafilesArray = [];
    let arrayBuffersArray = [];
    newFiles.forEach(async (file) => {
      const arrayBuffer = await getByteArray(file);
      arrayBuffersArray.push(arrayBuffer);
      const bytea = new Uint8Array(arrayBuffer);
      byteafilesArray.push(bytea);
    });
    console.log("here we have the files as temporary array buffers: ", arrayBuffersArray);
    console.log("here we have the files converted as Uint8Array byte arrays: ", byteafilesArray);
    // using the getByteArray subfunction
    /*
    const temp = await getByteArray(newFiles[0]);
    console.log("here we have the files as ArrayBuffers : ", temp);
    const fileb = new Uint8Array(temp);
    console.log("here we have converted the file as an Uint8Array : ", fileb);
    */
    setFiles([...files, ...newFiles]);
  }

  function handleSaveApp() {
    if (companyName.length === 0 || jobTitle.length === 0) {
      document.querySelector("#step3Heading").style.color = "red";
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
      files: files,
      tags: tags.split(","),
      careerName: careersList[currentCareerNum],
      applicationDate: getTimeStamp(),
    };
    console.log(data);
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

  function getTimeStamp() {
    let date = new Date();
    let year = date.getFullYear().toString(); // 4-digit year
    let month = (date.getMonth() + 1).toString(); // 00-11
    let day = date.getDate().toString(); // 00-06
    let hour = date.getHours(); // 0-23
    let min = date.getMinutes(); // 0-59
    if (month.length === 1) {
      month = "0" + month;
    }
    if (day.length === 1) {
      day = "0" + day;
    }
    return parseInt(year + month + day + hour + min);
  } // format: 202201232250 (yyyymmddhhmm)

  function clearForm() {
    setPostingURL("");
    setJobDescription("");
    setCompanyName("");
    setJobTitle("");
    setJobNotes("");
    setFiles([]);
    let nodeList = document.getElementsByTagName("input");
    let nodeListConvertedToArray = Array.prototype.slice.call(nodeList);
    nodeListConvertedToArray.forEach((input) => {
      input.value = "";
    });
    document.querySelector("#step1Heading").style.color = "initial";
    document.querySelector("#step3Heading").style.color = "initial";
  }

  return (
    <div className="centeredPage">
      <h5 className="text-center text-warning">Project Under Construction</h5>
      <h1>Home</h1>
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
      <Step1 setPostingURL={setPostingURL} />
      <Step2 setCompanyName={setCompanyName} setJobTitle={setJobTitle} />
      <div className="container">
        <div className="row">
          <div className="col">
            <Step3
              id="step3editor"
              name="step3editor"
              value={jobDescription}
              onChange={setJobDescription}
            />
          </div>
          <div className="col">
            <Step4 id="step4editor" value={jobNotes} onChange={setJobNotes} />
          </div>
        </div>
      </div>
      <Step5 handleSetFilesState={handleSetFilesState} files={files} setFiles={setFiles} />
      <Step6 setTags={setTags} />
      <StepSave handleSaveApp={handleSaveApp} />
    </div>
  );
}
