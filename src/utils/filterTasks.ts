import { FILTERS, IMPORTANCE } from '../../constants'
import { Tasks as TasksType } from '../../types'

export const filterTasks = ({ status }: { status: string, importance: string }, tasks: TasksType): TasksType => {
  if (status === FILTERS.PENDING) return tasks.filter(task => !task.completed)
  if (status === FILTERS.COMPLETED) return tasks.filter(task => task.completed)
  return tasks
}

export const filterTasksImportance = ({ importance }: { status: string, importance: string }, previousFiltered: TasksType): TasksType => {
  if (importance === IMPORTANCE.HIGH) return previousFiltered.filter(task => task.importance === importance)
  if (importance === IMPORTANCE.MEDIUM) return previousFiltered.filter(task => task.importance === importance)
  if (importance === IMPORTANCE.LOW) return previousFiltered.filter(task => task.importance === importance)
  return previousFiltered
}
