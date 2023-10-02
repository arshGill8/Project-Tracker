import { useEffect, useState } from "react";

export default function ProgressBar({ jobs, jobChecked }) {
  const [progress, setProgress] = useState(0);

  // Calculate the maximum value of the progress bar based on the number of jobs
  // const maxProgressBarValue = (jobs.length / 5) * 100;
  const maxProgressBarValue = jobs.length > 0 ? jobs.length : 1;

  useEffect(() => {
    // Calculate the count of checked jobs
    const checkedCount = jobs.reduce((acc, job) => {
      return job.isChecked ? acc + 1 : acc;
    }, 0);

    const checkedJobsPercentage = (checkedCount / maxProgressBarValue) * 100;
    setProgress(checkedJobsPercentage);
  }, [jobs]);

  const progressPercentage = Math.floor(progress);

  //   const countWidth = (checkedCount / 5) * 100;
  //   setProgress(countWidth);
  // }, [jobs]);

  // let progressPercentage = maxProgressBarValue
  //   ? Math.floor((progress / maxProgressBarValue) * 100)
  //   : 0;

  return (
    <div>
      <progress max="100" value={progress} />
      <span>{progressPercentage}%</span>
    </div>
  );
}
