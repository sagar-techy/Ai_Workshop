import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);

  function navigateToProject(projectId) {
    navigate(`/project/${projectId}`);
  }

  useEffect(() => {
    axios
      .get("https://ai-workshop-backend-t9na.onrender.com/projects/get-all")
      .then((response) => {
        setProjects(response.data.data);
      });
  }, []);

  return (
    <main className="home">
      <section className="home-section">
        <button
          onClick={() => {
            navigate("/create-project");
          }}
        >
          new project
        </button>

        {projects.length == 0 ? (
          <div>
            {" "}
            <p>No projects created</p>{" "}
          </div>
        ) : (
          <div className="projects">
            {projects.map((project) => {
              return (
                <div
                  onClick={() => {
                    navigateToProject(project._id);
                  }}
                  className="project"
                >
                  {project.name}
                </div>
              );
            })}
          </div>
        )}
      </section>
    </main>
  );
};

export default Home;
