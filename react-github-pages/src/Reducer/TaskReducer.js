import { actions } from "./Action";

//Reducer to Handle Actions
export const reducer = (state, action) => {
    var UpdatedToDoList
    switch (action.type) {
        case actions.ADD_TODO_ITEM:
            return {
                todoList: [
                    ...state.todoList,
                    {
                        id: state.todoList.length + 1,
                        title: action.title,
                        state: "new",
                        DtTm: new Date().toString().substring(0, 15)
                    }
                ],
            };
        case actions.EDIT_TODO_ITEM:

            UpdatedToDoList = state.todoList.map((i) => {
                if (i.id === action.id) {
                    return { ...i, title: action.editedTask }
                }
                else {
                    return i
                }
            })
            return {
                todoList: [
                    ...UpdatedToDoList

                ]
            };

        case actions.REMOVE_TODO_ITEM:

            UpdatedToDoList = state.todoList.filter((item) => item.id !== action.id)
            return {
                todoList: [...UpdatedToDoList]
            }
        case actions.CHECK_TODO_ITEM:

            UpdatedToDoList = state.todoList.map((i) => {
                if (i.id === action.id) {
                    return { ...i, state: "complete" }
                }
                else {
                    return i
                }
            })
            return {
                todoList: [
                    ...UpdatedToDoList

                ]
            };

        default:
            return state;
    }
};