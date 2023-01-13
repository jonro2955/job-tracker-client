import { useParams } from "react-router-dom";
import Context from "../utils/context";
import { useEffect, useState, useContext } from "react";
import axios from "axios";

export default function AppPage() {
  const { appId } = useParams();
  const context = useContext(Context);
  const [app, setApp] = useState();

  // get all records from db
  function loadApp() {
    if (context.isAuthenticated && context.dbProfileState) {
      axios
        .get("/api/get/app", { params: { appId: appId } })
        .then((res) => {
          setApp(res.data);
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
    app && (
      <div className="centeredPage">
        <h1>Application ID: {appId}</h1>
        <div>application_date: {app.application_date}</div>
        <div>company_name: {app.company_name}</div>
        <div>job_title: {app.job_title}</div>
        <div>career_name: {app.career_name}</div>
        <div>posting_url: {app.posting_url}</div>
        <div>job_description: {app.job_description}</div>
        <div>job_notes: {app.job_notes}</div>
        <div>tags: {app.tags}</div>
      </div>
    )
  );
}
