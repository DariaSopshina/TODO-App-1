import React, { Component } from "react";
import ReactDOM from "react-dom/client";

import NewTaskForm from "./components/new-task-form/new-task-form";
import TaskList from "./components/task-list/task-list";
import Footer from "./components/footer/footer";

import "./index.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        {
          id: 1,
          description: "Completed task",
          completed: true,
          created: new Date(Date.now() - 17000),
        },
        {
          id: 2,
          description: "Editing task",
          completed: false,
          created: new Date(Date.now() - 300000),
          editing: true,
        },
        {
          id: 3,
          description: "Active task",
          completed: false,
          created: new Date(Date.now() - 300000),
        },
      ],
    };
  }

  //обработчик изменения статуса задачи
  handleTaskToggle = (id) => {
    this.setState((prevState) => ({
      tasks: prevState.tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      ),
    }));
  };

  //обработчик удаления задачи
  handleTaskDelete = (id) => {
    this.setState((prevState) => ({
      tasks: prevState.tasks.filter((task) => task.id !== id),
    }));
  };

  //обработчик добавления новой задачи
  handleTaskAdd = (description) => {
    const newTask = {
      id: Date.now(),
      description,
      completed: false,
      created: new Date(),
    };
    this.setState((prevState) => ({
      tasks: [...prevState.tasks, newTask],
    }));
  };

  render() {
    return (
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <NewTaskForm onTaskAdded={this.handleTaskAdd} />
        </header>
        <TaskList
          tasks={this.state.tasks}
          onTaskToggle={this.handleTaskToggle}
          onTaskDelete={this.handleTaskDelete}
        />
        <Footer />
      </section>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
