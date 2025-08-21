import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from '../components/TodoList';

describe('TodoList Component', () => {
  test('renders TodoList component', () => {
    render(<TodoList />);
    expect(screen.getByText('Todo List')).toBeInTheDocument();
  });

  test('displays initial todos', () => {
    render(<TodoList />);
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Build a Todo App')).toBeInTheDocument();
    expect(screen.getByText('Write Tests')).toBeInTheDocument();
  });

  test('adds a new todo', () => {
    render(<TodoList />);
    
    const input = screen.getByPlaceholderText('Add a new todo...');
    const addButton = screen.getByText('Add');
    
    fireEvent.change(input, { target: { value: 'New Todo Item' } });
    fireEvent.click(addButton);
    
    expect(screen.getByText('New Todo Item')).toBeInTheDocument();
  });

  test('toggles todo completion', () => {
    render(<TodoList />);
    
    const todoItem = screen.getByText('Learn React');
    
    // Initially not completed
    expect(todoItem).not.toHaveClass('line-through');
    
    // Click to toggle
    fireEvent.click(todoItem);
    
    // Should now be completed
    expect(todoItem).toHaveClass('line-through');
  });

  test('deletes a todo', () => {
    render(<TodoList />);
    
    const deleteButtons = screen.getAllByText('Delete');
    const todoItem = screen.getByText('Learn React');
    
    // Click delete button for the first todo
    fireEvent.click(deleteButtons[0]);
    
    // Todo should be removed
    expect(todoItem).not.toBeInTheDocument();
  });

  test('does not add empty todo', () => {
    render(<TodoList />);
    
    const input = screen.getByPlaceholderText('Add a new todo...');
    const addButton = screen.getByText('Add');
    
    // Try to add empty todo
    fireEvent.change(input, { target: { value: '   ' } });
    fireEvent.click(addButton);
    
    // Should still have only the initial 3 todos
    const todoItems = screen.getAllByText(/Delete/);
    expect(todoItems).toHaveLength(3);
  });

  test('clears input after adding todo', () => {
    render(<TodoList />);
    
    const input = screen.getByPlaceholderText('Add a new todo...');
    const addButton = screen.getByText('Add');
    
    fireEvent.change(input, { target: { value: 'Test Todo' } });
    fireEvent.click(addButton);
    
    // Input should be cleared
    expect(input.value).toBe('');
  });

  test('displays correct todo counts', () => {
    render(<TodoList />);
    
    // Initial state: 3 total, 1 completed, 2 remaining
    expect(screen.getByText(/Total: 3/)).toBeInTheDocument();
    expect(screen.getByText(/Completed: 1/)).toBeInTheDocument();
    expect(screen.getByText(/Remaining: 2/)).toBeInTheDocument();
  });

  test('handles form submission with Enter key', () => {
    render(<TodoList />);
    
    const input = screen.getByPlaceholderText('Add a new todo...');
    
    fireEvent.change(input, { target: { value: 'Enter Key Todo' } });
    fireEvent.submit(input.closest('form'));
    
    expect(screen.getByText('Enter Key Todo')).toBeInTheDocument();
  });
});

