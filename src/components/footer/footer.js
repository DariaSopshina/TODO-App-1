import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TasksFilter from '../tasks-filter/tasks-filter';
import './footer.css';

export default class Footer extends Component {
  render() {
    const { filter, onFilterChange, onClearCompleted, activeCount } = this.props;

    return (
      <footer className="footer">
        <span className="todo-count">{activeCount} items left</span>
        <TasksFilter filter={filter} onFilterChange={onFilterChange} />
        <button type="button" className="clear-completed" onClick={onClearCompleted}>
          Clear completed
        </button>
      </footer>
    );
  }
}

Footer.propTypes = {
  filter: PropTypes.string,
  onFilterChange: PropTypes.func,
  onClearCompleted: PropTypes.func,
  activeCount: PropTypes.number,
};

Footer.defaultProps = {
  filter: 'all',
  onFilterChange: () => {},
  onClearCompleted: () => {},
  activeCount: 0,
};
