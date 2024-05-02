// hooks
import { useState } from 'react'
// styles
import styles from './App.module.css'
// components
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import ListTasks from './components/ListTasks/ListTasks'
import TaskForm from './components/TaskForm/TaskForm'
// interfaces
import { ITask } from "./interfaces/Task";

function App() {

  const [taskList, setTaskList] = useState<ITask[]>([]);

  const addTask = (task:ITask) => {
    setTaskList([...taskList, task]);
  }

  console.log(taskList)

  return (
    <>
      <Header/>
      <div className={styles.main}>
        <TaskForm btnText='Criar Tarefa' addTask={addTask}/>
        <ListTasks taskList={taskList}/>
      </div>
      <Footer/>
    </>
  )
}

export default App
