import { useState } from "react";
import { plusIcon, checkIcon , editIcon } from "../../../images/imageIndex"
import React from "react";

const TaskList = () => {

    const [tasks, setTasks] = useState([]);

    const addTask = e => {
        e.preventDefault();
        let newTask = {
            name: (e.target.form.taskName.value) ? e.target.form.taskName.value : e.target.form.preSetTasks.value
        }
        setTasks([...tasks,newTask]);
    }

    return (
        <div>
            <div className="taskTitle">
                <h1> Task List</h1>
            </div>

            <form className="addTask addTask-grid">
                
                <div className="customTask-area">
                    <input type="textArea"
                        textarea
                        rows="2"
                        cols="10"
                        placeholder="Add a task!"
                        className="customTask"
                        id="taskName"
                    />
                </div>


                <div className="taskText-grid">
                    <p className="taskText"> or select a </p>
                </div>

                <div className="dropDown dropDown-grid">

                    <select id="preSetTasks" name="presets" className="dropDown-content dropDown-options">
                        <option className="dropDown-title">
                            pre-made task
                        </option>
                        <option value="armor">Armor</option>
                        <option value="bottom">Bottom</option>
                        <option value="cape">Cape</option>
                        <option value="dress">Helmet</option>
                        <option value="gloves">Gloves</option>
                        <option value="hat">Hat</option>
                        <option value="helmet">Helmet</option>
                        <option value="makeup">Makeup</option>
                        <option value="mask">Mask</option>
                        <option value="prop">Prop</option>
                        <option value="shoes">Shoes</option>
                        <option value="top">Top</option>
                        <option value="wig">Wig</option>
                    </select>
                </div>

                <div className="taskAddBtn-grid">
                    <button className="taskAddButton">
                        {/* <img alt="Submit Form" src={plusIcon} onClick={addTask} className="plus" /> */}
                        <input type="image" src={plusIcon} onClick={addTask} className="plus" alt="Submit Form" />
                    </button>
                </div>
            </form>

            <div className="taskTabs-container taskTabs-area">
            {tasks && (
            tasks.map((task, index) => {
              return (
                <div className="taskTab">
                    <div className="tabTextArea div1">
                        {task.name}
                    </div>

                    {/* <div className="tabButtons div2"> */}
                        {/* <button className="tabButt">
                            <img src={plusIcon} className="tabIcon" />
                        </button> */}
                        {/* <button className="tabButt">
                            <img src={editIcon} className="tabIcon" />

                        </button> */}
                        {/* <button className="tabButt">
                            <img src={checkIcon} className="tabIcon" />
                        </button> */}
                    {/* </div> */}
                </div>
              )
            })
          )}
            </div>

        </div>
    )
}

export default TaskList;