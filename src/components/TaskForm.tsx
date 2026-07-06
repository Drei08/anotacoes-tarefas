import React from 'react'

//CSS
import styles from './TaskForm.module.css'

type Props = {
  btnText: string
}

const TaskForm = ({btnText}: Props) => {
  return (
    <form className={styles.form}>
      <div className={styles.input_container}>
        <label htmlFor="title">Titulo</label>
        <input type="text" name="title" placeholder="Digite o titulo da tarefa" />
      </div>
      <div className={styles.input_container}>
        <label htmlFor="dificulty">Dificuldade</label>
        <input type="text" name="dificulty" placeholder="Digite a dificuldade da tarefa" />
      </div>
      <input type="submit" value={btnText} />
    </form>
  )
}

export default TaskForm