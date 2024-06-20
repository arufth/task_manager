import { Task as TaskType } from '../../../types'
import './Task.css'

interface Props {
  task: TaskType
  toggleCompleted: (id: string) => void
  changeTask: (id: string, event: React.ChangeEvent<HTMLInputElement>) => void
  removeTask: (id: string) => void
}
export const Task: React.FC<Props> = ({ task, toggleCompleted, changeTask, removeTask }) => {
  return (
    <li
      key={task.id}
      className={task.completed ? `completed task ${task.importance}` : `task ${task.importance.toLowerCase()}`}
    >
      <input
        onChange={() => toggleCompleted(task.id)}
        className='completed-task-input'
        type='checkbox'
        checked={task.completed}
      />
      <input
        onChange={(event) => changeTask(task.id, event)}
        className={task.completed ? 'task-input completed' : 'task-input'}
        type='text'
        value={task.title}
      />
      <button
        onClick={() => removeTask(task.id)}
        className='remove-task-input'
      >x
      </button>
    </li>
  )
}
