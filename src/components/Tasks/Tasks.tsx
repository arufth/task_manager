
import { useContext } from 'react'

import { TasksContext } from '../../context/TasksContext'

import { Task } from '../Task/Task'

import './Tasks.css'

export const Tasks: React.FC = () => {
  const { filteredTasks } = useContext(TasksContext)

  return (
    <section className='show-task-section'>
      <ul>
        {
            filteredTasks.map(task => (
              <Task
                key={task.id}
                task={task}
              />
            ))
          }
      </ul>
    </section>
  )
}
