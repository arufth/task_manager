import { useContext } from 'react'
import { TasksContext } from '../../context/TasksContext'
import { ViewProps } from '../Task/Task'
import { Inputs } from '../Inputs/Inputs'

import './ExpandedView.css'

export const ExpandedView: React.FC<ViewProps> = ({ task }) => {
  const {
    removeTask,
    changeImportance,
    updateDescription
  } = useContext(TasksContext)
  return (
    <li
      key={task.id}
      className={task.completed
        ? `completed task expanded ${task.importance}`
        : `task expanded ${task.importance.toLowerCase()}`}
    >
      <Inputs task={task} type='up' />

      <form>
        <label>
          <span className='desc-span'>Description</span>
          <textarea
            value={task.description}
            onChange={(event) => updateDescription(task.id, event)}
            placeholder='This task is pretty important bc it has ...'
          />
        </label>
      </form>

      <div className='footer-btns'>

        <label className='importance-label'>
          <select
            onChange={(event) => changeImportance(task.id, event)}
            name='importance'
            id='importance'
            value={task.importance}
          >
            <option value='High'>High</option>
            <option value='Medium'>Medium</option>
            <option value='Low'>Low</option>
          </select>
        </label>

        <button
          onClick={() => removeTask(task.id)}
          className='remove-task-input'
        >Remove Task
        </button>
      </div>
    </li>
  )
}
