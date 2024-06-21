import { FILTERS, IMPORTANCE } from '../../../constants'
import './FilterTask.css'

interface Props {
  handleStatusFilter: (event: React.MouseEvent<HTMLButtonElement>) => void
  handleImportanceFilter: (event: React.MouseEvent<HTMLButtonElement>) => void
  filters: { status: string, importance: string }
}

export const FilterTask: React.FC<Props> = ({ handleStatusFilter, handleImportanceFilter, filters }) => {
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
