import { Outlet } from 'react-router-dom';

const ProjectWorkSpace = () => {





return(
<div className="project-WorkSpace workSpace-grid">

<div className="projectDetails">
    <h1> Basic Info</h1>
</div>
<div className="projectNotes">
    <h1>Notes</h1>
</div>

<div className="projectTaskList">
    <h1> Task List</h1>
</div>

<Outlet />
</div>
)

}

export default ProjectWorkSpace;