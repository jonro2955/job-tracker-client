import { useParams } from "react-router-dom";
import Context from "../utils/context";
import { useEffect, useState, useContext } from "react";
import axios from "axios";

export default function AppViewPage() {
  const { appId } = useParams();
  const context = useContext(Context);
  const [currentApp, setCurrentApp] = useState();

  // get all records from db
  function loadApp() {
    if (context.isAuthenticated && context.dbProfileState) {
      axios
        .get("/api/get/app", { params: { appId: appId } })
        .then((res) => {
          setCurrentApp(res.data);
        })
        .catch((err) => console.log(err));
    }
  }

  useEffect(() => {
    loadApp();
  }, [context]);

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
  return (
    currentApp && (
      <div className="centeredPage">
        <h1>Application ID: {appId}</h1>
        <div>application_date: {currentApp.application_date}</div>
        <div>company_name: {currentApp.company_name}</div>
        <div>job_title: {currentApp.job_title}</div>
        <div>career_name: {currentApp.career_name}</div>
        <div>posting_url: {currentApp.company_name}</div>
        <div>job_description: {currentApp.job_description}</div>
        <div>job_notes: {currentApp.job_notes}</div>
        <div>tags: {currentApp.tags}</div>
      </div>
    )
  );
}
