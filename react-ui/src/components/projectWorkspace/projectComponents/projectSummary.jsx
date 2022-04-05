const Summary = ({project, handleSave}) => {

    return (
        <div className="summary-grid">
            <div className="summaryTitle">
                <h1> Project Details</h1>
            </div>
            <div className="summaryForm form-grid">
                <form>
                    <div className="sumName">
                        <label for="projectName" className="summaryLabel">
                            Name:
                            <input type="text" id="projectName" className="summaryInput" placeholder={project && project.project.name}/>
                        </label>
                    </div>
                    <div className="sumSeries">
                        <label for="projectSeries" className="summaryLabel">
                            Series:
                            <input type="text" id="projectSeries" className="summaryInput" placeholder={project && project.project.series}/>
                        </label>
                    </div>
                    <div className="sumDate">
                        <label for="startDate" className="summaryLabel ">
                            Start Date:
                            <input type="date" id="startDate" className="summaryInput" placeholder={project && project.project.startDate}/>
                        </label>
                    </div>
                    <div className="sumDueDate">
                        <label for="dueDate" className="summaryLabel ">
                            Deadline:
                            <input type="date" id="dueDate" className="summaryInput" placeholder={project && project.project.dueDate}/>
                        </label>
                    </div>
                    <div className="sumCon">
                        <label for="debutCon" className="summaryLabel ">
                            Debut Convention:
                            <input type="text" id="debutCon" className="summaryInput" placeholder={project && project.project.debutCon}/>
                        </label>
                    </div>
                    <div className="sumButt-container">
                    <button className="sumButt" type="submit" update="summary" onClick={handleSave}> Save! </button> 
                    </div>
                </form>
            </div>

        </div>
    )

}

export default Summary;