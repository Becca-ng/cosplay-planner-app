const TaskList = () => {

    return (
        <div>
            <div className="taskTitle">
                <h1> Task List</h1>
            </div>
            <div className="addTask">
               
                    <input type="textArea"
                        textarea rows="4"
                        cols="50"
                        placeholder="Add a task!"/>
           
            </div>
            <div className="taskTabs">
                <h1> Task List</h1>
            </div>

        </div>
    )
}

export default TaskList;