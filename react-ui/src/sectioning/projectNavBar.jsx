import { NavLink, Outlet , useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setIsFormOpen } from '../redux/actions';
import NewProjectForm from "../components/newProjectForm";


const NavigationBar = () => {

const dispatch = useDispatch();
const isFormOpen = useSelector(state => state.form)
// this is what maps it to the action redux thing

// const[showForm, setShowForm] = useState(false);

const formOpen = () => {
    dispatch(setIsFormOpen(isFormOpen))
}
    
    return (
        <>
            <div className='profile'/>
    
            <button className="navBarBtn"> <NavLink to="/"> Log Out </NavLink></button>
           <button className="navBarBtn" onClick={formOpen}> Add new Project </button>
    
        </>
    )

}
export default NavigationBar;