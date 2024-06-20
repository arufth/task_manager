import { Tasks } from '../../../types'
import './CounterTasks.css'

interface Props {
  filteredTasks: Tasks
}

export const CounterTasks: React.FC<Props> = ({ filteredTasks }) => {
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
