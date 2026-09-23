import Header from "./components/Header"
import TaskForm from "./components/TaskForm"
import FilterBar from "./components/FilterBar"
import TaskList from "./components/TaskList"
import { useEffect, useState } from "react"
import TaskStats from "./components/TaskStats"
import SearchBar from "./components/SearchBar"

function App() {
  const [tasks, setTasks] = useState(() => {
  const savedTasks = localStorage.getItem("tasks")

  if (savedTasks) {
    return JSON.parse(savedTasks)
  }

  return [
    {
      id: 1,
      title: "Learn React",
      completed: false
    },
    {
      id: 2,
      title: "Build TaskFlow",
      completed: false
    }
  ]
})

const [search, setSearch] = useState("")
const remainingTasks = tasks.filter(
  (task) => !task.completed
).length

  useEffect(() => {
  localStorage.setItem(
    "tasks",
    JSON.stringify(tasks)
  )
}, [tasks])
  const [filter,setFilter]=useState("all")

  function deleteTask(id) {
  setTasks((previousTasks) => {
    return previousTasks.filter((task) => task.id !== id)
  })
}
  function addTask(title) {
  const newTask = {
    id: Date.now(),
    title: title,
    completed: false
  }

  setTasks((previousTasks) => {
    return [...previousTasks, newTask]
  })
}
  function toggleTask(id) {
  setTasks((previousTasks) => {
    return previousTasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          completed: !task.completed
        }
      }

      return task
    })
  })
}
  const filteredTasks = tasks.filter((task) => {
  const matchesSearch = task.title
    .toLowerCase()
    .includes(search.toLowerCase())

  if (filter === "active") {
    return !task.completed && matchesSearch
  }

  if (filter === "completed") {
    return task.completed && matchesSearch
  }

  return matchesSearch
})
  function editTask(id, newTitle) {
  setTasks((previousTasks) => {
    return previousTasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          title: newTitle
        }
      }

      return task
    })
  })
}
  function clearCompleted() {
  setTasks((previousTasks) => {
    return previousTasks.filter(
      (task) => !task.completed
    )
  })
}
  





  return (

    <div>
      <Header />

      <main>
        <TaskForm addTask={addTask} />

        <SearchBar onSearch={setSearch} />

        <FilterBar filter={filter}
        onFilterChange={setFilter}
        />

        <TaskList tasks={filteredTasks}
         onDeleteTask={deleteTask}
          onToggleTask={toggleTask}
          onEditTask={editTask} />
        <TaskStats tasks={tasks} onClearCompleted={clearCompleted} />  
      </main>
    </div>
  )
}

export default App