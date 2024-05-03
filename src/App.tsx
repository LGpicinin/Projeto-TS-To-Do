// hooks
import { useState } from 'react'
// styles
import styles from './App.module.css'
// components
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import ListTasks from './components/ListTasks/ListTasks'
import TaskForm from './components/TaskForm/TaskForm'
import Modal from './components/Modal/Modal'
// interfaces
import { ITask } from "./interfaces/Task";

function App() {

  const [taskList, setTaskList] = useState<ITask[]>([]);
  const [editedTask, setEditedTask] = useState<ITask | null>(null)

  const chooseEditTask = (task: ITask): void => {
    showOrHideModal(true);
    setEditedTask(task);
  }

  const editTask = (task: ITask):void => {
    setTaskList(taskList.filter((t) => {
      if(t.id != task.id){
        return t;
      } else {
        return task;
      }
    }));
    showOrHideModal(false);
  }

  const addTask = (task:ITask) => {
    setTaskList([...taskList, task]);
  }

  const deleteTask = (taskId: number) => {
    setTaskList(taskList.filter((task) => {
      if(task.id != taskId){
        return task;
      }
    }));
  }

  const showOrHideModal = (display: boolean):void => {
    const modal = document.querySelector("#modal");

    if(display){
      modal?.classList.remove("hide");
    } else {
      modal?.classList.add("hide");
    }
  }


  return (
    <>
      <Modal children={<TaskForm btnText='Editar tarefa' addTask={addTask} editedTask={editedTask} editTask={editTask}/>}/>
      <Header/>
      <div className={styles.main}>
        <TaskForm btnText='Criar Tarefa' addTask={addTask} editedTask={null} editTask={editTask}/>
        <ListTasks taskList={taskList} deleteTask={deleteTask} chooseEditTask={chooseEditTask}/>
      </div>
      <Footer/>
    </>
  )
}

export default App
