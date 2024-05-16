import React from 'react'

export default class Form extends React.Component {

  state = {
    name: ''
  }

  
  
  render() {

    const {onSubmit, onChange, name, hideTodos} = this.props

    
    return (
      <div>
        <form onSubmit={onSubmit}>
          <input 
          onChange={onChange} 
          
          value={this.state.name}
          type='text' 
          placeholder='Type todo'>

          </input>

          <input type='submit' ></input>
        </form>
        
      </div>
    )
  }
}
