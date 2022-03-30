import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const WorkSpace = () => {

    


    return (
        <>

                <div className="workSpace">
                    <div>
                        {/* <NewProjectForm /> */}
                    </div>
                    <Outlet />
                </div>




        </>

    )
}

export default WorkSpace;