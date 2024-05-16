import React from 'react'
import Todo from './Todo'

export default class TodoList extends React.Component {

state= {
  filter: false
}

filterTodo = () => {
  this.setState({
    ...this.state,
    filter : !this.state.filter
  })
}


  render() {
    const {todos, handleClick} = this.props
    const filtered = todos.filter( todo => !todo.completed)
    return (
      <div>
        <h1>Todos:</h1>
        {this.state.filter ? filtered.map( (todo) => (<Todo key={todo.id} todo={todo} handleClick={handleClick} />))
        : todos.map( (todo) => (<Todo key={todo.id} todo={todo} handleClick={handleClick} />))
        }
        <button onClick={this.filterTodo}>Hide Completed</button>
      </div>
    )
  }
}
