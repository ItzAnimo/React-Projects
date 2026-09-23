function TaskStats({
  tasks,
  onClearCompleted
}) {
  const remainingTasks = tasks.filter(
    (task) => !task.completed
  ).length

  const completedTasks = tasks.filter(
    (task) => task.completed
  ).length

  if (tasks.length === 0) {
    return null
  }

  return (
    <div>
      <p>
        {remainingTasks}{" "}
        {remainingTasks === 1 ? "task" : "tasks"} remaining
      </p>

      {completedTasks > 0 && (
        <button onClick={onClearCompleted}>
          Clear completed
        </button>
      )}
    </div>
  )
}

export default TaskStats