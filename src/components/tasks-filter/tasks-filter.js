import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './tasks-filter.css';

export default class TasksFilter extends Component {
  constructor(props) {
    super(props);
    this.buttons = [
      { name: 'all', label: 'All' },
      { name: 'active', label: 'Active' },
      { name: 'completed', label: 'Completed' },
    ];
  }

  render() {
    const { filter, onFilterChange } = this.props;

    const buttons = this.buttons.map(({ name, label }) => {
      const isActive = filter === name;
      const className = isActive ? 'selected' : '';
      return (
        <li key={name}>
          <button type="button" className={className} onClick={() => onFilterChange(name)}>
            {label}
          </button>
        </li>
      );
    });

    return <ul className="filters">{buttons}</ul>;
  }
}

TasksFilter.propTypes = {
  filter: PropTypes.string,
  onFilterChange: PropTypes.func.isRequired,
};

TasksFilter.defaultProps = {
  filter: 'all',
};
