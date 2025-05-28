import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Task from '../task/task';
import './task-list.css';

export default class TaskList extends Component {
  render() {
    const { tasks, onTaskToggle, onTaskDelete } = this.props;
    return (
      <div className="main">
        <ul className="todo-list">
          {tasks.map((task) => (
            <Task
              key={task.id}
              id={task.id}
              description={task.description}
              completed={task.completed}
              created={task.created}
              editing={task.editing}
              onToggle={onTaskToggle}
              onDelete={onTaskDelete}
            />
          ))}
        </ul>
      </div>
    );
  }
}

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
      completed: PropTypes.bool,
      created: PropTypes.instanceOf(Date),
      editing: PropTypes.bool,
    })
  ).isRequired,
  onTaskToggle: PropTypes.func.isRequired,
  onTaskDelete: PropTypes.func.isRequired,
};
