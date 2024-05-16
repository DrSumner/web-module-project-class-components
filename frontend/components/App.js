import React from 'react'
import TodoList from './TodoList'
import Form from './Form'

let id = 0
let getId= () => id++

const initialTodos = [
  {name: 'Do Homework',
  id: getId(),
  completed: false},
  {name: 'Bake Cookies',
  id: getId(),
  completed: false},
  {name: 'Organize Garage',
  id: getId(),
  completed: true},
]

const initialValue = {name: ''}

export default class App extends React.Component {
  state = {
    todos: initialTodos,
    values: initialValue,
  }

  handleClick = evt => { 
    const {id} = evt.target
    
    this.setState({
      ...this.state, 
      todos: this.state.todos.map( td => {
        if(id == td.id) return {...td, completed: !td.completed}
        return td
      })
    }); 
  }

  onSubmit = evt => {
    evt.preventDefault()
    
    getId()
    
    console.log(this.state.values)
    
    
    this.setState({
      ...this.state,
      
      todos: this.state.todos.concat(this.state.values),
      values : initialValue
    })
    console.log('form Submitted!')
    console.log(this.state.todos)
  }

  onChange = evt => {
    const { value} = evt.target
    this.setState({
      ...this.state,
      values: {'name': value, id: id, completed: false}
    })
    console.log(value)
  }

  


  render() {
    return (
      <div>
        <TodoList todos={this.state.todos} handleClick={this.handleClick}/>
        <Form  onSubmit={this.onSubmit} onChange={this.onChange} name={this.state.values.name} />
      </div>
    )
  }
}
