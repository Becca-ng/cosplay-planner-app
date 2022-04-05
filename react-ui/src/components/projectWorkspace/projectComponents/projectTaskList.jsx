import { plusIcon } from "../../../images/imageIndex"


const TaskList = () => {

    return (
        <div>
            <div className="taskTitle">
                <h1> Task List</h1>
            </div>

            <div className="addTask addTask-grid">

                <div className="customTask-area">
                    <input type="textArea"
                        textarea
                        rows="2"
                        cols="10"
                        placeholder="Add a task!"
                        className="customTask"
                    />
                </div>


                <div className="taskText-grid">
                    <p className="taskText"> or select a </p>
                </div>

                <div className="dropDown dropDown-grid">

                    <select id="preSet-tasks" name="presets" className="dropDown-content dropDown-options">
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
                        <img src={ plusIcon } className="plus"/>
                    </button>
                </div>

            </div>



            <div className="taskTabs-container taskTabs-area">               
            
            <div className="taskTab">
                   <div className="tabTextArea div1">
                   We demand an end to the glorification of the bear as 
                   nothing more than a vicious, smelly,
                    ill-tempered, big-headed stink machine.
                     I believe we all know what they do in the woods.
                   </div>
                   <div className="tabButtons div2">
                    <button> edit task </button>
                    <button> edit subtask </button>
                    <button> Task Completed!</button>
                   </div>
               </div>

            </div>

        </div>
    )
}

export default TaskList;