import React, { useContext, useEffect, useReducer } from 'react'

import { tasksReducer } from './reducer/taskReducer'

import { getTasks } from './services/getTasks'

import { Tasks } from './components/Tasks/Tasks'
import { AddTask } from './components/AddTask/AddTask'
import { FilterTask } from './components/FilterTask/FilterTask'
import { CounterTasks } from './components/CounterTasks/CounterTasks'

import { filterTasks, filterTasksImportance } from './utils/filterTasks'

import { TasksContext } from './context/TasksContext'

import './App.css'

const App: React.FC = () => {
  const { filters, setFilters } = useContext(TasksContext)

  const [tasks, dispatch] = useReducer(tasksReducer, undefined, getTasks)

  const addTask = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(event.target as HTMLFormElement)
    const title = formData.get('title') as string
    const importance = formData.get('importance') as string

    const newTask = {
      title,
      id: window.crypto.randomUUID(),
      completed: false,
      importance
    }

    dispatch({ type: 'addTask', payload: newTask })
    form.reset()
  }

  const toggleCompleted = (id: string): void => {
    const newTasks = tasks.map(task => {
      if (task.id === id) return { ...task, completed: !task.completed }
      return task
    })

    dispatch({ type: 'toggleCompleted', payload: newTasks })
  }

  const changeTask = (id: string, event: React.ChangeEvent<HTMLInputElement>): void => {
    const newTasks = tasks.map(task => {
      if (task.id === id) return { ...task, title: event.target.value }
      return task
    })

    dispatch({ type: 'changeTask', payload: newTasks })
  }

  const removeTask = (id: string): void => {
    const newTasks = tasks.filter(task => task.id !== id)
    dispatch({ type: 'removeTask', payload: newTasks })
  }

  const handleStatusFilter = (event: React.MouseEvent<HTMLButtonElement>): void => {
    const status = event.currentTarget.textContent ?? filters.status
    const newFilter = { ...filters, status }
    setFilters(newFilter)
    filterTasks(newFilter, tasks)
  }

  const handleImportanceFilter = (event: React.MouseEvent<HTMLButtonElement>): void => {
    const newImportance = event.currentTarget.textContent ?? filters.importance
    if (newImportance === filters.importance) setFilters({ ...filters, importance: '' })
    else setFilters({ ...filters, importance: newImportance })
  }

  const filteredTasks = filterTasksImportance(filters, filterTasks(filters, tasks))

  useEffect(() => {
    window.localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  return (
    <>
      <h1>TASK MANAGER</h1>

      <AddTask addTask={addTask} />

      <Tasks
        filteredTasks={filteredTasks}
        toggleCompleted={toggleCompleted}
        changeTask={changeTask}
        removeTask={removeTask}
      />

      <CounterTasks filteredTasks={filteredTasks} />

      <FilterTask
        filters={filters}
        handleImportanceFilter={handleImportanceFilter}
        handleStatusFilter={handleStatusFilter}
      />
    </>
  )
}

export default App
