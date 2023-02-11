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
                        id: state.latestID + 1,
                        title: action.title,
                        state: "new",
                        DtTm: Date.parse(new Date())
                    }
                ],
                latestID: state.latestID + 1
            };
        case actions.EDIT_TODO_ITEM:

            UpdatedToDoList = state.todoList.map((i) => {
                if (i.id === action.id) {
                    return { ...i, title: action.editedTask, DtTm: Date.parse(new Date()) }
                }
                else {
                    return i
                }
            })
            return {
                todoList: [
                    ...UpdatedToDoList

                ],
                latestID: state.latestID
            };

        case actions.REMOVE_TODO_ITEM:

            UpdatedToDoList = state.todoList.filter((item) => item.id !== action.id)
            return {
                todoList: [...UpdatedToDoList],
                latestID: state.latestID

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

                ],
                latestID: state.latestID

            };
        case actions.SORT_TODO_ITEM:
            if (action.order === 1) {
                const sortedDesc = state.todoList.sort(
                    (objA, objB) => {
                        return objA.DtTm - objB.DtTm
                    }
                );
                return {
                    todoList: [...sortedDesc], latestID: state.latestID
                }
            }
            else {
                const sortedDesc2 = state.todoList.sort(
                    (objA, objB) => {
                        return objB.DtTm - objA.DtTm

                    }
                )
                return {
                    todoList: [...sortedDesc2], latestID: state.latestID
                }

            }
        default:
            return state;
    }
};