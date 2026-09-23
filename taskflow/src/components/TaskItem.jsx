import { useState } from "react"

function TaskItem({
  task,
  onDeleteTask,
  onToggleTask,
  onEditTask
}) {
  const [isEditing, setIsEditing] = useState(false)
  const [editTitle, setEditTitle] = useState(task.title)

  function handleSave() {
    if (editTitle.trim() === "") {
      return
    }

    onEditTask(task.id, editTitle)
    setIsEditing(false)
  }

  if (isEditing) {
    return (
      <div>
        <input
          value={editTitle}
          onChange={(event) =>
            setEditTitle(event.target.value)
          }
        />

        <button onClick={handleSave}>
          Save
        </button>

        <button
          onClick={() => {
            setEditTitle(task.title)
            setIsEditing(false)
          }}
        >
          Cancel
        </button>
      </div>
    )
  }

  return (
    <div>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggleTask(task.id)}
      />

      <span
        className={task.completed ? "completed" : ""}
      >
        {task.title}
      </span>

      <button
        onClick={() => setIsEditing(true)}
      >
        Edit
      </button>

      <button
        onClick={() => onDeleteTask(task.id)}
      >
        Delete
      </button>
    </div>
  )
}

export default TaskItem