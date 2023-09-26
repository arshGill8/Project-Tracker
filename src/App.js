import { useState } from "react";
import { nanoid } from "nanoid";
import Form from "./components/JobForm/jobForm";
import List from "./components/JobList/jobList";

export default function App() {
  const [jobs, setJob] = useState([]);

  const createJob = (newJob) => {
    const updatedJobs = [...jobs, { id: nanoid(), jobName: newJob }];
    setJob(updatedJobs);
  };

  return (
    <>
      <Form onCreate={createJob} />
      <List jobs={jobs} />
    </>
  );
}
