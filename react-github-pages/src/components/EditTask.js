//component for Edit existing task title

import React, { useContext, useState } from "react";
import { TodoListContext } from "../context/TaskDatacontext"

const EditTask = ({ item, handleCancleDelete }) => {
    //newTask for new edited task
    const [editedTask, setNewTask] = useState()

    //getting edit funct from context
    const { editTodoItem } = useContext(TodoListContext);

    //call edit func
    const handleSubmit = (e) => {
        if (e.key === 'Enter' || e.key === 'Tab' || e.type === 'click') {
            editTodoItem(item.id, editedTask);
            //to remove input box from view
            handleCancleDelete()
        }

    }

    return (
        <div className="input-group">
            <input type="text" className="form-control" placeholder="Enter new task" onChange={(e) => setNewTask(e.target.value)} onKeyDown={(e) => { handleSubmit(e) }} />
            <span className="input-group-btn">
                <button className="btn btn-default btn-outline-success" type="button" id="SubmitButton" onClick={(e) => { handleSubmit(e) }}> <i className="bi-check2-circle"></i></button>
                <button className="btn btn-default btn-outline-danger" type="button" onClick={() => handleCancleDelete()}> <i className="bi-x-circle"></i></button>

            </span>
        </div>
    )
}

export default EditTask