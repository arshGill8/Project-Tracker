import { useState } from "react";
import { nanoid } from "nanoid";
import TaskForm from "./components/TaskForm/taskForm";
import TaskList from "./components/TaskList/taskList";
import Header from "./components/Header";
import ProgressBar from "./components/ProgressBar";

export default function App() {
  const [jobs, setJob] = useState([]);

  const createJob = (newJob) => {
    const updatedJobs = [
      ...jobs,
      {
        id: nanoid(),
        jobName: newJob,
        jobCount: jobs.length + 1,
        isChecked: false,
      },
    ];
    setJob(updatedJobs);
  };

  // const jobDelete = (id) => {
  //   let completedJob = jobs.filter((job) => job.id === id);
  // };

  const jobChecked = (jobId, isChecked) => {
    const updatedJobs = jobs.map((job) => {
      if (job.id === jobId) {
        return { ...job, isChecked: isChecked };
      }
      return job;
    });
    setJob(updatedJobs);
  };

  return (
    <div className="bg-gray-500 h-screen w-screen">
      <Header />
      <TaskForm onCreate={createJob} />
      <div className="flex justify-between gap-11">
        <TaskList jobChecked={jobChecked} jobs={jobs} />
        <ProgressBar jobChecked={jobChecked} jobs={jobs} />
      </div>
    </div>
  );
}
