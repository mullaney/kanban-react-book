import React, { Component } from 'react'
import Notes from './Notes'
import uuid from 'uuid'
import connect from '../libs/connect'

const initialNotes = [
  {
    id: uuid.v4(),
    task: 'Learn React'
  },
  {
    id: uuid.v4(),
    task: 'Do laundry - colors'
  }
]

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      notes: initialNotes
    }
    this.addNote = this.addNote.bind(this)
    this.deleteNote = this.deleteNote.bind(this)
  }

  render () {
    const { notes } = this.state
    return (
      <div>
        {this.props.test}
        <button className="add-note" onClick={this.addNote}>+</button>
        <Notes
          notes={notes}
          onNoteClick={this.activateNoteEdit}
          onEdit={this.editNote}
          onDelete={this.deleteNote}
        />
      </div>
    )
  }

  addNote () {
    const newTask = {
      id: uuid.v4(),
      task: 'New Task'
    }

    this.setState({
      notes: [...this.state.notes, newTask]
    })
  }

  deleteNote (id, e) {
    e.stopPropagation()

    this.setState({
      notes: this.state.notes.filter(note => note.id !== id) 
    })
  }

  activateNoteEdit (id) {
    this.setState({
      notes: this.state.notes.map(note => {
        if(note.id === id) {
          note.editing = true
        }
        return note
      })
    })
  }

  editNote (id, task) {
    this.setState({
      notes: this.state.notes.map(note => {
        if(note.id === id) {
          note.editing = false
          note.task = task
        }

        return note
      })
    })
  }
}

export default connect(() => ({
  test: 'test'
}))(App)