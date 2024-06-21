export interface Task {
  title: string
  id: string
  completed: boolean
  importance: string
}

export type Tasks = Task[]

export interface AddTaskAction {
  type: 'addTask'
  payload: TaskType
}

export interface ToggleCompleted {
  type: 'toggleCompleted'
  payload: TasksType
}
export interface ChangeTask {
  type: 'changeTask'
  payload: TasksType
}

export interface RemoveTaskAction {
  type: 'removeTask'
  payload: TasksType
}

export type TasksActions = AddTaskAction | RemoveTaskAction | ToggleCompleted | ChangeTask

export interface TaskContextType {
  filters: {
    status: string
    importance: string }

  setFilters: React.Dispatch<React.SetStateAction<{
    status: string
    importance: string
  }>>
}
