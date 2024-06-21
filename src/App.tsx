import { Tasks } from './components/Tasks/Tasks'
import { AddTask } from './components/AddTask/AddTask'
import { FilterTask } from './components/FilterTask/FilterTask'
import { CounterTasks } from './components/CounterTasks/CounterTasks'

import './App.css'

const App: React.FC = () => {
  return (
    <>
      <h1>TASK MANAGER</h1>
      <AddTask />
      <Tasks />
      <CounterTasks />
      <FilterTask />
    </>
  )
}

export default App
