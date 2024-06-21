import { useContext } from 'react'

import { FILTERS, IMPORTANCE } from '../../../constants'

import { TasksContext } from '../../context/TasksContext'

import './FilterTask.css'

export const FilterTask: React.FC = () => {
  const {
    filters,
    handleImportanceFilter,
    handleStatusFilter
  } = useContext(TasksContext)

  return (
    <section className='filter-task-section'>
      <ul>
        <li>
          <button
            className={filters.status === FILTERS.ALL ? 'active' : ''}
            onClick={handleStatusFilter}
          >{FILTERS.ALL}
          </button>
        </li>
        <li>
          <button
            className={filters.status === FILTERS.PENDING ? 'active' : ''}
            onClick={handleStatusFilter}
          >{FILTERS.PENDING}
          </button>
        </li>
        <li>
          <button
            className={filters.status === FILTERS.COMPLETED ? 'active' : ''}
            onClick={handleStatusFilter}
          >{FILTERS.COMPLETED}
          </button>
        </li>
      </ul>
      <ul>
        <li>
          <button className={filters.importance === IMPORTANCE.HIGH ? 'active' : ''} onClick={handleImportanceFilter}>{IMPORTANCE.HIGH}</button>
        </li>
        <li>
          <button className={filters.importance === IMPORTANCE.MEDIUM ? 'active' : ''} onClick={handleImportanceFilter}>{IMPORTANCE.MEDIUM}</button>
        </li>
        <li>
          <button className={filters.importance === IMPORTANCE.LOW ? 'active' : ''} onClick={handleImportanceFilter}>{IMPORTANCE.LOW}</button>
        </li>
      </ul>
    </section>
  )
}
