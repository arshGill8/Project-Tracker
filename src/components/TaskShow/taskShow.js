import { useState } from "react";

export default function TaskShow({ job, jobChecked }) {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckbox = () => {
    const newIsChecked = !isChecked;
    setIsChecked(newIsChecked);
    jobChecked(job.id, newIsChecked);
  };

  return (
    <li className=" flex gap-3 justify-center bg-white m-2 p-6 py-2 max-w-sm border-red-500 border rounded-lg shadow hover:bg-gray-100">
      <input
        className=""
        type="checkbox"
        checked={isChecked}
        value={isChecked}
        onChange={handleCheckbox}
        id={job.id}
      ></input>
      {}
      <p className="break-words w-full">
        {job.jobCount}. {job.jobName}
      </p>
      <div className="flex justify-center w-full">
        {isChecked ? <p children="">Job Completed</p> : ""}
      </div>
    </li>
  );
}
