import { createContext, useState } from 'react'
import { TaskContextType } from '../../types'
import { defaultContextValue } from '../../constants'

export const TasksContext = createContext<TaskContextType>(defaultContextValue)

interface Props {
  children: React.ReactNode
}

export const TasksContextProvider: React.FC<Props> = ({ children }) => {
  const [filters, setFilters] = useState({
    status: 'All',
    importance: ''
  })

  return (
    <TasksContext.Provider value={{ filters, setFilters }}>
      {children}
    </TasksContext.Provider>
  )
}
