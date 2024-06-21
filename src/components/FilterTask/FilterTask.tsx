import { StatusFilter } from './StatusFilter/StatusFilter'
import { ImportanceFilter } from './ImportanceFilter/ImportanceFilter'

import './FilterTask.css'

export const FilterTask: React.FC = () => {
  return (
    <section className='filter-task-section'>
      <StatusFilter />
      <ImportanceFilter />
    </section>
  )
}
