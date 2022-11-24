import React from "react";
import DisplayAllTask from "./DisplayAllTask";
import { useState } from "react";



const AddTask = () => {
    const defaultTask=[{
        "title":"Default",
        "status":"new"
    }]
    const [task, setTask] =useState([])
    const [ userInput, setUserInput ] = useState('');

    const handleOnChange = (ip) => {
        setUserInput(ip)
        
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const newTask={
            "id":task.length+1,
            "title":userInput,
            "status":"new"
          }
          setTask([...task,{"id":task.length+1,"title":userInput,
          "status":"new"}])
    }

    const handleDelete = (id) => {
        task.filter(i => {
            // 👇️ remove object that has id equal id
            return task.id != id;
          })
        //   console.log(task);
        
      }
      
      
      return (
        <div className="container">
            <div className="container h-100 d-flex align-items-center justify-content-center">
            <div className="form-inline ">
                <label className="sr-only" for="inlineFormInputName2">AddTask</label>
                <input type="text" className="form-control mb-2 mr-sm-2" id="inlineFormInputName2"  value={userInput} onChange={(e)=>handleOnChange(e.target.value)} placeholder="Enter task..."/>

                <button  className="btn btn-primary mb-2" onClick={(e)=>{handleSubmit(e)}} >Add</button>
            </div>
            </div>
            
            <div className="container h-100 d-flex align-items-center justify-content-center">
                <DisplayAllTask taskData={task} handleDelete={handleDelete}/>
            </div>
        </div>

    )
}

export default AddTask;