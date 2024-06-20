import { Tasks as TasksType } from '../../../types'
import { Task } from '../Task/Task'
import './Tasks.css'

interface Props {
  filteredTasks: TasksType
  toggleCompleted: (id: string) => void
  changeTask: (id: string, event: React.ChangeEvent<HTMLInputElement>) => void
  removeTask: (id: string) => void
}

export const Tasks: React.FC<Props> = ({ filteredTasks, toggleCompleted, changeTask, removeTask }) => {
  return (
    <section className='show-task-section'>
      <ul>
        {
            filteredTasks.map(task => (
              <Task
                key={task.id}
                task={task}
                toggleCompleted={toggleCompleted}
                changeTask={changeTask}
                removeTask={removeTask}
              />
            ))
          }
      </ul>
    </section>
  )
}
