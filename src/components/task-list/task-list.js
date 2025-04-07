import React from "react";
import Task from "../task/task";
import "./task-list.css";

const TaskList = ({ tasks }) => {
  return (
    <section className="main">
      <ul className="todo-list">
        {tasks.map((task) => (
          <Task
            key={task.id}
            description={task.description}
            completed={task.completed}
            created={task.created}
            editing={task.editing}
          />
        ))}
      </ul>
    </section>
  );
};

export default TaskList;
