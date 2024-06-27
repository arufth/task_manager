import { useContext } from 'react'

import { ViewProps } from '../'

import { TasksContext } from '../../context/'

import './Inputs.css'

interface InputsProps extends ViewProps {
  type: string
}

export const Inputs: React.FC<InputsProps> = ({ task, type }) => {
  const {
    toggleCompleted,
    changeTask,
    expandTask
  } = useContext(TasksContext)

  return (
    <div className='container-task-inputs'>
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
        onClick={() => expandTask(task.id)}
        className='expand-btn'
      > <i className={`fa-solid fa-caret-${type} fa-2xl`} />
      </button>
    </div>
  )
}
