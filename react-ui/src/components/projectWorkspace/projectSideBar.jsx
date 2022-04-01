import { NavLink } from "react-router-dom";
import { logoTest, plusIcon } from "../../images/imageIndex";

const ProjectSideBar = () => {


    return (
        <div className="sideNavBar sideBar-grid">
            <div className="logoContainer">
                <img className="logo" src={logoTest} />
                <button className="navBarBtn logOutBtn">
                    <NavLink to="/"> Log Out </NavLink>
                </button>
            </div>

            <div className="navBtnContainer">



                <div className="createContainer">
                    <div className="createDiv1">
                        <input className="createInput" type="text" placeholder="What are you making?" />
                    </div>
                    <div className="createDiv2">
                        <button className="navBarBtn createBtn"> Create! </button>
                    </div>
                </div>

            </div>


            <div className="newProjectContainer newProjectScroll">
                <div className="projectTabs">  MOCK PROJECT </div>
                
            </div>

        </div>
    )
}

export default ProjectSideBar;