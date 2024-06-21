import { TasksActions, Tasks as TasksType } from '../../types'

export const tasksReducer = (state: TasksType, action: TasksActions): TasksType => {
  const { type, payload } = action

  switch (type) {
    case 'addTask':
      return [payload, ...state]
    case 'toggleCompleted':
      return payload
    case 'changeTask':
      return payload
    case 'removeTask':
      return payload
    default:
      return state
  }
}
