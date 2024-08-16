import React from 'react'

const InputForm = ({handleChange,removeField, input}) => {
  return (
  <div>
    <input type='text' onChange={handleChange} value={input.name} name='name' placeholder='Name'/>
    <input type='text' onChange={handleChange} value={input.age} name='age'placeholder='Age'/>
    <button type='submit' onClick={removeField}>Remove</button>
  </div>
  )
}

export default InputForm