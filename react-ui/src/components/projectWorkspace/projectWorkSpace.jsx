import { Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Summary, Notes, TaskList } from "./projectComponents/projectIndex"

const ProjectWorkSpace = ({ setProjects, currentProject}) => {

    //Basically when current project comes in we need to populate all the data and information
    const handleSave = async e => {
        await callAPI("PATCH", currentProject);
        //this also technically needs to modify the list of Projects so I might move that to the parent was well
    }

    const callAPI = async (method, body) => {
        console.log("API Call Body: " + JSON.stringify(body))
        const requestOptions = {
          method: method,
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body)
        };
    
        console.log(requestOptions);
        console.log(PROJECTS_API_URL);
    
        try {
          await fetch(PROJECTS_API_URL, requestOptions)
            .then(res => res.json())
            .then((data) => {
              console.log(data)
            })
        } catch (e) {
          console.log("error" + e);
          throw e;
        }
      }

    return (
        <div className="project-WorkSpace workSpace-grid">

            <div className="projectDetails details-grid">
                <Summary handleSave={handleSave} project={currentProject}/>
            </div>
            <div className="projectNotes notes-grid">
                <Notes project={currentProject}/>
            </div>

            <div className="projectTaskList taskList-grid">
                <TaskList />
            </div>

            <Outlet />
        </div>
    )

}

export default ProjectWorkSpace;

//https://stackoverflow.com/questions/43871637/no-access-control-allow-origin-header-is-present-on-the-requested-resource-whe
const PROJECTS_API_URL = 'https://fast-tor-11029.herokuapp.com/https://3uck5y4t5g.execute-api.us-east-1.amazonaws.com/live/projects';