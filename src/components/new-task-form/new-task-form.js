import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './new-task-form.css';

export default class NewTaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }

  handleChange = (e) => {
    this.setState({ text: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault(); // не даем обновить браузеру страницу
    const { text } = this.state;
    const { onTaskAdded } = this.props;

    if (text.trim()) {
      // проверка на пустую строку
      onTaskAdded(text);
      this.setState({ text: '' }); // очистка инпута
    }
  };

  render() {
    const { text } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={this.handleChange}
          className="new-todo"
          placeholder="What needs to be done?"
        />
      </form>
    );
  }
}

NewTaskForm.propTypes = {
  onTaskAdded: PropTypes.func.isRequired,
};
