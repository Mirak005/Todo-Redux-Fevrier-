import {
  ADD_TODO,
  DELETE_TODO,
  TOGGLE_COMPLETE,
  TOGGLE_EDIT,
  EDIT_TODO
} from "../const/actionTypes";

const initialState = {
  todoList: [
    {
      task: "My Redux State",
      isComplete: false,
      id: Math.random(),
      isEdited: true
    }
  ]
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todoList: [...state.todoList, action.payload]
      };

    case EDIT_TODO:
      return {
        ...state,
        todoList: state.todoList.map(el =>
          el.id === action.payload.id ? action.payload : el
        )
      };

    case DELETE_TODO:
      return {
        ...state,
        todoList: state.todoList.filter(el => el.id !== action.payload)
      };

    case TOGGLE_COMPLETE:
      return {
        ...state,
        todoList: state.todoList.map(el =>
          el.id === action.payload ? { ...el, isComplete: !el.isComplete } : el
        )
      };
    case TOGGLE_EDIT:
      return {
        ...state,
        todoList: state.todoList.map(el =>
          el.id === action.payload
            ? { ...el, isEdited: !el.isEdited }
            : { ...el, isEdited: false }
        )
      };

    default:
      return state;
  }
};

export default todoReducer;
