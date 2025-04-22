import React, { Component } from "react";
import { formatDistanceToNow } from "date-fns";
import "./task.css";

export default class Task extends Component {
  //обработчик изменения статуса
  handleToggle = () => {
    this.props.onToggle(this.props.id);
  };

  //обработчик удаления
  handleDelete = () => {
    this.props.onDelete(this.props.id);
  };

  render() {
    const { description, created: rawCreated, editing, completed } = this.props;

    //проверка на валидность даты
    let created = rawCreated;
    if (!(created instanceof Date) || isNaN(created)) {
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
      <li className={completed ? "completed" : ""}>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={completed}
            onChange={this.handleToggle}
          />
          <label onClick={this.handleToggle}>
            <span className="description">{description}</span>
            <span className="created">
              created {formatDistanceToNow(created, { addSuffix: true })}
            </span>
          </label>
          <button
            className="icon icon-edit"
            onClick={() => console.log(`Edit: ${description}`)}
          ></button>
          <button
            className="icon icon-destroy"
            onClick={this.handleDelete}
          ></button>
        </div>
      </li>
    );
  }
}
