import './AddTask.css'

interface Props {
  addTask: (event: React.FormEvent<HTMLFormElement>) => void
  inputTitle: React.RefObject<HTMLInputElement> | null
}

export const AddTask: React.FC<Props> = ({ addTask, inputTitle }) => {
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
            ref={inputTitle}
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
