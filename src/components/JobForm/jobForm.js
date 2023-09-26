import { useState } from "react";

export default function JobForm({ onCreate }) {
  const [input, setInput] = useState("");

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onCreate(input);
    setInput("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Enter new job</h1>
        <label>New Job: </label>
        <input onChange={handleChange} value={input} />
        <button>Submit</button>
      </form>
    </div>
  );
}
