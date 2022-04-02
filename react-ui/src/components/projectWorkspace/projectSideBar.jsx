import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { logoTest, plusIcon } from "../../images/imageIndex";

const ProjectSideBar = () => {

  const [projects, setProjects] = useState();
  const [newProjectName, setNewProjectName] = useState('');

  useEffect(() => {
    fetch('http://localhost:8080/api/projects')
    .then(res => res.json())
    .then(data => setProjects(data));
  }, []);

  const handleChange = e => {
    setNewProjectName(e.target.value);
  };

  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({newProjectName})
  };

  const handleClick = () => {
    fetch('http://localhost:8080/api/projects', requestOptions)
    .then(res => res.json())
    .then(data => setProjects([...projects, data.data]));
  };

    return (
        <div className="sideNavBar sideBar-grid">


            <div className="logoContainer">
                <img className="logo" src={logoTest} />
                <button className="navBarBtn logOutBtn">
                    <NavLink to="/"> Log Out </NavLink>
                </button>
            </div>

            <div className="navBtnContainer">
                <div className="createContainer">
                    <div className="createDiv1">
                        <input
                          className="createInput"
                          onChange={handleChange}
                          placeholder="What are you making?"
                          type="text"
                          value={newProjectName}
                        />
                    </div>
                    <div className="createDiv2">
                        <button className="navBarBtn createBtn" onClick={handleClick}> Create! </button>
                    </div>
                </div>
            </div>


            <div className="newProjectContainer">
              <ul>
                {projects && (
                  projects.map((project, index) => {
                    return (
                      <li key={index}>
                        {project}
                      </li>
                    )
                  })
                )}
              </ul>
            </div>
        </div>
    )
}

export default ProjectSideBar;