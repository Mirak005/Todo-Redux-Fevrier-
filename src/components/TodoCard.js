import React from "react";

class TodoCard extends React.Component {
  state = {
    editInput: this.props.el.task
  };

  handleChange = e => this.setState({ editInput: e.target.value });

  handleEdit = () => {
    if (this.state.editInput.trim() === "") {
      this.setState({ editInput: this.props.el.task });
      this.props.toggleEdit(this.props.el.id);
      return alert("Invalid Empty Field");
    }

    const editTodo = {
      task: this.state.editInput,
      isComplete: false,
      isEdited: false,
      id: this.props.el.id
    };
    this.props.editTodo(editTodo);
  };

  render() {
    const { handleChange, handleEdit } = this;
    const { el, removeTodo, toggleEdit, handleComplete } = this.props;
    return (
      <li
        key={el.id}
        className="row d-flex align-items-baseline list-group-item"
      >
        <div className="col-1.7">
          <button
            className="btn-lg bg-light todo-btn"
            onClick={() => handleComplete(el.id)}
          >
            {el.isComplete ? "Undo" : "Complete"}
          </button>
        </div>
        <div className="col-1.7">
          <button
            className="btn-lg bg-light todo-btn "
            onClick={() => removeTodo(el.id)}
          >
            Delete
          </button>
        </div>
        <div className="col-1.7">
          <button
            onClick={() => (el.isEdited ? handleEdit() : toggleEdit(el.id))}
            className="btn-lg bg-primary todo-btn text-light "
          >
            {el.isEdited ? "Confirm" : "Edit"}
          </button>
        </div>

        <div className="col-2">
          <p className={el.isComplete ? "todo-label" : ""}>{el.task}</p>
        </div>
        <div className="col-2">
          {el.isEdited && (
            <input
              type="text"
              placeholder={el.task}
              onChange={handleChange}
              value={this.state.editInput}
            />
          )}
        </div>
      </li>
    );
  }
}

export default TodoCard;
