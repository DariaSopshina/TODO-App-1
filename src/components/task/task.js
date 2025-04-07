import React from "react";
import { formatDistanceToNow } from "date-fns";
import "./task.css";

const Task = ({ description, completed, created, editing }) => {
  //проверка на валидность даты
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
        <input className="toggle" checked={completed} readOnly />
        <label>
          <span className="description">{description}</span>
          <span className="created">
            created {formatDistanceToNow(created, { addSuffix: true })}
          </span>
        </label>
        <button className="icon icon-edit"></button>
        <button className="icon icon-destroy"></button>
      </div>
    </li>
  );
};

export default Task;
