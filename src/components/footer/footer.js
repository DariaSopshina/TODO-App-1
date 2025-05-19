import React, { Component } from "react";
import TasksFilter from "../tasks-filter/tasks-filter";
import "./footer.css";

export default class Footer extends Component {
  render() {
    const { filter, onFilterChange, onClearCompeted, activeCount } = this.props;

    return (
      <footer className="footer">
        <span className="todo-count">{activeCount} items left</span>
        <TasksFilter filter={filter} onFilterChange={onFilterChange} />
        <button className="clear-completed" onClick={onClearCompeted}>
          Clear completed
        </button>
      </footer>
    );
  }
}
