import React, { useEffect, useRef, useState } from 'react'
import './App.css'

import { FILTERS, IMPORTANCE } from '../constants'
import { getTasks } from './services/getTasks'
import { Tasks as TasksType } from '../types'
import { Tasks } from './components/Tasks/Tasks'
import { AddTask } from './components/AddTask/AddTask'
import { FilterTask } from './components/FilterTask/FilterTask'
import { CounterTasks } from './components/CounterTasks/CounterTasks'

const App: React.FC = () => {
  const [tasks, setTasks] = useState(() => getTasks())
  const inputTitle = useRef<HTMLInputElement>(null)
  const inputImportance = useRef<HTMLSelectElement>(null)
  const [filter, setFilter] = useState('All')
  const [level, setLevel] = useState('')

  useEffect(() => {
    window.localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  const addTask = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()

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

    if (inputTitle.current !== null) inputTitle.current.value = ''
    if (inputImportance.current !== null) inputImportance.current.value = ''
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

  const removeTask = (id: string): void => {
    const newTask = tasks.filter(task => task.id !== id)
    setTasks(newTask)
  }

  const hanldeFilterTasks = (event: React.MouseEvent<HTMLButtonElement>): void => {
    const newFilter = event.currentTarget.textContent ?? filter
    setFilter(newFilter)
    filterTasks(newFilter)
  }

  const handleLevelFilter = (event: React.MouseEvent<HTMLButtonElement>): void => {
    const newLevel = event.currentTarget.textContent ?? level
    if (newLevel === level) setLevel('')
    else setLevel(newLevel)
  }

  const filterTasks = (filter: string): TasksType => {
    if (filter === FILTERS.PENDING) return tasks.filter(task => !task.completed)
    if (filter === FILTERS.COMPLETED) return tasks.filter(task => task.completed)
    return tasks
  }

  const filterTasksLevel = (level: string, previousFiltered: TasksType): TasksType => {
    if (level === IMPORTANCE.HIGH) return previousFiltered.filter(task => task.importance === level)
    if (level === IMPORTANCE.MEDIUM) return previousFiltered.filter(task => task.importance === level)
    if (level === IMPORTANCE.LOW) return previousFiltered.filter(task => task.importance === level)
    return previousFiltered
  }

  const filteredTasks = filterTasksLevel(level, filterTasks(filter))

  return (
    <>
      <h1>TASK MANAGER</h1>

      <AddTask addTask={addTask} inputTitle={inputTitle} />

      <Tasks
        filteredTasks={filteredTasks}
        toggleCompleted={toggleCompleted}
        changeTask={changeTask}
        removeTask={removeTask}
      />

      <CounterTasks filteredTasks={filteredTasks} />

      <FilterTask
        level={level}
        handleLevelFilter={handleLevelFilter}
        hanldeFilterTasks={hanldeFilterTasks}
        filter={filter}
      />
    </>
  )
}

export default App
