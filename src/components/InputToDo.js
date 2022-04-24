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
  render() {
    return (
      <form action="#" method="post">
        <input type="text" placeholder="Add ToDo..." value={this.state.title} onChange={this.updateTaskTitle} />
        <button type="submit">Submit</button>
      </form>
    )
  }
}