import { Component } from 'react'

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
    ]
  };
  render() {
    return (
      <ul>
        {this.state.todos.map(task => (
          <li> {task.title}</li>
        ))}
      </ul>
    )
  }
}
