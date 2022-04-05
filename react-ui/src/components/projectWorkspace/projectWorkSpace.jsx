import { Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Summary, Notes, TaskList } from "./projectComponents/projectIndex"

const ProjectWorkSpace = ({ setProjects, currentProject}) => {

    //Basically when current project comes in we need to populate all the data and information
    const handleSave = async e => {
        e.preventDefault()
        const form = e.target.form;

        let updateProject = {
            "username": currentProject.username,
            "projectId": currentProject.projectId,
            "project" : {
                "name": currentProject.project.name,
                "series" : currentProject.project.series,
                "startDate" : currentProject.project.startDate,
                "dueDate" : currentProject.project.dueDate,
                "debutCon" : currentProject.project.debutCon,
                "blurb" : currentProject.project.blurb,
                "tasks" : currentProject.project.tasks
            }
        }
        if(e.target.attributes.update.value == "summary"){
            updateProject.project.name = (form.projectName.value) ? form.projectName.value : currentProject.project.name
            updateProject.project.series = (form.projectSeries.value) ? form.projectSeries.value : currentProject.project.series
            updateProject.project.startDate = (form.startDate.value) ? form.startDate.value : currentProject.project.startDate
            updateProject.project.dueDate = (form.dueDate.value) ? form.dueDate.value : currentProject.project.dueDate
            updateProject.project.debutCon = (form.debutCon.value) ? form.debutCon.value : currentProject.project.debutCon
            await callAPI("PATCH", updateProject);
        } else if (e.target.attributes.update.value == "blurb") {
            updateProject.project.blurb = (form.blurb.value) ? form.blurb.value : currentProject.project.blurb
            await callAPI("PATCH", updateProject);
        }
        else {
            console.log("no updates")
        }
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
                <Notes handleSave={handleSave} project={currentProject}/>
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