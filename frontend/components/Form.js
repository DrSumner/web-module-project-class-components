import React from 'react'

export default class Form extends React.Component {
 
  
  render() {

    const {onSubmit, onChange, name} = this.props

    
    return (
      <div>
        <form onSubmit={onSubmit}>
          <input 
          onChange={onChange} 
          
          value={name}
          type='text' 
          placeholder='Type todo'>

          </input>

          <input type='submit'/>
        </form>
      </div>
    )
  }
}
