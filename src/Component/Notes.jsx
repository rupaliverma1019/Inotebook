import React, {useContext, useEffect}from 'react'
import NoteContext from '../ContextApi/Notes/NoteContextNew'
import Noteitem from './Noteitem';
import AddNote from './AddNote';

const Notes = () => {
    const context = useContext(NoteContext);
    const {notes , getNotes} = context;
    useEffect(()=>{
      getNotes()
    })
  return (
    <div>
      <AddNote/>
        <h2>Your Note</h2>
        {notes.map((note) => (
    <Noteitem key={note._id} note={note} />
))}


    </div>
  )
}

export default Notes