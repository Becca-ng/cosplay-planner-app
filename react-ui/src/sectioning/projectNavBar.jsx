import { NavLink, Outlet , useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import NewProjectForm from "../components/newProjectForm";


const NavigationBar = () => {

const[showForm, setShowForm] = useState(false);

const formOpen = () => {
    setShowForm(!showForm)
}
    
    return (
        <div >
            <div className='profile'>
            </div>
            <button className="navBarBtn"> <NavLink to="/"> Log Out </NavLink></button>
            <NavLink to="new_project_form" ><button className="navBarBtn" onClick={formOpen}> Add new Project </button></NavLink>
        
        </div>
    )

}
export default NavigationBar;