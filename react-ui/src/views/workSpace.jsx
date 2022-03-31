import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import NewProjectForm from '../components/newProjectForm';

const WorkSpace = () => {

    const isFormOpen = useSelector(state => state.form);
    


    return (
        <>

                <div className="workSpace">
                    <div>
                        {isFormOpen && <NewProjectForm />}
                    </div>
                    <Outlet />
                </div>




        </>

    )
}

export default WorkSpace;