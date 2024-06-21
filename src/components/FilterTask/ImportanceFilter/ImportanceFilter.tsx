import { useContext } from 'react'
import { TasksContext } from '../../../context/TasksContext'
import { getClassName } from '../../../utils/getClassName'
import { IMPORTANCE } from '../../../../constants'

export const ImportanceFilter: React.FC = () => {
  const {
    filters,
    handleImportanceFilter
  } = useContext(TasksContext)

  return (
    <ul className='importance-filter'>
      <li>
        <button
          className={getClassName(filters.importance, IMPORTANCE.HIGH, 'active')}
          onClick={handleImportanceFilter}
        >{IMPORTANCE.HIGH}
        </button>
      </li>
      <li>
        <button
          className={getClassName(filters.importance, IMPORTANCE.MEDIUM, 'active')}
          onClick={handleImportanceFilter}
        >{IMPORTANCE.MEDIUM}
        </button>
      </li>
      <li>
        <button
          className={getClassName(filters.importance, IMPORTANCE.LOW, 'active')}
          onClick={handleImportanceFilter}
        >{IMPORTANCE.LOW}
        </button>
      </li>
    </ul>
  )
}
