import React, { useReducer, useState, useEffect } from "react";
import { reducer } from "../Reducer/TaskReducer";
import { initialState } from "../Reducer/Action";
import { actions } from "../Reducer/Action";

//Context and Provider
export const TodoListContext = React.createContext();

export const Provider = ({ children }) => {


  const [msg, setMsg] = useState("None");

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem("my-TaskList", JSON.stringify(state.todoList));
    localStorage.setItem("latestID", JSON.stringify(state.latestID))
  }, [state]);


  const value = {
    msg: msg,
    setMsg: setMsg,
    todoList: state.todoList,
    addTodoItem: (title) => {
      dispatch({ type: actions.ADD_TODO_ITEM, title });
    },
    editTodoItem: (id, editedTask) => {
      dispatch({ type: actions.EDIT_TODO_ITEM, id, editedTask });
    },
    removeTodoItem: (id) => {

      dispatch({ type: actions.REMOVE_TODO_ITEM, id });
    },
    markAsCompleted: (id) => {

      dispatch({ type: actions.CHECK_TODO_ITEM, id });
    },
    sortItems: (order) => {
      dispatch({ type: actions.SORT_TODO_ITEM, order });
    },
    setAlert: (msg) => {
      setMsg(msg)
      setTimeout(() => {
        setMsg("None")
      }, 3000)
    }


  };

  return (
    <TodoListContext.Provider value={value}>
      {children}
    </TodoListContext.Provider>
  );
};