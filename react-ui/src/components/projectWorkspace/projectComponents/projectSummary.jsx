import { Action } from "history";
import { useState } from "react";


const Summary = ({action}) => {

    const [ projectDetails , setProjectDetails ] = useState({});

    const handleChange = e => {
        const key = e.target.dataset.keyname;
        const value =e.target.value;
        const updatedDetail = {...projectDetails};
        updatedDetail[key] = value;
        setProjectDetails(updatedDetail)
        console.log(value)
    };

    const handleSave = e =>{
        e.preventDefault();
        action(projectDetails);
        setProjectDetails({});
    }


    return (
        <div className="summary-grid">
            <div className="summaryTitle">
                <h1> Project Details</h1>
            </div>
            <div className="summaryForm form-grid">
                <form onSubmit={handleSave} >
                    <div className="sumName">
                        <label for="projectName" className="summaryLabel">
                            Name:
                            <input type="text" data-keyname="name" value={projectDetails.projectName || ''} className="summaryInput" />
                        </label>
                    </div>
                    <div className="sumSeries">
                        <label for="projectSeries" className="summaryLabel">
                            Series:
                            <input type="text" 
                            data-keyname="projectSeries" 
                            value={projectDetails.projectSeries || ''} 
                            className="summaryInput" />
                        </label>
                    </div>
                    <div className="sumDate">
                        <label for="startDate" className="summaryLabel ">
                            Start Date:
                            <input 
                            type="date" 
                            data-keyname="startDate" 
                            value={projectDetails.startDate || ''} 
                            className="summaryInput" />
                        </label>
                    </div>
                    <div className="sumDueDate">
                        <label for="dueDate" className="summaryLabel ">
                            Deadline:
                            <input 
                            type="date" 
                            data-keyname="dueDate" 
                            value={projectDetails.dueDate || ''} 
                            className="summaryInput" />
                        </label>
                    </div>
                    <div className="sumCon">
                        <label for="debutCon" className="summaryLabel ">
                            Debut Convention:
                            <input 
                            type="text" 
                            data-keyname="debutCon" 
                            value={projectDetails.debutCon || ''} 
                            className="summaryInput" />
                        </label>
                    </div>
                    
                </form>
            </div>
            <div className="sumButt-container">
            <button className="sumButt" type="submit"> Save! </button>
            {/* <button className="sumButt"> Edit! </button> */}
            </div>
        </div>
    )

}

export default Summary;