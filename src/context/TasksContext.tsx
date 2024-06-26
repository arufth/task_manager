import { createContext, useEffect, useReducer, useState } from 'react'
import { TaskContextType } from '../../types'
import { defaultContextValue } from '../../constants'
import { tasksReducer } from '../reducer/taskReducer'
import { getTasks } from '../services/getTasks'
import { filterTasks, filterTasksImportance } from '../utils/filterTasks'

export const TasksContext = createContext<TaskContextType>(defaultContextValue)

interface Props {
  children: React.ReactNode
}

export const TasksContextProvider: React.FC<Props> = ({ children }) => {
  const [tasks, dispatch] = useReducer(tasksReducer, undefined, getTasks)
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
      description: '',
      id: window.crypto.randomUUID(),
      completed: false,
      importance,
      isExpanded: false
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

  const updateDescription = (id: string, event: React.ChangeEvent<HTMLTextAreaElement>): void => {
    const newTasks = tasks.map(task => {
      if (task.id === id) return { ...task, description: event.target.value }
      return task
    })
    dispatch({ type: 'updateDescription', payload: newTasks })
  }

  const expandTask = (id: string): void => {
    const newTasks = tasks.map(task => {
      if (task.id === id) return { ...task, isExpanded: !task.isExpanded }
      return task
    })

    dispatch({ type: 'expandTask', payload: newTasks })
  }

  const changeImportance = (id: string, event: React.ChangeEvent<HTMLSelectElement>): void => {
    const newTasks = tasks.map(task => {
      if (task.id === id) return { ...task, importance: event.target.value }
      return task
    })

    dispatch({ type: 'changeImportance', payload: newTasks })
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
    <TasksContext.Provider value={{ filters, filteredTasks, addTask, toggleCompleted, changeTask, removeTask, updateDescription, expandTask, handleStatusFilter, handleImportanceFilter, changeImportance }}>
      {children}
    </TasksContext.Provider>
  )
}
