import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';

import NewTaskForm from './components/new-task-form/new-task-form';
import TaskList from './components/task-list/task-list';
import Footer from './components/footer/footer';

import './index.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      // tasks: [
      // {
      // id: 1,
      // description: 'Completed task',
      // completed: true,
      // created: new Date(Date.now() - 17000),
      // },
      // {
      // id: 2,
      // description: 'Editing task',
      // completed: false,
      // created: new Date(Date.now() - 300000),
      // editing: true,
      // },
      // {
      // id: 3,
      // description: 'Active task',
      // completed: false,
      // created: new Date(Date.now() - 300000),
      // },
      // ],
      filter: 'all',
    };
  }

  // обработчик изменения статуса задачи
  handleTaskToggle = (id) => {
    this.setState((prevState) => ({
      tasks: prevState.tasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)),
    }));
  };

  // обработчик удаления задачи
  handleTaskDelete = (id) => {
    this.setState((prevState) => ({
      tasks: prevState.tasks.filter((task) => task.id !== id),
    }));
  };

  // обработчик добавления новой задачи
  handleTaskAdd = (description) => {
    const newTask = {
      id: Date.now(),
      description,
      completed: false,
      created: new Date(), // фиксирует время создания
    };
    this.setState((prevState) => ({
      tasks: [...prevState.tasks, newTask],
    }));
  };

  onFilterChange = (filter) => {
    this.setState({ filter });
  };

  // обработчик удаления завершенных задач
  clearCompleted = () => {
    this.setState(({ tasks }) => {
      const newTasks = tasks.filter((task) => !task.completed);
      return {
        tasks: newTasks,
      };
    });
  };

  filter(tasks, filter) {
    switch (filter) {
      case 'all':
        return tasks;
      case 'active':
        return tasks.filter((task) => !task.completed);
      case 'completed':
        return tasks.filter((task) => task.completed);
      default:
        return tasks;
    }
  }

  render() {
    const { tasks, filter } = this.state;
    const visibleTasks = this.filter(tasks, filter); // фильтрация задач
    const activeCount = tasks.filter((task) => !task.completed).length; // вычисляние количества активных задач

    return (
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <NewTaskForm onTaskAdded={this.handleTaskAdd} />
        </header>
        <TaskList
          tasks={visibleTasks} // передача отфильтрованных задач
          onTaskToggle={this.handleTaskToggle}
          onTaskDelete={this.handleTaskDelete}
        />
        <Footer
          filter={filter}
          onFilterChange={this.onFilterChange}
          onClearCompleted={this.clearCompleted}
          activeCount={activeCount} // передача количества активных задач
        />
      </section>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
