// react
import { useState, FormEvent } from "react"
// styles
import styles from "./TaskForm.module.css"
// interfaces
import { ITask } from "../../interfaces/Task";

interface Props {
  btnText: string;
  addTask: (task: ITask) => void;
}

const TaskForm = ({ btnText, addTask }: Props) => {

  const [title, setTitle] = useState<string>("")
  const [difficulty, setDifficulty] = useState<number>(0)

  const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const id = Math.floor(Math.random() * 1000);
    const newTask: ITask = {
      id, title, difficulty,
    }
    addTask(newTask);

    setTitle("");
    setDifficulty(0);
  }


  return (
    <div>
      <h2>O que você vai fazer?</h2>
      <form onSubmit={(e) => handleSubmit(e)} className={styles.form}>
        <div className={styles.inputContainer}>
          <label>Título: </label>
          <input type="text" placeholder="Título da tarefa" value={title} onChange={(e) => setTitle(e.target.value)}/>
        </div>
        <div className={styles.inputContainer}>
          <label>Dificuldade: </label>
          <input type="number" placeholder="Dificuldade da tarefa" value={difficulty} onChange={(e) => setDifficulty(parseInt(e.target.value))}/>
        </div>
        <input type="submit"  value={btnText}/>
      </form>
    </div>
  )
}

export default TaskForm