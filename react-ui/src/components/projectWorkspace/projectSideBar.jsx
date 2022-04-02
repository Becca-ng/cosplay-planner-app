import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { logoTest, plusIcon } from "../../images/imageIndex";

const ProjectSideBar = () => {

  const [projects, setProjects] = useState();

  useEffect(() => {
    fetch('http://localhost:8080/api/projects')
    .then(res => res.json())
    .then(data => setProjects(data));
  }, []);

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
                        <input className="createInput" type="text" placeholder="What are you making?" />
                    </div>
                    <div className="createDiv2">
                        <button className="navBarBtn createBtn"> Create! </button>
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