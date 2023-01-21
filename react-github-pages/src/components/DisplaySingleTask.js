import React,{useContext,useState}  from "react";
import EditTask from "./EditTask";
import { TaskContext } from "../Task_Context";

const DisplaySingleTask =(item)=>{
    //showedit flag to display edit input 
    const [showEdit, setShowEdit]= useState(false)

    //get task list from context
    const {task,setTask}= useContext(TaskContext);

    //set flag to display edit input
     const handleEdit =(id)=>{
      setShowEdit(true)
    }

    //set flag to remove edit input
    const handleCancleDelete=()=>{
        setShowEdit(false)
    }

    //removes task from task list
    const handleDelete = (id) => {
          var newArray=task.filter((item) => item.id !== id) 
             setTask(newArray) ;     
          }


    return(
                            
                        <div >
                            <div className="row">
                            <div className="col-sm-4 col-md-7 col-lg-9">{item.item.title}</div>
                            <div className="col-sm-2 col-md-5 col-lg-3">
                            <div className="btn-group " role="group" aria-label="Basic outlined example">
                                <button type="button" className="btn btn-sm float-right btn-outline-dark">{item.item.DtTm}</button>
                                <button type="button" className="btn btn-sm float-right btn-outline-warning" onClick={()=>{handleEdit(item.item)}}><p className="bi-pencil"></p></button>
                                <button type="button" className="btn btn-sm float-right  btn-outline-success" onClick={()=>handleDelete(item.item.id)}><span className="bi-check2-circle"></span></button>
                            </div>
                            </div>
                            </div>
                            {
                                showEdit && <EditTask item={item.item} handleCancleDelete={handleCancleDelete}/>
                            }
                            
                           
                        </div>
                        )                  
}

export default DisplaySingleTask;