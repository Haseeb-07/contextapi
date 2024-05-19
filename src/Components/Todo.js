import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTask, removeTask } from '../features/todoSlice';
import { Button, Container, FormControl, InputGroup, ListGroup } from 'react-bootstrap';

export function Todo() {
  const [taskName, setTaskName] = useState('');
  const tasks = useSelector((state) => state.todo.tasks);
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (taskName.trim()) {
      dispatch(addTask(taskName));
      setTaskName(''); // Clear the input field
    }
  };

  const handleRemoveTask = (index) => {
    dispatch(removeTask(index));
  };

  return (
    <Container className="mt-5">
      <h1>Todo List</h1>
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Enter task name"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
        <Button className='sec my-6' onClick={handleAddTask}>Add Task</Button>
      </InputGroup>
      <ListGroup>
        {tasks.map((task, index) => (
          <ListGroup.Item key={index}>
            {task.name}
            <Button variant="danger" className="ms-2" onClick={() => handleRemoveTask(index)}>Remove</Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
}
