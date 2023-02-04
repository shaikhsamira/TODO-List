import React, { useState,useEffect } from "react";
import DisplayAllTask from "./DisplayAllTask";
import { TaskContext } from "../context/Task_Context";
import AddTask from "./AddTask";
import "../styles/HomePage.css"
import Notification from "./Notification";

const HomePage = () => {

  //task and userinput states for storing task-list and newinput from user
  const [task, setTask] = useState(() => {
    const data = localStorage.getItem("my-TaskList");
    return data ? JSON.parse(data) : [];
  });

  const [completedTask, setCompletedTask]=useState(() => {
    const data = localStorage.getItem("my-CompletedTask");
    return data ? JSON.parse(data) : [];
  })

  const [Alert, setAlert]=useState({msg:"",visible:false});
  
  useEffect(() => {
    localStorage.setItem("my-TaskList", JSON.stringify(task));
    localStorage.setItem("my-CompletedTask", JSON.stringify(completedTask));

  }, [task,completedTask]);


  return (
    <TaskContext.Provider value={{ task, setTask,completedTask,setCompletedTask }}>
     
     { alert.visible && <Notification msg={alert.msg}/>}
     {/* <Notification msg={alert.msg}/> */}
      <div className="card  mx-auto" id="HomePageStyle" >
        <div className="card-header text-center">
          <AddTask />
        </div>
        <div className="card-body">
          {(task.length !== 0 || completedTask.length!==0) && <DisplayAllTask />}
        </div>
      </div>
      
    </TaskContext.Provider>
  )
}

export default HomePage;