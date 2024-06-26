import { Inputs } from '../Inputs/Inputs'
import { ViewProps } from '../Task/Task'

export const NormalView: React.FC<ViewProps> = ({ task }) => {
  return (
    <li
      key={task.id}
      className={task.completed
        ? `completed task ${task.importance}`
        : `task ${task.importance.toLowerCase()}`}
    >
      <Inputs task={task} type='down' />
    </li>
  )
}
