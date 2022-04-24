import { Component } from "react";
export default class InputToDo extends Component {
  render() {
    return (
      <form action="#" method="post">
        <input type="text" placeholder="Add ToDo..." />
        <button type="submit">Submit</button>
      </form>
    )
  }
}