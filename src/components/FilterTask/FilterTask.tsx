import { FILTERS, IMPORTANCE } from '../../../constants'
import './FilterTask.css'

interface Props {
  hanldeFilterTasks: (event: React.MouseEvent<HTMLButtonElement>) => void
  handleLevelFilter: (event: React.MouseEvent<HTMLButtonElement>) => void
  filter: string
  level: string
}

export const FilterTask: React.FC<Props> = ({ hanldeFilterTasks, filter, handleLevelFilter, level }) => {
  return (
    <section className='filter-task-section'>
      <ul>
        <li>
          <button
            className={filter === FILTERS.ALL ? 'active' : ''}
            onClick={hanldeFilterTasks}
          >{FILTERS.ALL}
          </button>
        </li>
        <li>
          <button
            className={filter === FILTERS.PENDING ? 'active' : ''}
            onClick={hanldeFilterTasks}
          >{FILTERS.PENDING}
          </button>
        </li>
        <li>
          <button
            className={filter === FILTERS.COMPLETED ? 'active' : ''}
            onClick={hanldeFilterTasks}
          >{FILTERS.COMPLETED}
          </button>
        </li>
      </ul>
      <ul>
        <li>
          <button className={level === IMPORTANCE.HIGH ? 'active' : ''} onClick={handleLevelFilter}>High</button>
        </li>
        <li>
          <button className={level === IMPORTANCE.MEDIUM ? 'active' : ''} onClick={handleLevelFilter}>Medium</button>
        </li>
        <li>
          <button className={level === IMPORTANCE.LOW ? 'active' : ''} onClick={handleLevelFilter}>Low</button>
        </li>
      </ul>
    </section>
  )
}
