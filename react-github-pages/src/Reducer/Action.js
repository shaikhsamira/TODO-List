//Initial State and Actions
export const initialState = {
    todoList: JSON.parse(localStorage.getItem("my-TaskList")) ==null ? []:JSON.parse(localStorage.getItem("my-TaskList")),
    latestID:JSON.parse(localStorage.getItem("latestID")) ==null ? 0:JSON.parse(localStorage.getItem("latestID"))
  };
  
export const actions = {
    ADD_TODO_ITEM: "ADD_TODO_ITEM",
    EDIT_TODO_ITEM:"EDIT_TODO_ITEM",
    REMOVE_TODO_ITEM: "REMOVE_TODO_ITEM",
    CHECK_TODO_ITEM: "CHECK_TODO_ITEM",
    SORT_TODO_ITEM: "SORT_DESC",

  };
  