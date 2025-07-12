import React, { useState } from "react";
import "./Create.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateProject = () => {
  const [projectName, setProjectName] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    axios
      .post("https://ai-workshop-backend-t9na.onrender.com/projects/create", {
        projectName,
      })
      .then(() => {
        navigate("/");
      });
  }

  return (
    <main className="create-project">
      <section className="create-project-section">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="projectName"
            placeholder="Project Name"
            required
            onChange={(e) => setProjectName(e.target.value)}
            value={projectName}
          />

          <input type="submit" />
        </form>
      </section>
    </main>
  );
};

export default CreateProject;
