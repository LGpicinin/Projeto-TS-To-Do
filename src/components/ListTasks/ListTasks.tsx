// interfaces
import { ITask } from "../../interfaces/Task"
//styles
import styles from './ListTaks.module.css'

interface Props {
  taskList: ITask[]
}

const ListTasks = ({taskList}: Props) => {
  return (
    <>
      {taskList.length > 0 ? taskList.map((task: ITask) => (
        <div key={task.id} className={styles.taskContainer}>
          <div className={styles.details}>
            <h4>{task.title}</h4>
            <p>Dificuldade: {task.difficulty}</p>
          </div>
          <div className={styles.actions}>
            <i className="bi bi-pencil"></i>
            <i className="bi bi-trash"></i>
          </div>
        </div>
      )) : (<p>Sem tarefas cadastradas</p>)}

    </>
  )
}

export default ListTasks