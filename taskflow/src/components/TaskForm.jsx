import { useState } from "react"

function TaskForm({ onAddTask }) {
  const [title, setTitle] = useState("")
  const [error, setError] = useState("")

  function handleSubmit(event) {
    event.preventDefault()

    if (title.trim() === "") {
      setError("Task title cannot be empty.")
      return
    }

    onAddTask(title.trim())

    setTitle("")
    setError("")
  }

  function handleChange(event) {
    setTitle(event.target.value)

    if (error) {
      setError("")
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter a task..."
        value={title}
        onChange={handleChange}
      />

      <button type="submit">
        Add Task
      </button>

      {error && (
        <p className="form-error">
          {error}
        </p>
      )}
    </form>
  )
}

export default TaskForm