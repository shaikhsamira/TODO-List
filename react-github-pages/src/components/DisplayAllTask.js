import React ,{useContext} from "react";
import DisplaySingleTask from "./DisplaySingleTask";
import { TaskContext } from "../Task_Context";


export default function DisplayAllTask() {

    
    const value=useContext(TaskContext);
   

  return (
   
    <div>


        <ul className="list-group list-group-flush">
        {
           
            value.task.map((item,index)=>{
                return <li className="list-group-item" key={index}><DisplaySingleTask item={item} /></li>
            })
       


}
     </ul>
    </div>
  );
}
