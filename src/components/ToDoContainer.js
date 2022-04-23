import { Component } from 'react'
import ToDoList from './ToDoList'
import Header from './Header';
export default class TodoContainer extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Setup development environment",
        completed: true
      },
      {
        id: 2,
        title: "Develop website and add content",
        completed: false
      },
      {
        id: 3,
        title: "Deploy to live server",
        completed: false
      }
    ],
    counter: 0,
  };
  updateState = () => {
    this.setState(() => ({
      counter: this.state.counter += 2
    }))
  }
  render() {
    return (
      <div>
        <Header />
        <ToDoList toDoList={this.state.todos} counter={this.state.counter} />
      </div>
    )
  }
}
