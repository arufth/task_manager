import { StatusFilter, ImportanceFilter } from './'

import './FilterTask.css'

export const FilterTask: React.FC = () => {
  return (
    <section className='filter-task-section'>
      <StatusFilter />
      <ImportanceFilter />
    </section>
  )
}
