import { useContext } from 'react'
import { TasksContext } from '../../context/TasksContext'

import './RemoveButton.css'

export const RemoveButton: React.FC = () => {
  const {
    removeAllCompleted
  } = useContext(TasksContext)

  return (
    <section className='remove-all-section'>
      <button
        onClick={removeAllCompleted}
        className='remove-all-btn'
      >Remove All Completed Tasks
      </button>
    </section>
  )
}
