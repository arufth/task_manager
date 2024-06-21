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

  filteredTasks: Tasks
  addTask: (event: React.FormEvent<HTMLFormElement>) => void
  toggleCompleted: (id: string) => void
  changeTask: (id: string, event: React.ChangeEvent<HTMLInputElement>) => void
  removeTask: (id: string) => void
  handleStatusFilter: (event: React.MouseEvent<HTMLButtonElement>) => void
  handleImportanceFilter: (event: React.MouseEvent<HTMLButtonElement>) => void
}
