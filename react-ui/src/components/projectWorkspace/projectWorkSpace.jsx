import { Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Summary, Notes, TaskList } from "./projectComponents/projectIndex"

const ProjectWorkSpace = ({ setProjects, currentProject}) => {

    //Basically when current project comes in we need to populate all the data and information
    const handleSave = e => {
        //So this will make an API call that will save the data, 
        //this also technically needs to modify the list of Projects so I might move that to the parent was well
    }

    const [fields, setFields] = useState([]);

    const handleSubmit = contactFields => {
        const updatedDetails = [...fields, contactFields];
        setFields(updatedDetails);
      };
    
    return (
        <div className="project-WorkSpace workSpace-grid">

            <div className="projectDetails details-grid">

                <Summary action={handleSubmit}/>
            </div>
            <div className="projectNotes notes-grid">
                <Notes />
            </div>

            <div className="projectTaskList taskList-grid">
                <TaskList />
            </div>

            <Outlet />
        </div>
    )

}

export default ProjectWorkSpace;