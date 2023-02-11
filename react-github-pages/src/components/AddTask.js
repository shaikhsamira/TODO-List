import React, { useContext, useState } from 'react';
import { TodoListContext } from '../context/TaskDatacontext';

const AddTask = () => {

    //  userinput states for newinput from user
    const [userInput, setUserInput] = useState('');

    //set newTask in userInput to later add it in task list 
    const handleOnChange = (ip) => {
        setUserInput(ip)

    }

    //Getting add function and setMsg for alert  from context
    const {  addTodoItem,  setAlert ,sortItems} = useContext(TodoListContext);

    //calls addTodoItem function 
    const handleSubmit = (e) => {
        if (e.key === 'Enter' || e.key === 'Tab' || e.type === 'click') {
            e.preventDefault()
            addTodoItem(userInput);
            sortItems(1)
            setUserInput('')
            setAlert('Task Added Successfully');
            
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