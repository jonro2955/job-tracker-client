import { useParams } from "react-router-dom";
import Context from "../utils/context";
import { useEffect, useState, useContext } from "react";
import axios from "axios";

export default function AppPage() {
  const { id } = useParams();
  const context = useContext(Context);
  const [appData, setAppData] = useState();

  useEffect(() => {
    if (context.isAuthenticated && context.dbProfileState) {
      axios
        .get("/api/get/app", { params: { id } })
        .then((res) => {
          setAppData(res.data);
        })
        .catch((err) => console.log(err));
    }
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
    appData && (
      <div className="centeredPage">
        <h1>Application ID: {id}</h1>
        <div>application_date: {appData.application_date}</div>
        <div>company_name: {appData.company_name}</div>
        <div>job_title: {appData.job_title}</div>
        <div>career_name: {appData.career_name}</div>
        <div>posting_url: {appData.posting_url}</div>
        <div>job_description: {appData.job_description}</div>
        <div>job_notes: {appData.job_notes}</div>
        <div>tags: {appData.tags}</div>
      </div>
    )
  );
}
