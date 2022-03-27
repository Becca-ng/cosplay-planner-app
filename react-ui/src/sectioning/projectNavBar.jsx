import { NavLink, Outlet } from 'react-router-dom';


const NavigationBar = () => {

    return (
        <div >
            <div className='profile'>
            </div>
            <button className="navBarBtn"> <NavLink to="/"> Log Out </NavLink></button>
            <button className="navBarBtn"><NavLink to="/projects/new"> Add new Project </NavLink> </button>
        </div>
    )

}
export default NavigationBar;