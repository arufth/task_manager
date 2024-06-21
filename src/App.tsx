import React, { useEffect, useState } from 'react'

import { FILTERS, IMPORTANCE } from '../constants'
import { getTasks } from './services/getTasks'
import { Tasks as TasksType } from '../types'
import { Tasks } from './components/Tasks/Tasks'
import { AddTask } from './components/AddTask/AddTask'
import { FilterTask } from './components/FilterTask/FilterTask'
import { CounterTasks } from './components/CounterTasks/CounterTasks'

import './App.css'

const App: React.FC = () => {
  const [tasks, setTasks] = useState(() => getTasks())
  const [filters, setFilters] = useState({
    status: 'All',
    importance: ''
  })

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

    setTasks([newTask, ...tasks])
    form.reset()
  }

  const toggleCompleted = (id: string): void => {
    const newTasks = tasks.map(task => {
      if (task.id === id) return { ...task, completed: !task.completed }
      return task
    })

    setTasks(newTasks)
  }

  const changeTask = (id: string, event: React.ChangeEvent<HTMLInputElement>): void => {
    const newTasks = tasks.map(task => {
      if (task.id === id) return { ...task, title: event.target.value }
      return task
    })
    setTasks(newTasks)
  }

  const removeTask = (id: string): void => setTasks(tasks.filter(task => task.id !== id))

  const handleStatusFilter = (event: React.MouseEvent<HTMLButtonElement>): void => {
    const status = event.currentTarget.textContent ?? filters.status
    const newFilter = { ...filters, status }
    setFilters(newFilter)
    filterTasks(newFilter)
  }

  const handleImportanceFilter = (event: React.MouseEvent<HTMLButtonElement>): void => {
    const newImportance = event.currentTarget.textContent ?? filters.importance
    if (newImportance === filters.importance) setFilters({ ...filters, importance: '' })
    else setFilters({ ...filters, importance: newImportance })
  }

  const filterTasks = ({ status }: { status: string, importance: string }): TasksType => {
    if (status === FILTERS.PENDING) return tasks.filter(task => !task.completed)
    if (status === FILTERS.COMPLETED) return tasks.filter(task => task.completed)
    return tasks
  }

  const filterTasksImportance = ({ importance }: { status: string, importance: string }, previousFiltered: TasksType): TasksType => {
    if (importance === IMPORTANCE.HIGH) return previousFiltered.filter(task => task.importance === importance)
    if (importance === IMPORTANCE.MEDIUM) return previousFiltered.filter(task => task.importance === importance)
    if (importance === IMPORTANCE.LOW) return previousFiltered.filter(task => task.importance === importance)
    return previousFiltered
  }

  const filteredTasks = filterTasksImportance(filters, filterTasks(filters))

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
