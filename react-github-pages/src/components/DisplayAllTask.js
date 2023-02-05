import React, { useContext, useEffect, useState } from "react";
import SingleTask from "./SingleTask";
import { TodoListContext } from '../context/TaskDatacontext';

export default function DisplayAllTask() {


  //Getting todolist and setmsg function for alert from context
  const { todoList, setAlert } = useContext(TodoListContext);

  //list to display data 
  const [todoListOrder, setTodoListOrder] = useState([...todoList])

  //to change todoListOrder wheneve todoList changes
  useEffect(() => {
    setTodoListOrder([...todoList])
  }, [todoList])

  //funtion reverse todoListOrder list
  const handleDescOrder = () => {
    setAlert('Tasks are order successfully');
    setTodoListOrder([...todoList].reverse())
  }

  //funtion to oreder by asc todoListOrder 
  const handleAscOrder = () => {
    setAlert('Tasks are order successfully');
    setTodoListOrder([...todoList])
  }

  return (

    <>
      <div className="btn-group float-right" role="group" aria-label="Basic outlined example" >
        <button type="button" className="btn btn-sm float-right btn-outline-primary" data-toggle="tooltip" title="sort by ascending order" onClick={(e) => handleAscOrder()}><i className="bi bi-arrow-up"></i></button>
        <button type="button" className="btn btn-sm float-right btn-outline-primary" data-toggle="tooltip" title="sort by descending order" onClick={(e) => handleDescOrder()}><i className="bi bi-arrow-down"></i></button>
      </div>

      <div style={{ "marginTop": "3%" }}>

        <ul className="list-group list-group-flush" >
          {

            todoListOrder.map((item, index) => {
              if (item.state === "new")
                return <li className="list-group-item" key={index}><SingleTask item={item} /></li>
            })
          }
          {

            todoListOrder.map((item, index) => {
              if (item.state === "complete")
                return <li className="list-group-item" key={index}><SingleTask item={item} /></li>
            })

          }
        </ul>
      </div>
    </>

  );
}
