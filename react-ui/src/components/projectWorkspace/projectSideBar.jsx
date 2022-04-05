import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { logoTest, plusIcon } from "../../images/imageIndex";

const ProjectSideBar = ({projects, setProjects, setCurrentProject}) => {

    const [newProjectName, setNewProjectName] = useState('');

    useEffect(() => {
      console.log(sessionStorage.getItem('user'));
      console.log(sessionStorage.getItem('token'));
        
      const body = {
        'username' : sessionStorage.getItem('user')
      }

      // const returnedProjects = await callAPI("POST", body);

      fetch('http://localhost:8080/api/projects')
        .then(res => res.json())
        .then(data => setProjects(data));
    }, []);

    const callAPI = async (method, body) => {
      console.log("API Call Body: " + body)
      const requestOptions = {
        method: method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      };

      console.log(requestOptions);
      console.log(PROJECTS_API_URL)
  
      try{
        await fetch(PROJECTS_API_URL, requestOptions)
          .then(res => res.json())
          .then((data) => {
            setProjects(data.body.Items);
          })
      }catch(e){
        console.log("error" + e);
        throw e;
      }
    }
  
    const handleChange = e => {
      setNewProjectName(e.target.value);
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
        console.log(projects[e.target.attributes.index.value])

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

//https://stackoverflow.com/questions/43871637/no-access-control-allow-origin-header-is-present-on-the-requested-resource-whe
const PROJECTS_API_URL = 'https://fast-tor-11029.herokuapp.com/https://3uck5y4t5g.execute-api.us-east-1.amazonaws.com/live/projects';

    /**
      POST to the Projects endpoint takes in
        body: {
          username: "a username"
        }

        return: {
          statusCode: 200/400,
          body: {
            Items: [a List of Projects]
          }
        }

      DELETE to the Projects endpoint takes in
        body: {
          username: "a username",
          index: 3
        }

        return: {
          statusCode: 200/400,
          body: "Project successfully deleted!"
        }

      PATCH to the Projects endpoint takes in
        body: {
          username: "a username",
          index: 4,
          project: {
            name: "a name"
            ...
          }
        }

        return: {
          statusCode: 200/400,
          body: "Project updated successfully!"
        }
    */