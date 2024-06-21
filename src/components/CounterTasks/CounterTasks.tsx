import { useContext } from 'react'

import { TasksContext } from '../../context/TasksContext'

import './CounterTasks.css'

export const CounterTasks: React.FC = () => {
  const { filteredTasks } = useContext(TasksContext)

  return (
    <section>
      {
      filteredTasks.length > 0
        ? (
          <p className='counter-tasks'>
            Tasks left: <span className='count'>{filteredTasks.length}</span>
          </p>
          )

        : (
          <p className='counter-tasks'>
            <span className='count'>There are no tasks</span>
          </p>
          )
      }
    </section>
  )
}
