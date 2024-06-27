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
  completed: true,
  description: '',
  id: '',
  importance: 'High',
  isExpanded: false,
  title: ''
}

export const defaultContextValue: TaskContextType = {
  filteredTasks: [dafultTasks],
  filters: defaultFilters,
  addTask: () => {},
  changeImportance: () => {},
  changeTask: () => {},
  expandTask: () => {},
  handleImportanceFilter: () => {},
  handleStatusFilter: () => {},
  removeAllCompleted: () => {},
  removeTask: () => {},
  toggleCompleted: () => {},
  updateDescription: () => {}
}
