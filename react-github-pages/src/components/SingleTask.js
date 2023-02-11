import React, { useContext, useState } from "react";
import EditTask from "./EditTask";
import { TodoListContext } from "../context/TaskDatacontext";

const SingleTask = (item) => {
   
    //showedit flag to display edit input 
    const [showEdit, setShowEdit] = useState(false)

    var TextStyle = item.item.state === "new" ? "default" : "line-through";

    //getting data and func from context
    const { removeTodoItem, markAsCompleted,  setAlert } = useContext(TodoListContext);


    //set flag to display edit input
    const handleEdit = (id) => {
        setShowEdit(true)
    }

    //set flag to remove edit input
    const handleCancleDelete = () => {
        setAlert('Task Updated Successfully');
        setShowEdit(false)
    }

    //removes task from task list
    const handleDelete = (id) => {
        removeTodoItem(id);
        setAlert('Task Removed Successfully');
        
    }

    //mark task as complete a
    const handleComplete = (id) => {
        TextStyle = item.item.state === "new" ? "overline" : "line-through"
        markAsCompleted(id);
        setAlert('Task completed Successfully');
    }



    return (

        <div >
            <div className="row">
                <div className="col-sm-4 col-md-7 col-lg-9" style={{ "textDecorationLine": TextStyle }}>{item.item.title}</div>
                <div className="col-sm-2 col-md-5 col-lg-3">
                    <div className="btn-group  " role="group" aria-label="Basic outlined example">
                        <button type="button" className="btn btn-sm float-right btn-outline-dark">{item.item.DtTm}</button>
                        <button type="button" className="btn btn-sm float-right btn-outline-warning" onClick={() => { handleEdit(item.item) }} disabled={item.item.state === "new" ? false : true}><p className="bi bi-pencil"></p></button>
                        <button type="button" className="btn btn-sm float-right  btn-outline-success" onClick={() => handleComplete(item.item.id)} disabled={item.item.state === "new" ? false : true}><span className="bi-check2-circle"></span></button>
                        <button type="button" className="btn btn-sm float-right  btn-outline-danger" onClick={() => handleDelete(item.item.id)}><span className="bi bi-trash"></span></button>
                    </div>
                </div>
            </div>
            {
                showEdit && <EditTask item={item.item} handleCancleDelete={handleCancleDelete}  />
            }


        </div>
    )
}

export default SingleTask;