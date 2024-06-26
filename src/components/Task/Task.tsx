import { Task as TaskType } from '../../../types'

import './Task.css'
import { NormalView } from '../NormalView/NormalView'
import { ExpandedView } from '../ExpandedView/ExpandedView'

export interface ViewProps {
  task: TaskType
}

interface Props {
  task: TaskType
}

export const Task: React.FC<Props> = ({ task }) => {
  return (
    <>
      {
        task.isExpanded
          ? <ExpandedView task={task} />
          : <NormalView task={task} />
      }
    </>
  )
}
