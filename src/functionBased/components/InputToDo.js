import { Component } from "react";
export default class InputToDo extends Component {
  state = {
    title: "",
  }
  updateTaskTitle = (e) => {
    this.setState({
      title: e.target.value
    });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.title.trim()) {
      this.props.addTask(this.state.title);
      this.setState({ title: '' });
    }
    else
      alert('pleas enter a valid text');
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form-container">
        <input
          type="text"
          placeholder="Add ToDo..."
          value={this.state.title} onChange={this.updateTaskTitle}
          className="input-text" />
        <button
          type="submit"
          className="input-submit">Submit</button>
      </form>
    )
  }
}