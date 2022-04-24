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
    this.props.addTask(this.state.title);
    this.setState({ title: '' });
  }
  render() {
    return (
      <form action="#" method="POST" onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Add ToDo..." value={this.state.title} onChange={this.updateTaskTitle} />
        <button type="submit">Submit</button>
      </form>
    )
  }
}