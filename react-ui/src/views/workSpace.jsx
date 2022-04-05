import {useState, React} from 'react';
import { useSelector } from 'react-redux';
import { ProjectSideBar, ProjectWorkSpace } from '../components/projectWorkspace/projectIndex';




const WorkSpace = () => {

    //We need to introduce the idea of a currentProject at this level since the Sidebar and the Workspace need to communicate
    const [currentProject, setCurrentProject] = useState();
    const [projects, setProjects] = useState();


    return (
        <div className='project-grid'>
            <link href='https://fonts.googleapis.com/css?family=Gruppo' rel='stylesheet'></link>
            <ProjectSideBar projects={projects} setProjects={setProjects} setCurrentProject={setCurrentProject} />
            <ProjectWorkSpace setProjects={setProjects} currentProject={currentProject} />
        </div>

    )
}

export default WorkSpace;