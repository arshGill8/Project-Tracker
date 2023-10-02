import { useEffect, useState } from "react";

export default function ProgressBar({ jobs }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const checkedJobs = jobs.filter((job) => job.isChecked);

    const checkedJobsPercentage = (checkedJobs.length / jobs.length) * 100 || 0;

    setProgress(checkedJobsPercentage);
  }, [jobs]);

  const progressPercentage = Math.floor(progress);

  return (
    <div>
      <progress max="100" value={progress} />
      <span>{progressPercentage}%</span>
    </div>
  );
}
