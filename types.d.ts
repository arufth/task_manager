export interface Task {
  title: string
  description: string
  id: string
  completed: boolean
  importance: string
  isExpanded: boolean
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

export interface UpdateDescription {
  type: 'updateDescription'
  payload: TasksType
}

export interface ExpandTask {
  type: 'expandTask'
  payload: TasksType
}

export interface ChangeImportance {
  type: 'changeImportance'
  payload: TasksType
}

export interface RemoveAllCompleted {
  type: 'removeAllCompleted'
  payload: TasksType
}

export type TasksActions = AddTaskAction | RemoveTaskAction | ToggleCompleted | ChangeTask | UpdateDescription | ExpandTask | ChangeImportance | RemoveAllCompleted

export interface TaskContextType {
  filters: {
    status: string
    importance: string }

  filteredTasks: Tasks
  addTask: (event: React.FormEvent<HTMLFormElement>) => void
  toggleCompleted: (id: string) => void
  changeTask: (id: string, event: React.ChangeEvent<HTMLInputElement>) => void
  removeTask: (id: string) => void
  updateDescription: (id: string, event: React.ChangeEvent<HTMLTextAreaElement>) => void
  expandTask: (id: string) => void
  changeImportance: (id: string, event: React.ChangeEvent<HTMLSelectElement>) => void
  removeAllCompleted: () => void
  handleStatusFilter: (event: React.MouseEvent<HTMLButtonElement>) => void
  handleImportanceFilter: (event: React.MouseEvent<HTMLButtonElement>) => void
}
