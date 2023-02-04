import React, { useContext, useState } from "react";
import EditTask from "./EditTask";
import { TaskContext } from "../context/Task_Context";

const DisplaySingleTask = (item) => {
    //showedit flag to display edit input 
    const [showEdit, setShowEdit] = useState(false)

    //get task list from context
    const { task, setTask, completedTask, setCompletedTask } = useContext(TaskContext);

    // const task=JSON.parse(localStorage.getItem("task"));
    var TextStyle = item.item.state === "new" ? "default" : "line-through";
   

    //set flag to display edit input
    const handleEdit = (id) => {
        setShowEdit(true)
    }

    //set flag to remove edit input
    const handleCancleDelete = () => {
        setShowEdit(false)
    }

    //removes task from task list
    const handleDelete = (id) => {
        if (item.item.state === "new") {
            var newTaskList = task.filter((item) => item.id !== id)
            setTask(newTaskList)
        }
        else {
            var newCompletedTaskList = completedTask.filter((item) => item.id !== id)
            setCompletedTask(newCompletedTaskList)
        }

    }
    const handleComplete = (id) => {

     

        task.map((i) => {
            if (i.id === item.item.id) {
                TextStyle = item.item.state === "new" ? "overline" : "line-through"
                setCompletedTask([...completedTask, { ...i, state: "complete", id: i.id }])
            }


        })


        var newArray = task.filter((item) => item.id !== id)
        setTask(newArray)


    }



    return (

        <div >
            <div className="row">
                <div className="col-sm-4 col-md-7 col-lg-9" style={{ "textDecorationLine": TextStyle }}>{item.item.title}</div>
                <div className="col-sm-2 col-md-5 col-lg-3">
                    <div className="btn-group " role="group" aria-label="Basic outlined example">
                        <button type="button" className="btn btn-sm float-right btn-outline-dark">{item.item.DtTm}</button>
                        <button type="button" className="btn btn-sm float-right btn-outline-warning" onClick={() => { handleEdit(item.item) }} disabled={item.item.state === "new" ? false : true}><p className="bi bi-pencil"></p></button>
                        <button type="button" className="btn btn-sm float-right  btn-outline-success" onClick={() => handleComplete(item.item.id)} disabled={item.item.state === "new" ? false : true}><span className="bi-check2-circle"></span></button>
                        <button type="button" className="btn btn-sm float-right  btn-outline-danger" onClick={() => handleDelete(item.item.id)}><span className="bi bi-trash"></span></button>
                    </div>
                </div>
            </div>
            {
                showEdit && <EditTask item={item.item} handleCancleDelete={handleCancleDelete} />
            }


        </div>
    )
}

export default DisplaySingleTask;