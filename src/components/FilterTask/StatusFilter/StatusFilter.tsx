import { useContext } from 'react'

import { TasksContext } from '../../../context/'

import { getClassName } from '../../../utils/'

import { FILTERS } from '../../../../constants'

export const StatusFilter: React.FC = () => {
  const {
    filters,
    handleStatusFilter
  } = useContext(TasksContext)

  return (
    <ul className='status-filter'>
      <li>
        <button
          className={getClassName(filters.status, FILTERS.ALL, 'active')}
          onClick={handleStatusFilter}
        >{FILTERS.ALL}
        </button>
      </li>
      <li>
        <button
          className={getClassName(filters.status, FILTERS.PENDING, 'active')}
          onClick={handleStatusFilter}
        >{FILTERS.PENDING}
        </button>
      </li>
      <li>
        <button
          className={getClassName(filters.status, FILTERS.COMPLETED, 'active')}
          onClick={handleStatusFilter}
        >{FILTERS.COMPLETED}
        </button>
      </li>
    </ul>
  )
}
