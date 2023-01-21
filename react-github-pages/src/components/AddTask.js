import React from "react";
import DisplayAllTask from "./DisplayAllTask";
import { useState } from "react";
import { TaskContext } from "../Task_Context";


const AddTask = () => {
    
  //task and userinput states for storing task-list and newinput from user
    const [task, setTask] =useState([])
    const [ userInput, setUserInput ] = useState('');

  //set newTask in userInput to later add it in task list 
    const handleOnChange = (ip) => {
        setUserInput(ip)
        
    }

  //add new task in task list
    const handleSubmit = (e) => {
      if (e.key === 'Enter'|| e.key==='Tab' || e.type==='click') {
                e.preventDefault()
        var currentDate = new Date();
        var Dt=currentDate.toString().substring(0,15)
     
          setTask([...task,{"id":task.length+1,"title":userInput,
          "DtTm":Dt}])
        setUserInput('')
      }
    }

   
    
    
      return (
                  <TaskContext.Provider value={{task, setTask}}>
                    <div className="card  mx-auto" style={{"width": "80%"}}>
                        <div className="card-header text-center">
                            <h5 className="card-title" >To Do gives you focus, from work to play. Get started</h5>
                            <input type="text" className="form-control mb-2 mr-sm-2" id="taskInput"  value={userInput} onChange={(e)=>handleOnChange(e.target.value)} placeholder="Enter task..."  onKeyDown={(e)=>handleSubmit(e)}/>
                            <button  className="btn btn-primary mb-2" id="submitBtn" onClick={(e)=>{handleSubmit(e)}} >Add</button>
                        </div>
                        <div className="card-body">
                        <DisplayAllTask />
                        </div>
                     </div>
                     </TaskContext.Provider>
    )
}

export default AddTask;