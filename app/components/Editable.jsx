import React, { Component } from 'react'
import classnames from 'classnames'

export default ({editing, value, onEdit, className, ...props}) => {
  if(editing) {
    return (
      <Edit 
        className={className}
        value={value} 
        onEdit={onEdit} 
        {...props} 
      />
    )
  }

  return (
    <span className={classnames('value', className)} {...props}>
      {value}
    </span>
  )
}

class Edit extends Component {
  render() {
    const { className, value, onEdit, ...props} = this.props

    return (
      <input 
        type="text"
        autoFocus={true}
        defaultValue={value}
        onBlur={this.finishEdit}
        onKeyPress={this.checkEnter}
        {...props} />
    )
  }
  
  checkEnter = (event) => {
    if(event.key === 'Enter') {
      this.finishEdit(event)
    }
  }

  finishEdit = (event) => {
    const value = event.target.value

    if (this.props.onEdit) {
      this.props.onEdit(value)
    }
  }
}