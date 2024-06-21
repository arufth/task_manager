import './AddTask.css'

interface Props {
  addTask: (event: React.FormEvent<HTMLFormElement>) => void
}

export const AddTask: React.FC<Props> = ({ addTask }) => {
  return (
    <section className='add-task-section'>
      <form onSubmit={addTask}>
        <label className='title-label'>
          <span>Add your Task</span>
          <input
            required
            name='title'
            type='text'
            placeholder='Learn about girls :/'
          />
        </label>
        <label className='importance-label'>
          <span>Importance</span>
          <select name='importance' id='importance'>
            <option value='High'>High</option>
            <option value='Medium'>Medium</option>
            <option value='Low'>Low</option>
          </select>
        </label>
        <button>ADD TASK</button>
      </form>
    </section>
  )
}
