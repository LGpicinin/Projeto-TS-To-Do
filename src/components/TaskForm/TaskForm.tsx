// react
import { useState, useEffect, FormEvent } from "react"
// styles
import styles from "./TaskForm.module.css"
// interfaces
import { ITask } from "../../interfaces/Task";

interface Props {
  btnText: string;
  addTask: (task: ITask) => void;
  editedTask: ITask | null;
  editTask: (task: ITask) => void;
}

const TaskForm = ({ btnText, addTask, editedTask, editTask }: Props) => {

  const [title, setTitle] = useState<string>("")
  const [difficulty, setDifficulty] = useState<number>(0)

  useEffect(() => {
    if(editedTask){
      setDifficulty(editedTask.difficulty);
      setTitle(editedTask.title);
    }
  }, [editedTask])


  const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(editedTask){

      editedTask.title = title;
      editedTask.difficulty = difficulty;
      editTask(editedTask)

    } else {

      const id = Math.floor(Math.random() * 1000);
      const newTask: ITask = {
        id, title, difficulty,
      }
      addTask(newTask);
      setTitle("");
      setDifficulty(0);
    }
  }


  return (
    <div>
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