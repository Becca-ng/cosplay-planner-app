import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { logoTest, plusIcon } from "../../images/imageIndex";

const ProjectSideBar = ({projects, setProjects, setCurrentProject}) => {

    const [newProjectName, setNewProjectName] = useState('');
  
    //You'd replace this URL with the one from the API Gateway
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
  
    const handleCreate = e => {
    //   fetch('http://localhost:8080/api/projects', requestOptions)
    //   .then(res => res.json())
    //   .then(data => setProjects([...projects, data.data]));

        console.log(newProjectName)
        let newProject = {
            "project": {
                "name": newProjectName
            }
        }
        setProjects([...projects, newProject])
    };

    const handleDelete = e => {
        //This will need to call to the API to delete
        console.log(e.target)
        console.log(e.target.attributes.index.value)

        //Take the existing list of projects and remove the project from it with splice. We can access the index by doing e.target.index or something (it's set on the html button element)
        //Then do setProjects to the new projects with the item removed
    }

    const handleSelect = e => {
        /**
         * grab the index from the event
         * This will be the index of the project that was selected
         * 
         * you can grab that project with project[e.key] or something
         * Then you can populate the Basic info/Notes/Task List data with the project information
         */

        //This is coming from the parent component that contains both the sidebar and the workspace

        //setCurrentProject(projects[e.target.attributes.key.value])
    }

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
                        type="text" 
                        placeholder="What are you making?"
                        onChange={handleChange}
                        value={newProjectName} 
                        />
                    </div>
                    <div className="createDiv2">
                        <button className="navBarBtn createBtn" onClick={handleCreate}> Create! </button>
                    </div>
                </div>
            </div>


            <div className="newProjectContainer">
            <ul>
                {projects && (
                  projects.map((project, index) => {
                    return (

                        //TODO you should style this to look a bit nicer
                      <li key={index} onClick={handleSelect}>
                        {project.project.name}
                        <button onClick={handleDelete} index={index}> Delete</button>
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