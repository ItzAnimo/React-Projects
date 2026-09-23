import TaskItem from "./TaskItem"

function TaskList({
  tasks,
  onDeleteTask,
  onToggleTask,
  onEditTask
}) {
  if (tasks.length === 0) {
    return (
      <section>
        <p>No tasks found.</p>
      </section>
    )
  }

  return (
    <section>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onDeleteTask={onDeleteTask}
          onToggleTask={onToggleTask}
          onEditTask={onEditTask}
        />
      ))}
    </section>
  )
}

export default TaskList