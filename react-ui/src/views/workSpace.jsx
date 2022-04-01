import React from 'react';
import { useSelector } from 'react-redux';
import { ProjectSideBar, ProjectWorkSpace } from '../components/projectWorkspace/projectIndex';



const WorkSpace = () => {

    const isFormOpen = useSelector(state => state.form);



    return (
        <div className='project-grid'>
            <link href='https://fonts.googleapis.com/css?family=Gruppo' rel='stylesheet'></link>
            <ProjectSideBar />
            <ProjectWorkSpace />
        </div>

    )
}

export default WorkSpace;