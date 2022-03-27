import { useState } from "react";


const NewProjectForm = () => {

    const [newProject, setNewProject] = useState({});


    return (
        <div>
            <form>
                <label>
                    <span> Name:</span>
                    <input type="text" />
                </label>
                <label>
                    <span>Deadline: </span>
                    <input type="Date" />
                </label>
                <label>
                    <span> Debut Con: </span>
                    <input type="text" />
                </label>
                <label>
                    <span> List of cosplay Components:</span>
                    <input type="radio"> Basic </input>
                    <input type="radio"> Detailed </input>
                    <input type="radio"> Custom </input>
                </label>
                <button> Submit </button>
            </form>
        </div>

    )


}

export default NewProjectForm;