import { TaskContextType } from './types'

export const FILTERS = {
  ALL: 'All',
  PENDING: 'Pending',
  COMPLETED: 'Completed'
}

export const IMPORTANCE = {
  HIGH: 'High',
  MEDIUM: 'Medium',
  LOW: 'Low'
}

export const defaultFilters = {
  status: '',
  importance: 'High'
}

export const dafultTasks = {
  title: '',
  id: '',
  completed: true,
  importance: 'High'
}

export const defaultContextValue: TaskContextType = {
  filters: defaultFilters,
  filteredTasks: [dafultTasks],
  addTask: () => {},
  toggleCompleted: () => {},
  changeTask: () => {},
  removeTask: () => {},
  handleStatusFilter: () => {},
  handleImportanceFilter: () => {}
}
