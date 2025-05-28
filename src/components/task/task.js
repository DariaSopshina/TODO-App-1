import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { formatDistanceToNow } from 'date-fns';
import './task.css';

export default class Task extends Component {
  // обработчик изменения статуса
  handleToggle = () => {
    const { onToggle, id } = this.props;
    onToggle(id);
  };

  // обработчик удаления
  handleDelete = () => {
    const { onDelete, id } = this.props;
    onDelete(id);
  };

  render() {
    const { id, description, created: rawCreated, editing, completed } = this.props;

    // проверка на валидность даты
    let created = rawCreated;
    if (!(created instanceof Date) || Number.isNaN(created.getTime)) {
      created = new Date();
    }

    if (editing) {
      return (
        <li className="editing">
          <input className="edit" defaultValue={description} readOnly />
        </li>
      );
    }

    return (
      <li className={completed ? 'completed' : ''}>
        <div className="view">
          <input
            id={`toggle-task-${id}`}
            className="toggle"
            type="checkbox"
            checked={completed}
            onChange={this.handleToggle}
          />
          <label htmlFor={`toggle-task-${id}`}>
            <span className="description">{description}</span>
            <span className="created">
              created
              {formatDistanceToNow(created, { addSuffix: true })}
            </span>
          </label>
          <button type="button" className="icon icon-edit" aria-label="Edit task" />
          <button type="button" className="icon icon-destroy" onClick={this.handleDelete} aria-label="Delete task" />
        </div>
      </li>
    );
  }
}

Task.propTypes = {
  id: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  completed: PropTypes.bool,
  created: PropTypes.instanceOf(Date).isRequired,
  editing: PropTypes.bool,
  onToggle: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

Task.defaultProps = {
  completed: false,
  editing: false,
};
