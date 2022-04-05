import { Outlet } from 'react-router-dom';
import { Summary, Notes, TaskList } from "./projectComponents/projectIndex"

const ProjectWorkSpace = ({ setProjects, currentProject }) => {

    //Basically when current project comes in we need to populate all the data and information
    const handleSave = e => {
        //So this will make an API call that will save the data, 
        //this also technically needs to modify the list of Projects so I might move that to the parent was well
    }

    return (
        <div className="project-WorkSpace workSpace-grid">

            <div className="projectDetails details-grid">

                <Summary />
            </div>
            <div className="projectNotes notes-grid">
                <h1>Notes</h1>
            </div>

            <div className="projectTaskList taskList-grid">
                <TaskList />
            </div>

            <Outlet />
        </div>
    )

}

export default ProjectWorkSpace;