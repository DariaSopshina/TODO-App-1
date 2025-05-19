import React, { Component } from "react";
import "./new-task-form.css";

export default class NewTaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
  }

  handleChange = (e) => {
    this.setState({ text: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault(); // не даем обновить браузеру страницу
    if (this.state.text.trim()) {
      //проверка на пустую строку
      this.props.onTaskAdded(this.state.text);
      this.setState({ text: "" }); // очистка инпута
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.text}
          onChange={this.handleChange}
          className="new-todo"
          placeholder="What needs to be done?"
        />
      </form>
    );
  }
}
