import { ADD_TODO, DELETE_TODO, TOGGLE_COMPLETE ,TOGGLE_EDIT ,EDIT_TODO} from "../const/actionTypes";

export const addTodo = payload => {
  return { type: ADD_TODO, payload };
};

export const deleteTodo = payload=> {
    return { type: DELETE_TODO, payload    };
  };

  export const toggleComplete = payload => {
    return { type: TOGGLE_COMPLETE, payload };
  };
  
  export const toggleEdit = payload =>{
    return { 
      type:TOGGLE_EDIT ,
      payload
    }
  }

  export const editTodo = payload =>{
    return { 
      type:EDIT_TODO ,
      payload
    }
  }