import type { Tasks } from '../../types.ts'

export const getTasks = (): Tasks => {
  const tasksFromLS = window.localStorage.getItem('tasks')
  const initialTasks = tasksFromLS !== null ? JSON.parse(tasksFromLS) : []
  return initialTasks
}
