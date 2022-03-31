import { useState } from "react";
import { Link } from "react-router-dom";
import { newLogo } from "../images/imageIndex";



const NewProjectForm = ({ action }) => {

    const [newProject, setNewProject] = useState({});


    return (

        <div className="form-bg">
            <img src={newLogo} className="form-title" />

            <form className="form form-grid">
                <div className="column1">
                    <label>
                        <span> Name:</span>
                        <input type="text" />
                    </label>
                    <label>
                        <span>Deadline: </span>
                        <input type="Date" />
                    </label>
                    <label>
                        <p> Debut Con: </p><br />
                        <input type="text" />
                    </label>
                </div>
                <div className="column2">
                    <label>
                        <span> List of cosplay Components:</span><br />
                        <input type="radio" />
                        <input type="radio" />
                        <input type="radio" />
                    </label>
                </div>
                <button className="form-btn"> Submit </button>
            </form>

        </div>

    )


}

export default NewProjectForm;