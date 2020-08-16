import React, { useState } from 'react'

export default function AddTask({add}) {
  const [input, setInput]=useState("")

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!input.trim()) {
      return
    }
    add(input);
    setInput("");
  };
    return (
    <form className="form-inline">
    <div className="form-group mx-sm-3 mb-2">
      <label className="sr-only"></label>
      <input type="text" className="form-control"placeholder="task"  onChange={(e) => setInput(e.target.value)}
          value={input}/>
    </div>
    <button type="submit" className="btn btn-primary mb-2" onClick={handleSubmit}>Submit Task</button>
  </form>
    )
}
