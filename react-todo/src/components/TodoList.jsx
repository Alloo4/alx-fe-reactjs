import { useState } from 'react';
import AddTodoForm from './AddTodoForm';

const TodoList = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build a Todo App', completed: false },
    { id: 3, text: 'Write Tests', completed: true }
  ]);

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text: text.trim(),
      completed: false
    };
    setTodos(prev => [...prev, newTodo]);
  };

  const toggleTodo = (id) => {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
        Todo List
      </h1>
      
      <AddTodoForm onAddTodo={addTodo} />
      
      <ul className="space-y-2 mt-6">
        {todos.map(todo => (
          <li
            key={todo.id}
            className={`flex items-center justify-between p-3 rounded-md border ${
              todo.completed 
                ? 'bg-green-50 border-green-200' 
                : 'bg-gray-50 border-gray-200'
            }`}
          >
            <span
              onClick={() => toggleTodo(todo.id)}
              className={`flex-1 cursor-pointer ${
                todo.completed 
                  ? 'line-through text-gray-500' 
                  : 'text-gray-800'
              }`}
            >
              {todo.text}
            </span>
            <button
              onClick={() => deleteTodo(todo.id)}
              className="ml-3 px-3 py-1 bg-red-500 text-white text-sm rounded hover:bg-red-600 transition-colors"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      
      {todos.length === 0 && (
        <p className="text-center text-gray-500 mt-6">
          No todos yet. Add one above!
        </p>
      )}
      
      <div className="mt-6 text-center text-sm text-gray-600">
        Total: {todos.length} | 
        Completed: {todos.filter(todo => todo.completed).length} | 
        Remaining: {todos.filter(todo => !todo.completed).length}
      </div>
    </div>
  );
};

export default TodoList;

