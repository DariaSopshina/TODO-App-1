import React, { useState } from "react";
import ReactDOM from "react-dom/client";

import NewTaskForm from "./components/new-task-form/new-task-form";
import TaskList from "./components/task-list/task-list";
import Footer from "./components/footer/footer";

import "./index.css";

const App = () => {
  const [tasks, setTasks] = useState([
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
  ]);

  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <NewTaskForm setTasks={setTasks} />
      </header>
      <TaskList tasks={tasks} setTasks={setTasks} />
      <Footer />
    </section>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
