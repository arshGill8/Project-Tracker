import { useState } from "react";

export default function TaskForm({ onCreate }) {
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
    <form
      className="flex justify-center text-center my-8 bg-blue-500 p-5 rounded "
      onSubmit={handleSubmit}
    >
      <label className="text-white text-sm font-bold mr-3" htmlFor="Enter Task">
        New Task{" "}
      </label>
      <input
        className=" focus:none px-3 py-2 rounded"
        onChange={handleChange}
        value={input}
        type="text"
        placeholder="Enter Task Here"
      />
      <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 ml-3 border border-black-400 rounded shadow ">
        Submit
      </button>
    </form>
  );
}
