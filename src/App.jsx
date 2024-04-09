import React from 'react'
import { useState } from 'react'

const App = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [editMode, setEditMode] = useState(false);
  const [editId, setEditId] = useState(null);
  const [editValue, setEditValue] = useState('');

  const addTodo = () => {
    if (inputValue.trim() !== '') {
      const newTodo = {
        id: new Date().getTime(),
        text: inputValue,
      }

      setTodos([...todos, newTodo]);
      setInputValue('');
    }
  }

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  }

  const enterEditMode = (id, text) => {
    setEditMode(true);
    setEditId(id);
    setEditValue(text);
  }

  const updateTodo = () => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === editId) {
        return { ...todo, text: editValue };
      }
      return todo;
    });

    setTodos(updatedTodos);
    setEditMode(false);
    setEditId(null);
    setEditValue('');
  }

  const handleAddKeyPress = (event) => {
    if (event.key === 'Enter') {
      addTodo();
    }
  }

  const handleUpdateKeyPress = (event) => {
    if (event.key === 'Enter') {
      updateTodo();
    }
  }

  

  return (
    <div>
      
    </div>
  )
}

export default App
