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
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-green-400 to-pink-500">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold mb-6 text-center">ToDo List</h2>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleAddKeyPress}
          className="w-full mb-4 p-4 border-4 border-green-500 rounded-lg focus:outline-none focus:border-blue-500"
          placeholder="Enter a new todo..."
        />

        {editMode ? (
          <div className="mb-4">
            <input
              type="text"
              value={editValue}
              onChange={(e) => setEditValue(e.target.value)}
              onKeyPress={handleUpdateKeyPress}
              className="w-full p-4 border-4 border-pink-500 rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Update ToDo..."
            />
            <button
              onClick={updateTodo}
              className="w-full mt-2 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            >
              Update
            </button>
          </div>
        ) : (
          <button
            onClick={addTodo}
            className="w-full px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none focus:bg-green-600"
          >
            Add Todo
          </button>
        )}

        <ul className="mt-8">
          {todos.map((todo) => (
            <li key={todo.id} className="flex justify-between items-center bg-gray-100 border-4 border-gray-500 p-4 mb-4 rounded-lg shadow-md">
              <span className="text-lg">{todo.text}</span>
              <div>
                <button
                  onClick={() => deleteTodo(todo.id)}
                  className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:outline-none focus:bg-red-600"
                >
                  Delete
                </button>
                <button
                  onClick={() => enterEditMode(todo.id, todo.text)}
                  className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                >
                  Edit
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App
