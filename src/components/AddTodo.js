import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../js/actions/index";

class AddTodo extends React.Component {
  state = {
    input: ""
  };

  handleChange = event => this.setState({ input: event.target.value });
  addNewTodo = () => {
    if (this.state.input.trim() === "") {
      return alert("Enter a Valid Todo");
    }

    const newTodo = {
      id: Math.random(),
      isComplete: false,
      isEdited: false,
      task: this.state.input
    };
    //Update the todoList in reducer
    this.props.addTodo(newTodo);
    this.setState({ input: "" });
  };

  render() {
    return (
      <section className="container-fluid bg-primary">
        <div className="row">
          <div className="col title">
            <h1 className=" text-right">To Do-App!</h1>
            <h5 className="text-right">Add a New To-do</h5>
          </div>
        </div>
        <div className="row">
          <div className="col">
            {/* input add new Todo */}
            <input
              className="form-control form-control-lg todo-input"
              type="text"
              placeholder="Enter a new task..."
              name="title"
              value={this.state.input}
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className="row justify-content-end">
          <button
            onClick={this.addNewTodo}
            type="button"
            className="add-btn btn-lg btn-primary"
          >
            Add
          </button>
        </div>
      </section>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  addTodo: payload => dispatch(addTodo(payload))
});

export default connect(null, mapDispatchToProps)(AddTodo);
