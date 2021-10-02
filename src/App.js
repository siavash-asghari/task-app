import { useState } from "react";
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import Tasks from "./components/Tasks";


function App() {
  const [showAddForm, setShowAddForm] = useState(false)

  const [tasks, setTasks] = useState(
    [
      {
        id: 1,
        text: 'قرار ملاقات با دوستم',
        day: '5 اردیبهشت',
        reminder: true
      },
      {
        id: 2,
        text: 'قرار ملاقات با دکتر',
        day: '8 اردیبهشت',
        reminder: true
      },
      {
        id: 3,
        text: 'خرید مایحتاج خونه',
        day: '19 اردیبهشت',
        reminder: false
      },
    ]
  )

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const toggleReminder = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, reminder: !task.reminder } : task))
  }

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }

  return (
    <div className="container">
      <Header
        title="صفحه مدیریت وظایف"
        onAdd={() => setShowAddForm(!showAddForm)}
        textName={showAddForm}
      />
      {tasks.length > 0 ? <Tasks
        tasks={tasks}
        deleteTask={deleteTask}
        toggleReminder={toggleReminder}
      /> : "هیچ وظیفه ای موجود نیست"}
      {showAddForm && <AddTask addTask={addTask} />}
    </div>
  );
}

export default App;
