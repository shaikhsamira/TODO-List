import React, { useContext, useState } from 'react';
import { TaskContext } from '../context/Task_Context';

const AddTask = () => {

    // //task and userinput states for storing task-list and newinput from user
    const { task, setTask } = useContext(TaskContext);

    const [userInput, setUserInput] = useState('');

    //set newTask in userInput to later add it in task list 
    const handleOnChange = (ip) => {
        setUserInput(ip)

    }

    var Dt
    //add new task in task list
    const handleSubmit = (e) => {
        if (e.key === 'Enter' || e.key === 'Tab' || e.type === 'click') {
            e.preventDefault()
            var currentDate = new Date();
            Dt = currentDate.toString().substring(0, 15)


            setTask([...task, {
                "id": task.length + 1, "title": userInput,
                "DtTm": Dt,
                "state": "new"
            }])
            setUserInput('')


        }
    }




    return (
        <>
            <h5 className="card-title" >To Do gives you focus, from work to play. Get started</h5>
            <input type="text" className="form-control mb-2 mr-sm-2" id="taskInput" value={userInput} onChange={(e) => handleOnChange(e.target.value)} placeholder="Enter task..." onKeyDown={(e) => handleSubmit(e)} />
            <button className="btn btn-primary mb-2" id="submitBtn" onClick={(e) => { handleSubmit(e) }} >Add</button>

        </>
    )
}

export default AddTask;