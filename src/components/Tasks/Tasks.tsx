
import { useContext } from 'react'

import { TasksContext } from '../../context/'

import { Task } from '../'

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
