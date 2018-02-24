import React, { Component } from 'react'

export default ({editing, value, onEdit, ...props}) => {
  if(editing) {
    return <Edit value={value} onEdit={onEdit} {...props} />
  }

  return <span {...props}>value: {value}</span>
}

// const Edit = ({onEdit = () => {}, value, ...props}) => (
//   <div onClick={onEdit} {...props}>
//     <span>edit: {value}</span>
//   </div>
// )

class Edit extends Component {
  render() {
    const { value, onEdit, ...props} = this.props

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