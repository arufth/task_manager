import { Tasks, AddTask, CounterTasks, FilterTask, RemoveButton } from './components'

import './App.css'

const App: React.FC = () => {
  return (
    <>
      <h1>TASK MANAGER</h1>
      <AddTask />
      <Tasks />
      <CounterTasks />
      <FilterTask />
      <RemoveButton />
    </>
  )
}

export default App
