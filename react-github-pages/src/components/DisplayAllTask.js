import React, { useContext, useRef } from "react";
import SingleTask from "./SingleTask";
import { TodoListContext } from '../context/TaskDatacontext';

export default function DisplayAllTask() {

  const ListOrderAsc = useRef('-outline');
  const ListOrderDesc = useRef('-outline');

  //Getting todolist and setmsg function for alert from context
  const { todoList, setAlert, sortItems } = useContext(TodoListContext);

  //funtion to oreder  todoList 
  const handleItemsOrder = (order) => {
    if (order === 1) {
      ListOrderAsc.current = '';
      ListOrderDesc.current = '-outline';
    }
    else {
      ListOrderDesc.current = '';
      ListOrderAsc.current = '-outline'
    }

    sortItems(order)

    setAlert('Tasks are order successfully');
  }


  return (

    <>
      <div className="btn-group float-right" role="group" aria-label="Basic outlined example" >
        <button type="button" className={`btn btn-sm float-right btn${ListOrderAsc.current}-primary`} data-toggle="tooltip" title="sort by ascending order" onClick={(e) => handleItemsOrder(1)}><i className="bi bi-arrow-up"></i></button>
        <button type="button" className={`btn btn-sm float-right btn${ListOrderDesc.current}-primary`} data-toggle="tooltip" title="sort by descending order" onClick={(e) => handleItemsOrder(2)}><i className="bi bi-arrow-down"></i></button>
      </div>

      <div style={{ "marginTop": "3%" }}>

        <ul className="list-group list-group-flush" >
          {
            //eslint-disable-next-line
            todoList.map((item, index) => {
              if (item.state === "new")
                return <li className="list-group-item" key={index}><SingleTask item={item} /></li>
            })
          }
          {
            //eslint-disable-next-line
            todoList.map((item, index) => {
              if (item.state === "complete")
                return <li className="list-group-item" key={index}><SingleTask item={item} /></li>
            })

          }
        </ul>
      </div>
    </>

  );
}
