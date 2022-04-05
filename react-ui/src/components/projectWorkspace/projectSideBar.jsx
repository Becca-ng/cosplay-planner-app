import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { logoTest, plusIcon } from "../../images/imageIndex";

const ProjectSideBar = ({ projects, setProjects, setCurrentProject }) => {

  const [newProjectName, setNewProjectName] = useState('');
  const username = sessionStorage.getItem('user');

  useEffect(() => {
    console.log(sessionStorage.getItem('user'));
    console.log(sessionStorage.getItem('token'));

    const body = {
      'username': username
    }

    callAPI("POST", body);
  }, []);

  const callAPI = async (method, body) => {
    console.log("API Call Body: " + JSON.stringify(body))
    const requestOptions = {
      method: method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    };

    console.log(requestOptions);
    console.log(PROJECTS_API_URL)

    try {
      await fetch(PROJECTS_API_URL, requestOptions)
        .then(res => res.json())
        .then((data) => {
          switch(method){
            case "POST":
              setProjects(data.body);
              break;
            default:
              console.log(data);
          }
        })
    } catch (e) {
      console.log("error" + e);
      throw e;
    }
  }

  const handleChange = e => {
    setNewProjectName(e.target.value);
  };

  const handleCreate = async e => {
    const newProject = createEmptyProject(projects.length);
    await callAPI("PATCH", newProject.body);
    setProjects([...projects, newProject.project]);
    setNewProjectName('');
  };

  const handleDelete = async e => {
    const index = e.target.attributes.index.value;
    let body = {
      username: username.toUpperCase(),
      index: index
    }

    const response = await callAPI("DELETE", body);
    console.log(response)

    projects.splice(index,1);
  }

  const handleSelect = e => {
    /**
     * grab the index from the event
     * This will be the index of the project that was selected
     */
    setCurrentProject(projects[e.target.attributes.index.value])
  }

  const createEmptyProject = (index) => {

    let today = new Date();

    let body = {
      "index": index,
      "username": username,
      "project": {
        "name": newProjectName,
        "series": 'Fill in where your character is from!',
        "blurb": 'Write anything you want!',
        "startDate": today.toISOString().split('T')[0],
        "dueDate": today.toISOString().split('T')[0],
        "debutCon": 'Where do you want to debut this cosplay?',
        "tasks":[]
      }
    }

    let project = {
      "projectId": createId(index),
      "username": username.toUpperCase(),
      "project": {
        "name": newProjectName,
        "series": 'Fill in where your character is from!',
        "blurb": 'Write anything you want!',
        "startDate": today.toISOString().split('T')[0],
        "dueDate": today.toISOString().split('T')[0],
        "debutCon": 'Where do you want to debut this cosplay?',
        "tasks":[]
      }
    }

    return {
      body,
      project
    }
  }

  const createId = (index) => {
    let leadingZeroIndex = ('00' + index).slice(-2);
    return (`${username.toUpperCase()}-${leadingZeroIndex}`)
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
                <li key={index} index={index} onClick={handleSelect}>
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