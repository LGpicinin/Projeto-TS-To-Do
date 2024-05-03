// interfaces
import { ITask } from "../../interfaces/Task"
//styles
import styles from './ListTaks.module.css'

interface Props {
  taskList: ITask[]
  deleteTask: (taskId: number) => void;
  chooseEditTask: (task: ITask) => void;
}

const ListTasks = ({taskList, deleteTask, chooseEditTask}: Props) => {


  const editTask = (task: ITask): void => {
    chooseEditTask(task);
  }


  return (
    <>
      {taskList.length > 0 ? taskList.map((task: ITask) => (
        <div key={task.id} className={styles.taskContainer}>
          <div className={styles.details}>
            <h4>{task.title}</h4>
            <p>Dificuldade: {task.difficulty}</p>
          </div>
          <div className={styles.actions}>
            <i onClick={() => editTask(task)} className="bi bi-pencil"></i>
            <i onClick={() => deleteTask(task.id)} className="bi bi-trash"></i>
          </div>
        </div>
      )) : (<p>Sem tarefas cadastradas</p>)}

    </>
  )
}

export default ListTasks