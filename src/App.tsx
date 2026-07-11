import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import Modal from './components/Modal';

//CSS
import styles from './App.module.css';

//Interface
import { ITask } from './interfaces/Task';


function App() {

  const [taskList, setTaskList] = useState<ITask[]>([]);

  //Delete a taskList criada 
  const deleteTaks = (id: number) => {
    setTaskList(
      taskList.filter((task) =>{
        return task.id !== id;
      })
    )
  }

  const hiderOrShowModal = (display : boolean) => {
    const modal = document.querySelector("#modal");
    if(display){
      modal!.classList.remove("hide");
    }else{
      modal!.classList.add("hide");
    }
  }

  const editTask = ():void => {
    hiderOrShowModal(true);
  }

  return (
    <div>
      <Modal children={<TaskForm btnText="Criar Tarefa" taskList={taskList} setTaskList={setTaskList} />} />
      <Header />
      <main className={styles.main}>
        <h1>Bem-vindo ao Anotações Tarefas!</h1>
        <div>
          <h2>O que você vai fazer hoje?</h2>
          <TaskForm 
            btnText="Criar Tarefa" 
            taskList={taskList} 
            setTaskList={setTaskList} 
          />
        </div>
        <div>
          <h2>Suas Tarefas:</h2>
          <TaskList 
            taskList={taskList} 
            handleDelete={deleteTaks}
            handleEdit={editTask} 
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
