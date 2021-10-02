import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom"
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import Footer from "./components/Footer";
import About from "./components/About";


function App() {
  const [showAddForm, setShowAddForm] = useState(false)
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }
    getTasks()
  }, [])


  const fetchTasks = async () => {
    const result = await fetch("http://localhost:8000/task")
    const data = await result.json()

    return data
  }


  const deleteTask = async (id) => {
    await fetch(`http://localhost:8000/task/${id}`, {
      method: 'DELETE'
    })
    setTasks(tasks.filter((task) => task.id !== id))
  }


  const toggleReminder = async (task) => {
    const updatatedTask = { ...task, reminder: !task.reminder }
    const result = await fetch(`http://localhost:8000/task/${task.id}`, {
      method: 'PUT',
      headers: {
        'Content-type': "application/json"
      },
      body: JSON.stringify(updatatedTask)
    })

    const data = await result.json()

    setTasks(tasks.map(item =>
      item.id === task.id ? { ...item, reminder: data.reminder } : item))
  }



  const addTask = async (task) => {
    const result = await fetch('http://localhost:8000/task', {
      method: 'POST',
      headers: {
        'Content-type': "application/json"
      },
      body: JSON.stringify(task)
    })

    const data = await result.json()

    setTasks([...tasks, data])

    // const id = Math.floor(Math.random() * 10000) + 1
    // const newTask = { id, ...task }
    // setTasks([...tasks, newTask])
  }

  return (
    <Router>
      <div className="container">
        <Header
          title="صفحه مدیریت وظایف"
          onAdd={() => setShowAddForm(!showAddForm)}
          textName={showAddForm}
        />
        <Route path="/" exact render={
          (props) => (
            <>
              {showAddForm && <AddTask addTask={addTask} />}
              {tasks.length > 0 ? <Tasks
                tasks={tasks}
                deleteTask={deleteTask}
                toggleReminder={toggleReminder}
              /> : "هیچ وظیفه ای موجود نیست"}
            </>
          )
        }        
        />
        <Route path="/about" component={About} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
