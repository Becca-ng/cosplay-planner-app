import { useState } from "react";
import { Link   } from "react-router-dom";


const NewProjectForm = ({action}) => {

    const [newProject, setNewProject] = useState({});

    return (

        <div className ="form-bg">
            <span className="helper">
            <form className="form">
            <h1 className ="form-title"> New Project Form </h1>

                <label>
                    <span> Name:</span>
                    <input type="text" ></input>
                </label>
                <label>
                    <span>Deadline: </span>
                    <input type="Date" ></input>
                </label>
                <label>
                    <span> Debut Con: </span>
                    <input type="text" ></input>
                </label>
                <label>
                    <span> List of cosplay Components:</span>
                    <input type="radio"> Basic </input>
                    <input type="radio"> Detailed </input>
                    <input type="radio"> Custom </input>
                </label>
                <button className="form-btn"> Submit </button>
            </form>
            </span>
        </div>

    )


}

export default NewProjectForm;