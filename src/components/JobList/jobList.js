import JobShow from "../JobShow/jobShow";

export default function JobList({ jobs }) {
  const renderedJobs = jobs.map((job) => {
    return <JobShow key={job.id} job={job} />;
  });

  return (
    <div>
      <h2>List of Current Jobs</h2>
      <ul> {renderedJobs}</ul>
    </div>
  );
}
