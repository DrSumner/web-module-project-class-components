import React, { useEffect } from 'react'


export default class Todo extends React.Component {

 
  

  render() {


    const {todo, handleClick} = this.props 
    let style = {
       cursor: 'pointer',
       
    }

    return (
      <div >
        <h4   onClick={handleClick} id={todo.id} style={style}>
          {!false && todo.name} {!false && todo.completed && '✓'}
          </h4>
        
      </div>
    )
  }
}
