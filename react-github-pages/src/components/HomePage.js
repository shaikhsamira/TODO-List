import DisplayAllTask from "./DisplayAllTask";
import AddTask from "./AddTask";
import "../styles/HomePage.css"
import Notification from "./Notification";
import { useContext } from "react";
import { TodoListContext } from "../context/TaskDatacontext";

const HomePage = () => {

  //Getting data from context
  const { todoList, msg } = useContext(TodoListContext);


  return (
    <>

      <Notification msg={msg} visibility={msg === "None" ? "hidden" : "visible"} />

      <div className="card  mx-auto" id="HomePageStyle" >
        <div className="card-header text-center">

          <AddTask />

        </div>
        <div className="card-body">
          {(todoList.length !== 0) && <DisplayAllTask />}
        </div>

      </div>
    </>
  )
}

export default HomePage;