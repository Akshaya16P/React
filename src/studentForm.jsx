import React from "react";
import { useState } from "react";

function StudentForm() {
  const [formData, setFormData] = useState({
    name: "",
    rollNo: "",
    location: "",
    age: "",
    branch: "",
    collegeName: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch("http://localhost:5000/api/students/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    });

    console.log("Form submitted", formData);
  };

  return (
    <form onSubmit={handleSubmit}>
        <label>Name:  </label>
      <input name="name" placeholder="Name" onChange={handleChange} /><br />
      <br />
      <br />
      <label>Roll No: </label>
      <input name="rollNo" placeholder="Roll No" onChange={handleChange} /><br />
      <br />
      <br />
      <label>Location: </label>
      <input name="location" placeholder="Location" onChange={handleChange} /><br />
      <br />
      <br />
        <label>Age: </label>
      <input name="age" placeholder="Age" onChange={handleChange} /><br />
      <br />
      <br />
      <label>Branch: </label>
      <input name="branch" placeholder="Branch" onChange={handleChange} /><br />
      <br />
      <br />
        <label>College: </label>
      <input name="collegeName" placeholder="College Name" onChange={handleChange} /><br /><br />
      <br />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default StudentForm;
