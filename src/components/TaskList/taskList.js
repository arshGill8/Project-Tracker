import TaskShow from "../TaskShow/taskShow";

export default function TaskList({ jobs, jobChecked }) {
  const renderedJobs = jobs.map((job) => {
    return <TaskShow jobChecked={jobChecked} key={job.id} job={job} />;
  });

  return (
    <div className="bg-green-500 w-4/5 align-centre p-5 flex flex-col items-center">
      <h2>List of Current Jobs</h2>
      <ul className="w-3/4"> {renderedJobs}</ul>
    </div>
  );
}
