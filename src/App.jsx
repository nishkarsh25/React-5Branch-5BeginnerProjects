import React from 'react'
import { useState } from 'react'

const App = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [editMode, setEditMode] = useState(false);
  const [editId, setEditId] = useState(null);
  const [editValue, setEditValue] = useState('');

  

  return (
    <div>
      
    </div>
  )
}

export default App
