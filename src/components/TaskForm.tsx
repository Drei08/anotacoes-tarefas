import React, { useState, ChangeEvent, useEffect } from 'react'

//CSS
import styles from './TaskForm.module.css'

//Interface
import { ITask } from '../interfaces/Task';

type Props = {
  btnText: string
  taskList: ITask[]
  setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>
}

const TaskForm = ({btnText, taskList, setTaskList}: Props) => {

  const [id, setId] = useState<number>(0);
  const [title, setTitle] = useState<string>("");
  const [dificulty, setDificulty] = useState<number>(0);

  const addTaskHandler = (e:React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    const id = Math.floor(Math.random() * 1000);

    const newTask: ITask = {id, title, dificulty};

    setTaskList!([...taskList, newTask]);

    setTitle("");
    setDificulty(0);
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if(e.target.name === "title") {
      setTitle(e.target.value);
    } else {
      setDificulty(parseInt(e.target.value));
    }
    console.log(title, dificulty);
  }

  return (
    <form onSubmit={addTaskHandler} className={styles.form}>
      <div className={styles.input_container}>
        <label htmlFor="title">Titulo</label>
        <input type="text" name="title" placeholder="Digite o titulo da tarefa" onChange={handleChange} value={title} />
      </div>
      <div className={styles.input_container}>
        <label htmlFor="dificulty">Dificuldade</label>
        <input type="text" name="dificulty" placeholder="Digite a dificuldade da tarefa" onChange={handleChange} value={dificulty} />
      </div>
      <input type="submit" value={btnText} />
    </form>
  )
}

export default TaskForm