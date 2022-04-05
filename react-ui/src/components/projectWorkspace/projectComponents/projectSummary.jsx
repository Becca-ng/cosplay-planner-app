const Summary = ({project}) => {

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
                            <input type="text" id="projectName" className="summaryInput" value={project && project.project.name}/>
                        </label>
                    </div>
                    <div className="sumSeries">
                        <label for="projectSeries" className="summaryLabel">
                            Series:
                            <input type="text" id="projectSeries" className="summaryInput" value={project && project.project.series}/>
                        </label>
                    </div>
                    <div className="sumDate">
                        <label for="startDate" className="summaryLabel ">
                            Start Date:
                            <input type="date" id="startDate" className="summaryInput" value={project && project.project.startDate}/>
                        </label>
                    </div>
                    <div className="sumDueDate">
                        <label for="dueDate" className="summaryLabel ">
                            Deadline:
                            <input type="date" id="dueDate" className="summaryInput" value={project && project.project.dueDate}/>
                        </label>
                    </div>
                    <div className="sumCon">
                        <label for="debutCon" className="summaryLabel ">
                            Debut Convention:
                            <input type="text" id="debutCon" className="summaryInput" value={project && project.project.debutCon}/>
                        </label>
                    </div>
                    
                </form>
            </div>
            <div className="sumButt sumButt-container">
            <button> Save! </button>
            <button> Edit! </button>
            </div>
        </div>
    )

}

export default Summary;