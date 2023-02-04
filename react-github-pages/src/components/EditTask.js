//component for Edit existing task title

import React ,{useContext, useState} from "react";
import { TaskContext } from "../context/Task_Context";

const EditTask =({item,handleCancleDelete})=>{
    //newTask for new edited task
    const [newTask , setNewTask]=useState()

    //task-list from context
    const {task,setTask}=useContext(TaskContext);

    //edit existing task
    const handleSubmit = (e) => {
        if (e.key === 'Enter'|| e.key==='Tab' || e.type==='click') {
        setTask  (
        task.map((i)=>{
            if(i.id===item.id){
                return { ...i, title:newTask }
            }
            else{
                return i
            }
        })
        )
          handleCancleDelete()
        }
    }

    return(
        <div className="input-group">
        <input type="text" className="form-control" placeholder="Enter new task" onChange={(e)=>setNewTask(e.target.value)} onKeyDown={(e)=>{ handleSubmit(e)}}/>
        <span className="input-group-btn">
             <button className="btn btn-default btn-outline-success" type="button" id="SubmitButton" onClick={(e)=>{ handleSubmit(e)}}> <i className="bi-check2-circle"></i></button>
             <button className="btn btn-default btn-outline-danger" type="button" onClick={()=>handleCancleDelete()}> <i className="bi-x-circle"></i></button>

        </span>
        </div>
    )
}

export default EditTask